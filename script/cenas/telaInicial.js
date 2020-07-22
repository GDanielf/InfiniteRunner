class TelaInicial{
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width/2, 100);
    textSize(100);
    text('Hipsta',width/2, 185);    
  }
  
  _botao(){
    //botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw();
  }
}