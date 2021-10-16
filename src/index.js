console.log('%c HI', 'color: firebrick')

// Challenge 1

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => randomDogFunction(data))

function randomDogFunction(data) {
    data.message.forEach(urlLink => {
        let img = document.createElement("img")
        img.src = urlLink
        img.style.maxWidth = "300px"
        let dogImageContainer = document.querySelector("#dog-image-container")
        dogImageContainer.append(img)
    })
}

// Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = []
const dogList = document.getElementById("dog-breeds")



fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => renderAllBreeds(Object.keys(data.message)))

function renderAllBreeds(breeds) {
    allBreeds = breeds
    allBreeds.forEach(renderEachBreed)
}

function renderEachBreed(breed) {
    let li = document.createElement("li")
    li.innerText = breed
    dogList.appendChild(li)
}

// Challenge 3

// let a = document.querySelector("a")
// console.log(a)

let li = document.querySelectorAll("li")
// console.log(li)

document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', event => {
        item.style.color = "red"
    })
})



// li.forEach(function (element) {
//     element.addEventListener("click", function (e) {
//         e.target.style.color = "red"
//     })
// })

// a.addEventListener("click", () => {
//     a.style.color = "red"
// })

// function breedClick(event) {
//     event.style.color = "red"
// }