const path = require('path')
const express = require('express');
const newsQuery = require('./local-mods/query')

const app = express();

const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))

app.get('/newsquery', (req, res) => {
    newsQuery(req.query.search, (error, newsData) => {
            if (error) {
            return console.log(error)
            } else {
                const newsDetails = {
                    searchterm: req.query.search,
                    news: newsData

                }
                console.log(newsDetails)
                res.send(newsDetails)
            }

        })

})


app.listen(3001, () => {
    console.log('Port is listening')
})