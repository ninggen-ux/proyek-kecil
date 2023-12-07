const tombol = document.querySelector(".tombol");
let scale = 1;
let interval;

tombol.addEventListener("mouseout", () => {
    clearInterval(interval);
    scale = 1;
})

tombol.addEventListener("mouseover", () => {
    interval = setInterval(() => {
        if (scale >= 1) {
            tombol.style.transform = `scale(${scale})`;
            scale = 0.8;
        } else {
            tombol.style.transform = `scale(${scale})`;
            scale += 0.03;
        }
    }, 45)
})

tombol.addEventListener("click", () => {
    scale = 0.8;
})