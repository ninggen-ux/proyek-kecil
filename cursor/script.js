const cursorItem = document.querySelector(".cursor-item");

document.addEventListener("mousemove", e => {
    cursorItem.style.left = `${e.clientX}px`;
    cursorItem.style.top = `${e.clientY}px`;
});