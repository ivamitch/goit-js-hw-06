const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

 function onFormSubmit(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email
    const password = event.currentTarget.elements.password

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert("Всі поля повинні бути заповнені")
    }

    const formData = {
        email,
        password
    }

    console.log(formData)
    event.target.reset()
 }
































