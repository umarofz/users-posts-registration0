let elForm = document.querySelector(".form__register")
let elFormName = document.querySelector(".user__name")
let elFormEmail = document.querySelector(".user__email")
let elFormPassword = document.querySelector(".user__password")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let formName = elFormName.value.trim();
    let formEmail = elFormEmail.value.trim();
    let formPassword = elFormPassword.value.trim();

    fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "name": formName,
            "email": formEmail,
            "password": formPassword,
            "isAdmin": true
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data.error) {
            window.location.href = "/login.html"
        } else {
            alert(data.error)
        }
    })
})