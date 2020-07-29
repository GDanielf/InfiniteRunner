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
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, alturaChar, 52, 52, 104, 104, 10)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, alturaChar-18, 200, 200, 400, 400, 10)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10)
    //somDoJogo.loop();  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
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

    //inimigo.animacao_char_move();
    //inimigo.move();

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
        //noLoop();
      }
    }
  }
}