const containerItem = document.querySelectorAll(".container__item");
const containerItemKeterangan = document.querySelectorAll(".container__item__keterangan");
const containerItemVideo = document.querySelectorAll(".container__item__video");

containerItem.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        containerItemKeterangan[index].style.opacity = 1;
        containerItemVideo[index].style.filter = `brightness(${100}%)`;
        containerItemVideo[index].play();
    })

    item.addEventListener("mouseout", () => {
        containerItemKeterangan[index].style.opacity = 0;
        containerItemVideo[index].style.filter = `brightness(${50}%)`;
        containerItemVideo[index].pause();
        containerItemVideo[index].currentTime = 0;
    })

    containerItemVideo[index].addEventListener("ended", () => {
        containerItemVideo[index].currentTime = 0;
        containerItemVideo[index].play();
    })
})