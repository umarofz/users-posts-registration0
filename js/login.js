let elForm = document.querySelector(".form")
let elFormLogin = document.querySelector(".form__login")
let elFormPassword = document.querySelector(".form__password")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let formLogin = elFormLogin.value.trim()
    let formPassword = elFormPassword.value.trim()
    
    
    fetch("https://fast-ravine-16741.herokuapp.com/api/auth", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "email":formLogin,
        "password":formPassword
    })
})
.then(res => res.json())
.then(data => {
    if (!data.error) {
        localStorage.setItem("token", data.Authorization)
        elFormLogin.value = null;
        elFormPassword.value = null;
        window.location.href = "/index.html"
    }else {
        alert(data.error)
    }
})
})