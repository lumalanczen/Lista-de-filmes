 let campoIdade;
 let campoFantasia;
 let campoAventura;
 
function setup() {
    createCanvas(600, 400);
    createElement("h2", "Recomendador de filmes");
    createSpan ("sua idade");
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de romance ?");
    campoAventura =createCheckbox("Gosta de aventura?");

 }


 function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
    fill(color(255, 0, 0));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
 }


          
          
    function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "como eu era antes de você";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "as aventuras de pi";          
        } else{
         return "A culpa é das estrelas";
        }
      } else {
        if (gostaDeFantasia) {
          return "elementos";
        } else {
          return "A cabana";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Depois do universo";
    } else {
      return "velozes e furiosos";
    }
  }
}

   
              