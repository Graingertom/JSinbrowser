(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const myForm = document.querySelector('form')

// Display Greeting message (create a h2, add textContent of input)
myForm.addEventListener("submit", e => {
    e.preventDefault();

    let greeting = e.target.to.value
    let celebration = e.target.typeOfEvent.value
    let message = e.target.from.value
    
    let newHeader = document.createElement('h2')
    let newGreeting = document.createTextNode(`To ${greeting}`)
    newHeader.appendChild(newGreeting)
    newHeader.style.textAlign = "center"
    newHeader.style.color = "white"

    let body = document.querySelector('body');
    body.appendChild(newHeader)

    let newPara1 = document.createElement('p')
    let displayCelebration = () => {
        if (celebration === "birthday") {
            return document.createTextNode("Happy Birthday!!")
        } else if (celebration === "christmas") {
            return document.createTextNode("Merry Christmas")
        } else if (celebration === "easter") {
            return document.createTextNode("Happy Easter!")
        }
    }
    let newCelebration = displayCelebration()
    newPara1.appendChild(newCelebration)
    newPara1.style.textAlign = "center"
    newPara1.style.color = "white"

    let newPara2 = document.createElement('p')
    let newMessage = document.createTextNode(`From ${message}`)
    newPara2.appendChild(newMessage)
    newPara2.style.textAlign = "center"
    newPara2.style.color = "white"

    body.appendChild(newPara1)
    body.appendChild(newPara2)

    myForm.classList.add("hidden")

    let clientID = 'vRoMSsELz0h_q5KuLvzEMoBMB0Nuk8Jtq86BTJ8jn4Q'

    fetch(`https://api.unsplash.com/search/photos?client_id=${clientID}&query=${celebration}`)
      .then( function(response) {
         return response.json()
      })
      .then( function(data) {
         const imgUrl = data['results'][parseInt(Math.random()*10)]['urls']['full']
         console.log(imgUrl)
         document.body.style.backgroundImage = `url(${imgUrl})`
         document.body.style.backgroundPosition = "center"
         document.body.style.backgroundRepeat = "no-repeat"
         document.body.style.backgroundSize = "cover"
         document.body.style.height = "100%"
       })
})


// Display Celebration type (get selection from form and display an image)
// Show Message Text (create a p, add textContent of message)
// Hide the form (change classList display: hidden)

},{}]},{},[1]);
