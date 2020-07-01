let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;

function preload(){  
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario,2);
  personagem = new Personagem(imagemPersonagem);

}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}