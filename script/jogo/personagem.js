class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, PersonagemChao, CharMoving){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.matriz = matriz;
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY-20;
    this.y = this.yInicial
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.ContDePulo = 2;
    this.alturaDoPulo = -50;
    this.invencivel = false;
    this.PersonagemChao = PersonagemChao;
    this.CharMoving = CharMoving;
    this.charVel = 0; 
    this.reverse = false;   
  }

  isCharFloor(){
    if(this.y === this.yInicial){
      this.PersonagemChao = true;
    }
    if(this.y < this.yInicial){
      this.PersonagemChao = false;
    }
    return this.PersonagemChao;
  }

  pula(){    
    this.velocidadeDoPulo = this.alturaDoPulo;
    this.ContDePulo -=1;    
  }
  
  moveChar(){    
    if(keyIsDown(RIGHT_ARROW) && this.isCharFloor() && this.x<width/2){
      //this.charVel = 2;
      this.x += 10;
      this.animacao_char_move();
      this.CharMoving = true;
      this.reverse = false;      
    }
    else if (keyIsDown(RIGHT_ARROW) && this.isCharFloor() && this.x === width / 2) {
      this.charVel = 2;
      this.x = this.x;
      this.animacao_char_move();
      this.CharMoving = true;
      this.reverse = false; 
    }     
    else if (keyIsDown(LEFT_ARROW) && this.isCharFloor() && (this.x>=20 && this.x <= width / 2)){
      this.charVel = 0;
      this.x-=10;
      this.animacao_char_moveReverse();
      this.CharMoving = true;
      this.reverse = true; 
    }
    else if (keyIsDown(RIGHT_ARROW) && !this.isCharFloor() && this.x < width / 2) {
      this.x+=10;
      //this.charVel = 2;     
      this.CharMoving = true;
      this.reverse = false; 
    }
    else if (keyIsDown(RIGHT_ARROW) && !this.isCharFloor() && this.x === width / 2){
      this.x=this.x
      this.charVel = 2;
      this.CharMoving = true;
      this.reverse = false; 
    }
    else if (keyIsDown(LEFT_ARROW) && !this.isCharFloor() && (this.x>=20 && this.x<=width/2)){
      this.charVel = 0;
      this.x-=10; 
      this.CharMoving = true;
      this.reverse = true; 
    }    
    else{
      this.charVel = 0;
      this.CharMoving = false;      
    } 
  }  

  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.ContDePulo = 2;
    }
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){
      return false;
    }
    const precisao = 0.65;
    const colisao = collideRectRect(this.x, 
                    this.y, 
                    this.largura * precisao, 
                    this.altura * precisao, 
                    inimigo.x, 
                    inimigo.y, 
                    inimigo.largura * precisao, 
                    inimigo.altura * precisao
                   );
    return colisao;
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout( ()=> {
      this.invencivel = false;
    }, 1000)//1000ms eh o tempo que a personagem fica invencivel
  }
}