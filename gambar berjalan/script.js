const container = document.querySelector(".container");

const waktu = setInterval(() => {
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo(0, 0);
    } else {
        container.scrollLeft += 1;
    }
}, 12);