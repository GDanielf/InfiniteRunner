//inicializar as imagens
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
//parallax
let cenario_sky;
let cenario_clouds1;
let cenario_clouds2;
let cenario_rocks;
let cenario_ground1;
let cenario_ground2;
let cenario_ground3;
let cenario_floor;
let cenario_plants;
let imagemCenario;
let imagemCenario_sky;
let imagemCenario_clouds1;
let imagemCenario_clouds2;
let imagemCenario_rocks;
let imagemCenario_ground1;
let imagemCenario_ground2;
let imagemCenario_ground3;
let imagemCenario_floor;
let imagemCenario_plants;

let imagemGameOver;
let imagemTelaInicial;
let fonteTelaInicial;
let imagemVida;
//instanciar as classes
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;
let vida;
//inicializa os sons
let somDoPulo;
let somDoJogo;
//inicializa cenas
let cenaAtual = 'jogo';
let cenas;
let telaInicial;
let jogo;
let botaoGerenciador;

let matrizInimigo = [];
for(var col_inim = 0; col_inim<=626;col_inim+=104){
  for(var lin_inim = 0; lin_inim<=312; lin_inim+=104){
    matrizInimigo.push([lin_inim,col_inim])
  }
}

let matrizPersonagem = [
  [0,0],
  [260,0],
  [520,0],
  [780,0],
  [0,260],
  [260,260],
  [520,260],
  [780,260],
  [0,520],
  [260,520],
  [520,520],
  [780,520],
  [0,780],
  [260,780],
  [520,780],
  [780,780]
];

let matrizPersonagemReverso = [
  [780, 0],
  [520, 0],
  [260, 0],
  [0, 0],
  [780, 260],
  [520, 260],
  [260, 260],
  [0, 260],
  [780, 520],
  [520, 520],
  [260, 520],
  [0, 520],
  [0, 780],
  [780, 780],
  [520, 780],
  [260, 780]
];

let matrizPersonagemPulo = [
  [0,0],
  [1040,0],
  [2080,0],
  [3120,0],
  [0,1040],
  [1040,1040],
  [2080,1040],
  [3120,1040],
  [0,2080],
  [1040,2080],
  [2080,2080],
  [3120,2080],
  [0,3120],
  [1040,3120],
  [2080,3120]
];

let matrizPersonagemPuloReverso = [
  [3120, 0],
  [2080, 0],
  [1040, 0],
  [0, 0],
  [3120, 1040],
  [2080, 1040],
  [1040, 1040],
  [0, 1040],
  [3120, 2080],
  [2080, 2080],
  [1040, 2080],
  [0, 2080],
  [3120, 3120],
  [2080, 3120],
  [1040, 3120]
];

let matrizPersonagemIdle = [
  [0,0],
  [260,0],
  [520,0],
  [780,0],
  [1040,0],
  [0, 260],
  [260, 260],
  [520, 260],
  [780, 260],
  [1040, 260],
  [0, 520],
  [260, 520],
  [520, 520],
  [780, 520],
  [1040, 520],
  [0, 780],
  [260, 780],
  [520, 780],
  [780, 780],
  [1040, 780],
  [0, 1040],
  [260, 1040],
  [520, 1040],
  [780, 1040],
  [1040, 1040]    
];


const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigos = [];