console.log(`Página personal`)

let seciones = ["inicio", "about", "portfolio", "contact"]

function cambiarSeccion(seleccion) {
    let sel = seleccion.path[0].className

    if (seleccion.path[3].id == "mobile_menu") {
        showMobileMenu()
    }

    window.scrollTo(0, 0)
    return seciones.map(seccion => {
        if (seccion == sel) {
            if (seccion == "inicio") {
                document.getElementById(seccion).className = "";
                document.getElementById("foto_inicio").className = "";
            } else {
                document.getElementById(seccion).className = "";
                document.getElementById("foto_inicio").className = "oculto";
            }
        } else {
            document.getElementById(seccion).className = "oculto";
        }
    })
}

function showMobileMenu() {
    document.getElementById("mobile_menu").classList.toggle("mobile");
    document.getElementById("open").classList.toggle("oculto");
    document.getElementById("close").classList.toggle("mobile");
}

document.getElementById("btn_mobile_menu").addEventListener("click", showMobileMenu)

document.getElementById("inicio_btn").addEventListener("click", cambiarSeccion)
document.getElementById("sobre_mi_btn").addEventListener("click", cambiarSeccion)
document.getElementById("portfolio_btn").addEventListener("click", cambiarSeccion)
document.getElementById("contacto_btn").addEventListener("click", cambiarSeccion)
document.getElementById("inicio_mbl_btn").addEventListener("click", cambiarSeccion)
document.getElementById("sobre_mi_mbl_btn").addEventListener("click", cambiarSeccion)
document.getElementById("portfolio_mbl_btn").addEventListener("click", cambiarSeccion)
document.getElementById("contacto_mbl_btn").addEventListener("click", cambiarSeccion)