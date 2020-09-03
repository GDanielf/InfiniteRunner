//exibe cenas diferentes do jogo
class Jogo {
  constructor() {
    this.indiceInimigo = 0;
    
    this.mapa = fita.mapa;
  }
  setup() {
    createCanvas(windowWidth, windowHeight);
    //parallax
    cenario_sky = new Cenario(imagemCenario_sky);
    cenario_clouds1 = new Cenario(imagemCenario_clouds1);
    cenario_clouds2 = new Cenario(imagemCenario_clouds2);
    cenario_rocks = new Cenario(imagemCenario_rocks);
    cenario_ground1 = new Cenario(imagemCenario_ground1);
    cenario_ground2 = new Cenario(imagemCenario_ground2);
    cenario_ground3 = new Cenario(imagemCenario_ground3);
    cenario_floor = new Cenario(imagemCenario_floor);
    cenario_plants = new Cenario(imagemCenario_plants);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    var alturaChar = 60;
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, alturaChar, 100, 100, 260, 260, true, false);//(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, PersonagemChao, CharMoving)
    const enemy_liz = new Inimigo(matrizLizard, imagemLizard, width - 52, alturaChar-5, 140, 140, 100, 100, 10);//(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,  velocidade)
    const enemy_smallDragon = new Inimigo(matrizSmallDragon, imagemSmallDragon, width - 52, alturaChar-15, 140, 140, 85, 85, 10);//(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,  velocidade)
    const enemy_demon = new Inimigo(matrizDemon, imagemDemon, width - 52, alturaChar+15, 140, 140, 90, 90, 10);//(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,  velocidade)
    //somDoJogo.loop();    
    inimigos.push(enemy_liz);
    inimigos.push(enemy_smallDragon);
    inimigos.push(enemy_demon);
  }

  keyPressed(key) {    
    if (key === 'ArrowUp' && personagem.ContDePulo > 0) {
      personagem.pula();
      personagem.PersonagemChao = false;
      //somDoPulo.play();
    }        
  } 

  draw() {
    console.log(personagem.x);
    
    //comeco parallax
    cenario_sky.exibe();
    cenario_sky.move(0);
    cenario_clouds1.exibe();
    cenario_clouds1.move(personagem.charVel);
    cenario_clouds2.exibe();
    cenario_clouds2.move(personagem.charVel*2);
    cenario_rocks.exibe();
    cenario_rocks.move(personagem.charVel * 3);
    cenario_ground1.exibe();
    cenario_ground1.move(personagem.charVel * 4);
    cenario_ground2.exibe();
    cenario_ground2.move(personagem.charVel * 5);
    cenario_plants.exibe();
    cenario_plants.move(personagem.charVel * 8);
    cenario_ground3.exibe();
    cenario_ground3.move(personagem.charVel * 6);
    cenario_floor.exibe();
    cenario_floor.move(personagem.charVel * 8);
    //fim parallax
    vida.draw();
    //manipulacao da variavel PersonagemChao para mudar a animacao de run para jump
    if (personagem.isCharFloor() && !personagem.CharMoving){      
      personagem.sel_animation(personagem.animacao_char_idle());      
    }   
    
    personagem.moveChar()
    
    if (!personagem.isCharFloor() && !personagem.reverse){      
      personagem.sel_animation(personagem.animacao_pulo());      
    }
    else if (!personagem.isCharFloor() && personagem.reverse){
      personagem.sel_animation(personagem.animacao_pulo_reverso());
    }
    
    personagem.aplicaGravidade();
    pontuacao.exibe();    

    pontuacao.adicionarPontos();
    const linhaAtual = this.mapa[this.indiceInimigo]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura; //checa se ja passou pra tela  
      
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.animacao_char_move();
    inimigo.move();

    if (inimigoVisivel) {
      this.indiceInimigo++;
      inimigo.aparece(); 
      if (this.indiceInimigo > this.mapa.length - 1) {
        this.indiceInimigo = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVidas();
      personagem.tornarInvencivel();
      if(vida.vidas === 0){
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}