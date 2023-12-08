const animasi = document.querySelector(".animasi");
const tombol = document.querySelector(".tombol");

tombol.addEventListener("click", () => {
    animasi.style.animationName = "latar-belakang";
});

tombol.addEventListener("mouseout", () => {
    animasi.style.animationName = "";
});