//()=>: recebe uma funcao como parametro
function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);  
  //somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  //cenas nesse caso de baixo eh um objeto em JS parecido com dicionarios de python
  cenas = {
    jogo,//jogo:jogo nao precisa colocar desse jeito pois o js ja etende
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw(){
  cenas[cenaAtual].draw();
}