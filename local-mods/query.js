const request = require('request');


const newsQuery = (search, callback) => {
    const url = 'https://newsapi.org/v2/everything?q=' + search + '&apiKey=b25db8991ae8432184d7af1bf8bea2b3';

    request ({url, json: true}, (error, res) => {
        // console.log(res.body)
        if(error) {
            callback("Can't connect to News provider!")
        } else if(res.body.status === 'error') {
            callback(res.body.message)
        } else {
            const { articles } = res.body
            // articles.map((article) =>{
            //     console.log(article)
            // })
            articles.map((article) => {
                callback(undefined, `${article.urlToImage}\nNews: ${article.title}\nBy ${article.author}\n${article.description}`)
             })
            
        }
    }
)
}

module.exports = newsQuery;