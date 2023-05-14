const form = document.querySelector('.login-form')
// console.dir(form)

form.addEventListener('submit', onFormSubmit)

 function onFormSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements)

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
    form.reset()
 }
































