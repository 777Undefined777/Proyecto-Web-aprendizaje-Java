document.addEventListener("DOMContentLoaded", () => {
    const registerModal = document.getElementById("registerModal");
    const loginModal = document.getElementById("loginModal");

    document.getElementById("openRegisterModal").onclick = () => {
        registerModal.style.display = "flex";
    };

    document.getElementById("closeRegisterModal").onclick = () => {
        registerModal.style.display = "none";
    };

    document.getElementById("openLoginModal").onclick = () => {
        loginModal.style.display = "flex";
    };

    document.getElementById("closeLoginModal").onclick = () => {
        loginModal.style.display = "none";
    };

    document.getElementById("showMainButton").onclick = () => {
        const mainContent = document.getElementById("main-content");
        mainContent.style.display = "block";

        // Ocultar otras secciones si están visibles
        hideOtherSections("main-content");
    };

    // Función para ocultar otras secciones cuando se muestra una
    function hideOtherSections(sectionIdToShow) {
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            if (section.id !== sectionIdToShow) {
                section.style.display = "none";
            }
        });
    }

    // Mostrar u ocultar secciones al hacer clic en los botones correspondientes
    document.getElementById("aboutButton").onclick = () => {
        toggleSectionVisibility("about");
    };

    document.getElementById("contactButton").onclick = () => {
        toggleSectionVisibility("contact");
    };

    document.getElementById("portfolioButton").onclick = () => {
        toggleSectionVisibility("portfolio");
    };

    function toggleSectionVisibility(sectionId) {
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });

        // Mostrar u ocultar el contenido principal según sea necesario
        if (sectionId === "main-content") {
            mainContent.style.display = "block";
        } else {
            mainContent.style.display = "none";
        }
    }
});
