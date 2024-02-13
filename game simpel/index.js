const karakter = document.querySelector(".karakter");
let left = 1;

document.addEventListener("keydown", event => {
    if (event.key === "a") {
        karakter.style.left = `${left-- * 7}px`;
    } else if (event.key === "d") {
        karakter.style.left = `${left++ * 7}px`;
    }
})