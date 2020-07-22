function preload(){  
  imagemCenario = loadImage('imagens/cenario/game_background.jpg');
  imagemGameOver = loadImage('imagens/assets/gameOver.png');
  imagemPersonagem = loadImage('imagens/personagem/spridesheet_run.png');
  imagem_pulo = loadImage('imagens/personagem/spridesheet_jump.png');  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json')
  
  //somDoJogo = loadSound('sons/trilha_jogo.mp3');
  //somDoPulo = loadSound('sons/somPulo.mp3');
}