class Vida{
  constructor(total, inicial){//renomear total para MaxVidas
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.total;//vidas eh o que manipula a qtde de vidas
    this.largura = 30;
    this.altura = 30;
    this.xInicial = 20
    this.y = 20
  }
  
  draw(){
    for(let i=0; i<this.vidas; i++){
      const margem = i*12;
      const posicao = this.xInicial*(1+i);//altera a posicao X dos coracoes    
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura)
    }
  }
  
  ganhaVida(){
    if(this.vidas <= this.total){
      this.vidas++;
    }
  }
  
  perdeVidas(){
    this.vidas--;
  }
}