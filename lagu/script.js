const containerItem = document.querySelectorAll(".container__item");
const containerItemAudio = document.querySelectorAll(".container__item__audio");
const containerItemFungsi = document.querySelectorAll(".container__item__fungsi");
const play = document.querySelectorAll(".fa-play");
const pause = document.querySelectorAll(".fa-pause");

containerItem.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        containerItem[index].style.width = `${47.8}%`;
    })

    item.addEventListener("mouseleave", () => {
        containerItem[index].style.width = `${5}%`;
    })
})

containerItemAudio.forEach((item, index) => {
    item.addEventListener("ended", () => {
        containerItemAudio[index].currentTime = 0;
        containerItemAudio[index].play();
    })
})

play.forEach((item, index) => {
    item.addEventListener("click", () => {
        pause[index].style.visibility = "visible";
        play[index].style.visibility = "hidden";
        containerItemAudio[index].play();
    })
})

pause.forEach((item, index) => {
    item.addEventListener("click", () => {
        play[index].style.visibility = "visible";
        pause[index].style.visibility = "hidden";
        containerItemAudio[index].pause();
    })
})