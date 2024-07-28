const hello = document.querySelector("#hello");
const helloInput = document.querySelector("#hello-input");
const helloButton = document.querySelector("#hello-button");

helloButton.addEventListener("click", () => {
    hello.innerHTML = helloInput.value;
    for (let i = 0; i < helloInput.value; i++) {
        console.log("hello")
    }
})
