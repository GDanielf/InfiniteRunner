class Cenario{
  constructor(imagem){
    this.imagem = imagem;    
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);    
  }
  
  move(velocidade){
    this.x1 = this.x1 - velocidade;
    this.x2 = this.x2 - velocidade;
    
    if (this.x2 <= -width) {
      this.x2 = width;
    }

    if(this.x1 <= -width){
      this.x1 = width;
    }    
  }
}