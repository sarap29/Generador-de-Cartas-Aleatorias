window.onload = function generadorDeCartas() {
  let numeroCarta = document.querySelector("#numerodecarta");
  let paloArriba = document.querySelector("#paloarriba");
  let paloAbajo = document.querySelector("#paloabajo");

  function generadorPaloCarta() {
    let paloCarta = ["♦", "♥", "♠", "♣"];
    let paloCartaIndex = Math.floor(Math.random() * paloCarta.length);

    let carta = paloCarta[paloCartaIndex];
    if (carta === "♦" || carta === "♥") {
      carta = `<span style="color: red;">${carta}</span>`;
    }
    return carta;
  }

  let palo = generadorPaloCarta();
  paloArriba.innerHTML = palo;
  paloAbajo.innerHTML = palo;

  function generadorNumeroCarta() {
    let valoresCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let valoresCartaIndex = Math.floor(Math.random() * valoresCarta.length);
    return valoresCarta[valoresCartaIndex];
  }

  let numero = generadorNumeroCarta();
  numeroCarta.innerHTML = numero;

  //Botón
  let botonCartaNueva = document.getElementById("btn");
  botonCartaNueva.addEventListener("click", generadorDeCartas);
};
