class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.matrizPersonagemPulo = matrizPersonagemPulo;
    this.imagem_pulo = imagem_pulo;
    this.imagem_idle = imagem_idle;
    this.imagem_Personagem_Reverso = imagem_Personagem_Reverso;
    this.matrizPersonagemIdle = matrizPersonagemIdle;
    this.matrizPersonagemReverso = matrizPersonagemReverso;
    this.imagem_pulo_reverso = imagem_pulo_reverso;
    this.matrizPersonagemPuloReverso = matrizPersonagemPuloReverso;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;    
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
  
  animacao_char_idle(){
    image(this.imagem_idle, this.x, this.y, this.largura, this.altura, this.matrizPersonagemIdle[this.frameAtual][0], this.matrizPersonagemIdle[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    this.anima();
  }

  animacao_char_move(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);    
    this.anima();
  }

  animacao_char_moveReverse(){
    image(this.imagem_Personagem_Reverso, this.x, this.y, this.largura, this.altura, this.matrizPersonagemReverso[this.frameAtual][0], this.matrizPersonagemReverso[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    this.anima();
  }
  
  animacao_pulo(){
    image(this.imagem_pulo, this.x, this.y, this.largura+10, this.altura+10, this.matrizPersonagemPulo[this.frameAtual][0], this.matrizPersonagemPulo[this.frameAtual][1], 1040, 1040);
    this.anima();
  }

  animacao_pulo_reverso() {
    image(this.imagem_pulo_reverso, this.x, this.y, this.largura+10, this.altura+10, this.matrizPersonagemPuloReverso[this.frameAtual][0], this.matrizPersonagemPuloReverso[this.frameAtual][1], 1040, 1040);
    this.anima();
  }
  
  sel_animation(func_anim){
    var anim_array = [];
    anim_array.push(func_anim);
    return anim_array[0];
  }
}