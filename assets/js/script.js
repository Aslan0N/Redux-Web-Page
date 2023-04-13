// Ul Open Menu
const bars = document.querySelector(".fa-bars")
const ul = document.querySelector("#menu-ul")

const openMenu= ()=>{
    ul.classList.add("open")
}
const closeMenu = ()=>{
    ul.classList.remove("open")
}

// Dark / Light Mode
const body = document.querySelector("body");
const modeBtn = document.querySelector(".mode-btn")
const modeIcon = document.querySelector(".fa-sun")

const darkEnable = ()=>{
    body.classList.add("dark")
    localStorage.setItem("DarkMode","active")
    modeIcon.classList.add("fa-moon")
}
const darkDisable = ()=>{
    body.classList.remove("dark")
    localStorage.setItem("DarkMode",null)
    modeIcon.classList.remove("fa-moon")
}
let mode = localStorage.getItem("DarkMode")
if(mode == "active"){
    darkEnable()
}

const changeMode = ()=>{
    let mode = localStorage.getItem("DarkMode")
    if(mode == "active"){
        darkDisable()
    }else{
        darkEnable()
    }
}
