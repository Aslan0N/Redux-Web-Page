import { data } from "../data/data.js"
// Ul Open Menu
const bars = document.querySelector(".fa-bars")
const ul = document.querySelector("#menu-ul")
const close = document.querySelector(".fa-x")

const openMenu= ()=>{
    ul.classList.add("open")
}
const closeMenu = ()=>{
    ul.classList.remove("open")
}
close.addEventListener('click',closeMenu)
bars.addEventListener('click',openMenu)

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
modeBtn.addEventListener('click',changeMode)

// Change Language

const langBtn = document.querySelector(".lang");
const li = document.querySelectorAll(".nav-link");
const libraries = document.querySelector(".lib");
const libP = document.querySelectorAll(".lib-p");
const title = document.querySelectorAll(".footer-title");
const links = document.querySelectorAll(".footer-link")
const end = document.querySelector(".end-p")
const p = document.querySelector(".redux-p")
const a = document.querySelector(".redux-a")
const h2Cards = document.querySelectorAll(".two-sec-h")
const cardsP = document.querySelectorAll(".two-sec-p")
// AZ Language
const langAz = ()=>{
    langBtn.innerHTML = "AZ"
        localStorage.setItem("Language","Az")
        for(let i in data.azerbaijan.ul){
            li[i].innerHTML = data.azerbaijan.ul[i]
        }
        langBtn.removeAttribute('language')
        langBtn.setAttribute('language','azerbaijan')
        for(let j in data.azerbaijan.main.icon){
            h2Cards[j].textContent = data.azerbaijan.main.icon[j]
        }
        for(let j in data.azerbaijan.main.descr){
            cardsP[j].textContent = data.azerbaijan.main.descr[j]
        }
        p.textContent = data.azerbaijan.main.p
        a.textContent = data.azerbaijan.main.btn
        libraries.textContent = data.azerbaijan.main.team
        for(let i in data.azerbaijan.main.libraries){
            libP[i].textContent = data.azerbaijan.main.libraries[i]
        }
        for(let i in data.azerbaijan.main.footerTitle){
            title[i].textContent = data.azerbaijan.main.footerTitle[i]
        }
        for(let i in data.azerbaijan.main.foterLink){
            links[i].textContent = data.azerbaijan.main.foterLink[i]
        }
        end.textContent = data.azerbaijan.main.copyRight
}
// EN Language
const langEn = ()=>{
    langBtn.innerHTML = "EN"
    localStorage.setItem("Language","En")
    for(let i in data.english.ul){
        li[i].innerHTML = data.english.ul[i]
    }
    for(let j in data.english.main.icon){
        h2Cards[j].textContent = data.english.main.icon[j]
    }
    for(let j in data.english.main.descr){
        cardsP[j].textContent = data.english.main.descr[j]
    }
    p.textContent = data.english.main.p
    a.textContent = data.english.main.btn
    libraries.textContent = data.english.main.team
    for(let i in data.english.main.libraries){
        libP[i].textContent = data.english.main.libraries[i]
    }
    for(let i in data.english.main.footerTitle){
        title[i].textContent = data.english.main.footerTitle[i]
    }
    for(let i in data.english.main.foterLink){
        links[i].textContent = data.english.main.foterLink[i]
    }
    end.textContent = data.english.main.copyRight
}
const langChange = ()=>{
    let localLang = localStorage.getItem("Language")
    if(localLang == "En"){
        langAz()
    }else{
        langEn()
    }    
}
let localLang = localStorage.getItem("Language")
if(localLang == "Az"){
    langAz()
}
langBtn.addEventListener('click',langChange)