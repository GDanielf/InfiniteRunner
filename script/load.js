function preload(){  
  //parallax
  imagemCenario = loadImage('imagens/cenario/game_background.jpg');
  imagemCenario_sky = loadImage('imagens/cenario/sky.png');
  imagemCenario_clouds1 = loadImage('imagens/cenario/clouds_1.png');
  imagemCenario_clouds2 = loadImage('imagens/cenario/clouds_2.png');
  imagemCenario_rocks = loadImage('imagens/cenario/rocks.png');
  imagemCenario_ground1 = loadImage('imagens/cenario/ground_1.png');
  imagemCenario_ground2 = loadImage('imagens/cenario/ground_2.png');
  imagemCenario_plants = loadImage('imagens/cenario/plant.png');
  imagemCenario_ground3 = loadImage('imagens/cenario/ground_3.png');
  imagemCenario_floor = loadImage('imagens/cenario/floor.png');
  //gameover
  imagemGameOver = loadImage('imagens/assets/gameOver.png');
  //personagem
  imagemPersonagem = loadImage('imagens/personagem/spridesheet_run.png');
  imagem_pulo = loadImage('imagens/personagem/spridesheet_jump.png');  
  imagem_idle = loadImage('imagens/personagem/spridesheet_idle.png');
  imagem_pulo_reverso = loadImage('imagens/personagem/spridesheet_jump_reverse.png');
  imagem_Personagem_Reverso = loadImage('imagens/personagem/spridesheet_run_reverse.png')
  //inimigo
  imagemLizard = loadImage('imagens/inimigos/lizard.png');
  imagemSmallDragon = loadImage('imagens/inimigos/smallDragon.png');
  imagemDemon = loadImage('imagens/inimigos/demon.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json')
  
  //somDoJogo = loadSound('sons/trilha_jogo.mp3');
  //somDoPulo = loadSound('sons/somPulo.mp3');
}