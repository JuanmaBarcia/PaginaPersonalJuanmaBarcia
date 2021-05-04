console.log(`Página personal`)

function showMobileMenu() {
    document.getElementById("mobile_menu").classList.toggle("mobile");
    document.getElementById("open").classList.toggle("oculto");
    document.getElementById("close").classList.toggle("mobile");
}

document.getElementById("btn_mobile_menu").addEventListener("click", showMobileMenu)