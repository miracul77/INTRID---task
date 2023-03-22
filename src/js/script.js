const btnSelectFlat = document.querySelector(".checkselect")
btnSelectFlat?.addEventListener("click", () => {
  const blockElem = document.querySelector(".block-1")
  blockElem.style.opacity = 100
  const blockElem2 = document.querySelector(".block-2")
  blockElem2.style.opacity = 0
  const blockElem3 = document.querySelector(".block-3")
  blockElem3.style.opacity = 0
})

btnSelectFlat?.addEventListener("dblclick", () => {
  const blockElem = document.querySelector(".block-1")
  blockElem.style.opacity = 0
})

const btnSelectRoom = document.querySelector(".checkRoom")
btnSelectRoom?.addEventListener("click", () => {
  const blockElem2 = document.querySelector(".block-2")
  blockElem2.style.opacity = 100
  const blockElem = document.querySelector(".block-1")
  blockElem.style.opacity = 0
  const blockElem3 = document.querySelector(".block-3")
  blockElem3.style.opacity = 0
})

btnSelectRoom?.addEventListener("dblclick", () => {
  const blockElem2 = document.querySelector(".block-2")
  blockElem2.style.opacity = 0
})

const pointItem = document.querySelector(".points-item")
pointItem?.addEventListener("click", () => {
  pointItem.style.color = "red"
})

const btnSelectPrice = document.querySelector(".priceBtn")
btnSelectPrice?.addEventListener("click", () => {
  const blockElem3 = document.querySelector(".block-3")
  blockElem3.style.opacity = 100
  const blockElem = document.querySelector(".block-1")
  blockElem.style.opacity = 0
  const blockElem2 = document.querySelector(".block-2")
  blockElem2.style.opacity = 0
})

btnSelectPrice?.addEventListener("dblclick", () => {
  const blockElem3 = document.querySelector(".block-3")
  blockElem3.style.opacity = 0
})

const getNavElements = document.querySelector(".nav-menu__list-item")
getNavElements?.addEventListener("click", () => {
  const blockElement = document.querySelector(".main-wrapper__block")
  blockElement.style.opacity = 100
})

const closeNavElements = document.querySelector(".nav-menu__list-itemy")
getNavElements?.addEventListener("dblclick", () => {
  const blockElement2 = document.querySelector(".main-wrapper__block")
  blockElement2.style.opacity = 0
})

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active")
    menu.classList.toggle("nav-menu_active")
  })

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active")
      menu.classList.toggle("nav-menu_active")
    })
  })
})
