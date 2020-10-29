const h1 = document.querySelector('h1');
const inputEl = document.querySelector('input');

inputEl.addEventListener('input', function(e) {
    if (inputEl.value) {
        h1.innerText = `Welcome, ${inputEl.value}`;
    }
    
    else {
        h1.innerText = 'Enter Your Username';
    }
})