document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const pages = document.querySelectorAll(".page");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove a classe "active" de todas as abas
            tabs.forEach(t => t.classList.remove("active"));
            // Adiciona a classe "active" na aba clicada
            this.classList.add("active");

            // Pega o target (id da página)
            const target = this.getAttribute("data-target");

            // Remove "active" de todas as páginas e esconde elas
            pages.forEach(page => {
                page.classList.remove("active");
                setTimeout(() => page.style.display = "none", 300);
            });

            // Mostra a nova página com transição
            const newPage = document.getElementById(target);
            setTimeout(() => {
                newPage.style.display = "flex";
                newPage.classList.add("active");
            }, 300);
        });
    });
});
