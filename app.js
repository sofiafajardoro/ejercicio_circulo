// pido el diametro y calculo el área
const d = Number(prompt("Ingrese el diámetro del círculo (cm):"));
const r = d / 2;
const area = Math.PI * Math.pow (r, 2);

// salida en tres lugares
console.log(`Area: ${area.toFixed(2)} cm².`);
alert(`Area: ${area.toFixed(2)} cm².`);
document.getElementById("resultado").textContent = `Area: ${area.toFixed(2)} cm².`;
