 const login = document.querySelector(".login");
        const message = document.querySelector(".message");
        const form = document.querySelector(".form");
        const alerte = document.querySelector(".alert");
        login.addEventListener("click", () => {
            message.style.display = "none";
            form.style.display = "flex";
})
alerte.addEventListener("click", () => {
    const welcome = document.querySelector(".nom").value;
    alert("Felicitation monsieur  "+welcome+" vous etes bien inscrit dans notre plateforme TEST");
})