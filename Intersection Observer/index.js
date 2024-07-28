const containerItem = document.querySelectorAll(".container__item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
})

containerItem.forEach(item => {
    observer.observe(item);
})