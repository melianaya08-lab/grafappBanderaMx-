const sliderVerde = document.getElementById("verde");
const sliderRojo = document.getElementById("rojo");

const franjaVerde = document.getElementById("franjaVerde");
const franjaRoja = document.getElementById("franjaRoja");

const valorVerde = document.getElementById("valorVerde");
const valorRojo = document.getElementById("valorRojo");

sliderVerde.addEventListener("input", function () {

    const valorHex = this.value.toString(16).padStart(2, "0");
    const color = `#00${valorHex}00`;

    franjaVerde.style.backgroundColor = color;
    valorVerde.textContent = color.toUpperCase();
});

sliderRojo.addEventListener("input", function () {

    const valorHex = this.value.toString(16).padStart(2, "0");
    const color = `#${valorHex}0000`;

    franjaRoja.style.backgroundColor = color;
    valorRojo.textContent = color.toUpperCase();
});
