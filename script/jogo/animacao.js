class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.matrizPersonagemPulo = matrizPersonagemPulo;
    this.imagem_pulo = imagem_pulo;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
    this.PersonagemChao = true;
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
  
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
    
    this.anima();
  }
  
  animacao_pulo(){
    image(this.imagem_pulo, this.x, this.y, 100, 100, this.matrizPersonagemPulo[this.frameAtual][0], this.matrizPersonagemPulo[this.frameAtual][1], 1040, 1040);
    
    this.anima();
  }  
}