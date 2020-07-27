//exibe cenas diferentes do jogo
class Jogo {
  constructor() {
    this.indiceInimigo = 0;
    
    this.mapa = fita.mapa;
  }
  setup() {
    createCanvas(windowWidth, windowHeight);
    //parallax
    cenario_sky = new Cenario(imagemCenario_sky, 0);
    cenario_clouds1 = new Cenario(imagemCenario_clouds1, 2);
    cenario_clouds2 = new Cenario(imagemCenario_clouds2, 4);
    cenario_rocks = new Cenario(imagemCenario_rocks, 6);
    cenario_ground1 = new Cenario(imagemCenario_ground1, 8);
    cenario_ground2 = new Cenario(imagemCenario_ground2, 10);
    cenario_ground3 = new Cenario(imagemCenario_ground3, 12);
    cenario_floor = new Cenario(imagemCenario_floor, 16);
    cenario_plants = new Cenario(imagemCenario_plants, 16);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    
    var alturaChar = 60;
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, alturaChar, 100, 100, 260, 260);//(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
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
      //somDoPulo.play();
    }    
  }

  draw() {
    console.log(personagem.x)
    //comeco parallax
    cenario_sky.exibe();
    cenario_sky.move();
    cenario_clouds1.exibe();
    cenario_clouds1.move();
    cenario_clouds2.exibe();
    cenario_clouds2.move();
    cenario_rocks.exibe();
    cenario_rocks.move();
    cenario_ground1.exibe();
    cenario_ground1.move();
    cenario_ground2.exibe();
    cenario_ground2.move();
    cenario_plants.exibe();
    cenario_plants.move();
    cenario_ground3.exibe();
    cenario_ground3.move();
    cenario_floor.exibe();
    cenario_floor.move();
    //fim parallax
    vida.draw();
    //manipulacao da variavel PersonagemChao para mudar a animacao de run para jump
    if(personagem.PersonagemChao){
      personagem.exibe();
      if(personagem.y < personagem.yInicial){
        personagem.PersonagemChao = false;
      }
    }
    if(!personagem.PersonagemChao){
      personagem.animacao_pulo();
      if(personagem.y === personagem.yInicial){
        personagem.PersonagemChao = true;
      }
    }
    
    personagem.aplicaGravidade();
    pontuacao.exibe();   
    
    //CONTROLE DO PERSONAGEM
    if(keyIsDown(RIGHT_ARROW)){
      personagem.moveForward();
    }
    if(keyIsDown(LEFT_ARROW)) {
      personagem.moveBackwards();
    }


    pontuacao.adicionarPontos();
    const linhaAtual = this.mapa[this.indiceInimigo]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura; //checa se ja passou pra tela  
      
    inimigo.velocidade = linhaAtual.velocidade;

    //inimigo.exibe();
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