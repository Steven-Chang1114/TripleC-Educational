const button = document.querySelector(".submit")

button.addEventListener('click', event => {
    event.preventDefault()
    const userName = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const userStatus = document.querySelector("input[name='status']:checked").value

    if (userName && age && userStatus) {
        console.log(`You are ${userName} that is ${age} years old, and you are a ${userStatus} in UCSD`)
    } else {
        console.log("Please fill in all the information!")
    }
})