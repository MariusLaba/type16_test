const inputs = document.querySelectorAll("input")
const btn = document.querySelector("button")
const errorText = document.querySelector("h4")

const valid = {
    username: username => {
        if(!username) return false
        if(username[0] !== username[0].toUpperCase()) return false
        if(username.length > 20 || username.length <= 4) return false
        return true
    },
    email: email => {
        if(!email) return false
        if(!email.includes("@")) return false
        if(!email.includes(".")) return false
        if(email.length > 50) return false
        return true
    },
    password: (pass1, pass2) => {
        if(!pass1 || !pass2) return false
        let isNumberInside = false
        for (let i = 0; i < pass1.length; i++) {
            if(Number(pass1[i]) || Number(pass1[i]) === 0) isNumberInside = true
        }
        if(!isNumberInside) return false
        if(pass1 !== pass2) return pass1 !== pass2
        return true
    }
}

btn.onclick = () => {
    const usernameIsValid = valid.username(inputs[0].value)
    const emailIsValid = valid.email(inputs[1].value)
    const passwordIsValid = valid.password(inputs[2].value, inputs[3].value)

    if(!usernameIsValid) return errorText.innerText = "Username not valid"
    if(!emailIsValid) return errorText.innerText = "Email not valid"
    if(!passwordIsValid) return errorText.innerText = "Passwod not valid"

    errorText.innerText = "Login successfully"

    console.log(passwordIsValid)
}