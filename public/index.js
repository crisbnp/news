
const input = document.querySelector("#input")
const newsData = document.querySelector("#newsdata")

document.getElementById("submit").addEventListener("click", () => {
    fetch("http://localhost:3000/newsquery?search=" + input.value)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            newsData.innerHTML = data.title;
            newsData.innerHTML = data.description;
        })

})

// document.getElementById("submit").addEventListener("click", () => {
//     fetch("http://localhost:3000/weather?address=" + input.value)
//         .then((response) => {
//             console.log(response)
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data)
//             weather.innerHTML = data.forecast
//             place.innerHTML = data.location
//         })
//     }
// )