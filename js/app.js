const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('keyup', () => {
    let num = 15;
    background.style.filter = `blur(${ num - password.value.length}px)`;

})