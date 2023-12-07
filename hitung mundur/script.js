const hari = document.querySelector(".hari");
const jam = document.querySelector(".jam");
const menit = document.querySelector(".menit");
const detik = document.querySelector(".detik");

setInterval(() => {
    let targetDate = new Date('December 25, 2023');

    let timeDiff = targetDate - new Date();

    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hari.innerHTML = days;
    jam.innerHTML = hours % 24;
    menit.innerHTML = minutes % 60;
    detik.innerHTML = seconds % 60;
}, 100)