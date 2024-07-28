function verParrafo() {
    document.getElementById("text2").style.display = "block";
}

function ocultarParrafo() {
    document.getElementById("text2").style.display = "none";
}

function agrandarImg() {
    document.getElementById("img1").style.width = "100%";
}
function reduceImg() {
    document.getElementById("img1").style.width = "20%";
}

// Llamando a las funciones para su ejecucion
//la funcion se llama solo por nombre se declara la funcion, con paretesis es ejecucion
document.getElementById("text1").addEventListener("mouseover", verParrafo);
document.getElementById("text1").addEventListener("mouseleave", ocultarParrafo);
document.getElementById("img1").addEventListener("click", agrandarImg);
document.getElementById("img1").addEventListener("mouseleave", reduceImg);