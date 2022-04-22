const button = document.querySelector(".submit")

button.addEventListener('click', event => {
    event.preventDefault()
    const userName = document.querySelector("#name")
    const age = document.querySelector("#age")
    const userStatus = document.querySelector("input[name='status']:checked")

    if (userName.value && age.value && userStatus.value) {
        console.log(`Your name is ${userName.value}, ${age.value} years old, and you are a ${userStatus.value} in UCSD`)
    } else {
        console.log("Please fill in all the information!")
    }
})