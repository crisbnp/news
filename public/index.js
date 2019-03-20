
const input = document.querySelector("#search")
const newsTitle = document.querySelector("#newstitle")
const newsDescription = document.querySelector("#newsdescription")

document.getElementById("submit").addEventListener("click", () => {
    fetch("http://localhost:3001/newsquery?search=" + input.value)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const news = data.news.map((newsdata) => {
                console.log(newsdata)
                
                return {
                    title: newsdata.title,
                    author: newsdata.author,
                    description: newsdata.description,
                    imageURL: newsdata.urlToImage,
                    articleURL: newsdata.url
                }
            })

            for (let i = 0; i<news.length; i++) {
                newsTitle.innerHTML = news[i].title;
                newsDescription.innerHTML = news[i].description;
            }
            console.log(news)
        })
    }
)
