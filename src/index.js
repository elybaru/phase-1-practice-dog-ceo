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

document.addEventListener("DOMContentLoaded", () => {
    fetchLinks()
})

function fetchLinks() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            renderAllBreeds(Object.keys(data.message))
            addListeners()
        })
}

function addListeners() {
    let dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", filterBreedByLetter)
    dogList.addEventListener("click", changeColor)

}

function renderAllBreeds(breeds) {
    allBreeds = breeds
    allBreeds.forEach(renderEachBreed)
}

function renderEachBreed(breed) {
    console.log(breed)
    let li = document.createElement("li")
    li.innerText = breed
    // li.addEventListener("click", changeColor)
    dogList.appendChild(li)
    // map the data from all breeds to a shorter list by value reasign breed variable
    // this event listener will push to a callback the letter
    // then in this callback, it will filter all the breeds saved into allbreeds by the value of letter
    // then it will push the filtered result back into renderEachBreed
    // then it will be printed to the DOM with lis. 
}

// Array.from(li).forEach(item => {
//     console.log(item)
//     item.addEventListener('click', event => {
//         item.style.color = "red"
//     })
// })

// JS parses 3 times

// We are fetching breed URL
// We are turning into response, jsonifying it
// then taking data from json then filtering by object keys of the data keys 
// renderAllbreeds is called, first assigning the filtered keys to a globally scoped variable
// then calling a function and inputing the filtered data into the parameter, to renderEachBreed
// 
function filterBreedByLetter() {
    // console.log(allBreeds)
    let letter = document.getElementById("breed-dropdown").value
    const filteredBreeds = allBreeds.filter(function (item) {
        return item[0] === letter;
    })
    console.log(filteredBreeds)
    dogList.innerHTML = ''
    console.log(filteredBreeds.length)
    if (filteredBreeds.length > 0) {
        filteredBreeds.forEach(renderEachBreed)
    } else {
        dogList.innerHTML = `<p>There are no doggos that start with the letter ${letter}</p>`
    }
    // renderEachBreed(filteredBreeds);


}


// Challenge 3
// This code works

// function changeColor(event) {
//     let colorText = event.target.style.color
//     if (colorText === "black") {
//         event.target.style.color = "red"
//     } else {
//         event.target.style.color = "black"
//     }
// }

// Challenge 4


// What's the deal with semicolons? Best practice?

// Challenge 3 option with boolean- not yet working
function changeColor(event) {
    let colorText;
    if (!colorText) {
        event.target.style.color = "red"
        colorText = false
    } else {
        event.target.style.color = "black"
        colorText = true
    }
}

// Why didn't this work in Challenge 3?




// li.forEach(function (element) {
//     element.addEventListener("click", function (e) {
//         e.target.style.color = "red"
//     })
// })