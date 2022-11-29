
const form = document.querySelector('.login-form');

const users = {
    email: "",
    password: "",
}

form.addEventListener('submit', onFormSubmit);

 function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (mail === "" || password === "") {
        alert('Всі поля повинні бути заповнені!');
    } else {
        users.email = mail;
        users.password = password;
    }

    console.log(users);
    form.reset();
}