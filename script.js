const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navLogs = document.getElementsByClassName('nav-logs') [0]

toggleButton.addEventListener('click', () =>{
    navLogs.classList.toggle('active')
})