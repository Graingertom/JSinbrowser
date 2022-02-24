const myForm = document.querySelector('form')

// Display Greeting message (create a h2, add textContent of input)
myForm.addEventListener("submit", e => {
    e.preventDefault();

    let greeting = e.target.greeting.value
    let celebration = e.target.typeOfEvent.value
    let message = e.target.message.value
    
    let newHeader = document.createElement('h2')
    let newGreeting = document.createTextNode(`${greeting}`)
    newHeader.appendChild(newGreeting)

    let body = document.querySelector('body');
    body.appendChild(newHeader)

    let newPara = document.createElement('p')
    let newMessage = document.createTextNode(`${message}`)
    newPara.appendChild(newMessage)

    body.appendChild(newMessage)

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
