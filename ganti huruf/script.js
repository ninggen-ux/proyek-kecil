const target = document.body;
const keterangan = document.getElementsByClassName("keterangan");
const huruf = [];

for (let i = 65; i <= 90; i++) {
    huruf.push(String.fromCharCode(i));
}

target.addEventListener("mousemove", () => {
    for (let i = huruf.length - 1, x = Math.floor(Math.random() * (i + 1)); i >= 0; i--) {
        keterangan[0].innerHTML = huruf[x];
    }
})

target.addEventListener("mousemove", () => {
    for (let i = huruf.length - 1, x = Math.floor(Math.random() * (i + 1)); i >= 0; i--) {
        keterangan[1].innerHTML = huruf[x];
    }
})

target.addEventListener("mousemove", () => {
    for (let i = huruf.length - 1, x = Math.floor(Math.random() * (i + 1)); i >= 0; i--) {
        keterangan[2].innerHTML = huruf[x];
    }
})

target.addEventListener("mousemove", () => {
    for (let i = huruf.length - 1, x = Math.floor(Math.random() * (i + 1)); i >= 0; i--) {
        keterangan[3].innerHTML = huruf[x];
    }
})

target.addEventListener("mouseout", () => {
    keterangan[0].innerHTML = "P"
})

target.addEventListener("mouseout", () => {
    keterangan[1].innerHTML = "P"
})

target.addEventListener("mouseout", () => {
    keterangan[2].innerHTML = "L"
})

target.addEventListener("mouseout", () => {
    keterangan[3].innerHTML = "G"
})