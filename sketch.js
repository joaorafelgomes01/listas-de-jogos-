let idadeUsuario;
let gostaTabuleiro, gostaAventura, gostaFantasia; // Renamed variables for clarity
let jogosRecomendados = []; // Changed to jogosRecomendados as per the logic
let jogos = [ // Changed 'filmes' to 'jogos' for consistency
  { nome: "minecraft", idade: 10, categorias: ["aventura"] },
  { nome: "free fire", idade: 12, categorias: ["tiro", "aventura"] },
  { nome: "stumble guys", idade: 10, categorias: ["fantasia", "aventura"] },
  { nome: "banco imobiliario", idade: 12, categorias: ["tabuleiro"] }, // Removed extra comma
  { nome: "dama", idade: 12, categorias: ["tabuleiro"] },
  { nome: "mario cart", idade: 14, categorias: ["aventura"] }
];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Jogos", 20, 30); // Changed to "Recomendador de Jogos"

  // Coletar idade
  idadeUsuario = parseInt(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaTabuleiro = prompt("Você gosta de jogos de tabuleiro? (sim/não)").toLowerCase() === "sim"; // Corrected variable name
  gostaAventura = prompt("Você gosta de jogos de aventura? (sim/não)").toLowerCase() === "sim";
  gostaFantasia = prompt("Você gosta de jogos de fantasia? (sim/não)").toLowerCase() === "sim"; // Corrected prompt and variable name

  for (let jogo of jogos) { // Iterating through 'jogos' array
    if (idadeUsuario >= jogo.idade) {
      if (
        (gostaFantasia && jogo.categorias.includes("fantasia")) ||
        (gostaAventura && jogo.categorias.includes("aventura")) ||
        (gostaTabuleiro && jogo.categorias.includes("tabuleiro")) // Corrected variable name
      ) {
        jogosRecomendados.push(jogo.nome);
      }
    }
  }

  if (jogosRecomendados.length > 0) {
    text("Jogos recomendados para você:", 20, 70); // Corrected text
    for (let i = 0; i < jogosRecomendados.length; i++) {
      text("- " + jogosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum jogo disponível para sua idade e preferências.", 20, 70);
  }
}

function draw() {
  // A função draw é chamada continuamente, mas como não há nada para atualizar,
  // podemos deixá-la vazia para este programa.
}
