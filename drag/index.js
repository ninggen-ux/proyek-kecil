document.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", (e) => {
        console.log(`Horizontal Move: ${e.pageX}`);
    })
})