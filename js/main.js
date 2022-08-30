window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".topRate strong").addEventListener("click", () => {
        document.querySelector(".topRate").classList.toggle("on");
    });
});
