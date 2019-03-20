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
            const results = articles.map((article) => {
                return {
                    title: article.title,
                    author: article.author,
                    description: article.description,
                    imageURL: article.urlToImage,
                    articleURL: article.url
                }
             })

             callback(undefined, results)
  
        }
    }
)
}

module.exports = newsQuery;