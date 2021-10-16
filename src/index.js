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

fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => dogBreedFunction(data))

function dogBreedFunction(data) {
}




