const button = document.querySelector("button");
const color = document.getElementById("color")

function colorHex(){
  let digitos ="0123456789ABCDFEF";
  let color = "#"
  for (let i = 0;i < 6 ; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    color += digitos[indiceAleatorio] ;
  }
  return color;
}

button.addEventListener("click",() => {
  let colorAleatorio = colorHex();
  //acualizar el texto 
  color.textContent = colorAleatorio;
  //actualizar el fondo
  document.body.style.backgroundColor = colorAleatorio;
})
