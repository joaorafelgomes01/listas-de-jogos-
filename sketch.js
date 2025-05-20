let idadeUsuario;
let gostaAção, gostaAventura, gostaSobrevivencia;
let jogosRecomendados = [];
let jogos = [
  { nome: "subway sufs", idade: 0, categorias: ["ação", "aventura"] },
  { nome: "como treinar o seu dragão", idade: 0, categorias: ["sobrevivencia", "aventura"] },
  { nome: "minecraft", idade: 10, categorias: ["drama", "sobrevivencia", "aventura"] },
  { nome: "GTA 5", idade: 12, categorias: ["mundo aberto", "aventura"] },
  { nome: "stumble guys", idade: 12, categorias: ["diverção"] },
  { nome: "free fire", idade: 14, categorias: ["drama"] }
];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Jogos", 20, 30);

  // Coletar idade
  idadeUsuario = parseInt(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaAção= prompt("Você gosta de jogos de ação?(sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de jogos de aventura? (sim/não)").toLowerCase() === "sim";
  gostaSobrevivencia= prompt("Você gosta de jogos de sobrevivencia? (sim/não)").toLowerCase() === "sim";

  for (let jogo of jogos) {
    if (idadeUsuario >= jogos.idade) {
      if (
        (gostaAção && jogo.categorias.includes("ação")) ||
        (gostaAventura && jogo.categorias.includes("aventura")) ||
        (gostaSobrevivencia && jogo.categorias.includes("sobrevivencia"))
      ) {
        jogosRecomendados.push(jogo.nome);
      }
    }
  }

  if (jogosRecomendados.length > 0) {
    text("Jogos recomendados para você:", 20, 70);
    for (let i = 0; i < jogosRecomendados.length; i++) {
      text("- " + jogosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("jogo recomendado free fire, minecraft e subway surf.", 20, 70);
  }
}

function draw() {
  // A função draw é chamada continuamente, mas como não há nada para atualizar,
  // podemos deixá-la vazia para este programa.
}
