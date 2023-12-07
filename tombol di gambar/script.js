const container = document.getElementsByClassName("container");
const chevron = document.getElementsByClassName("chevron");

container[0].addEventListener("mousemove", () => {
    chevron[0].style.opacity = 0.7;
    chevron[1].style.opacity = 0.7;
})

container[0].addEventListener("mouseout", () => {
    chevron[0].style.opacity = 0;
    chevron[1].style.opacity = 0;
})

chevron[0].addEventListener("mousedown", () => {
    container[0].scrollBy(-200, 0)
})

chevron[1].addEventListener("mousedown", () => {
    container[0].scrollBy(200, 0)
})

