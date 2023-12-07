const conten = document.querySelectorAll(".conten");

let pengamat = new IntersectionObserver(entries => {
    entries.forEach(entri => {
        entri.target.classList.toggle("pertunjukan", entri.isIntersecting)
    })
})

conten.forEach(kartu => {
    pengamat.observe(kartu)
})