class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = [];
    
    for(var y = 0; y<=810;y+=270){
      for(var x = 0; x<=660; x+=220){
        this.matriz.push([x,y])
      }
    }
    this.frameAtual = 0;
  }
  
  exibe(){
    image(this.imagem, 0, height-135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);   
    
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
}