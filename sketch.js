var xlixeira = 600;
var xciclista = 30;
var imgnormal;
var imgestrada;
var imgciclista;
var imgsofia;
var imgjosenilton;
var imgartur;
var imgvivo1;
var imgvivo2;
var imgmorto1;
var imgmorto2;
var menux = 10 ;
var menuy = 290;
var larguramenu = 165;
var alturamenu = 40;
var op = 1;
var op1 = 0;
var tela = 0;
var opcaonome = 65;
var xnome = 95;
var ynome = 148;
var xcaixa = 25;
var caixa = false;
var v = [];
var i = -1;
var nome = '';
var n;
var pontos = 0;
var contadorlixeira = 0;




function setup() {
  
  createCanvas(500, 500);
  imgnormal = loadImage('normal.jpg');
  imgestrada = loadImage('estrada1.png');
  imgciclista = loadImage('ciclista1.png');
  imglixeira = loadImage('lixeira1.png');
  imgsofia = loadImage('sofia.jpg');
  imgjosenilton = loadImage('josenilton.jpg');
  imgartur = loadImage('artur.jpeg');
  imgvivo1 = loadImage('vivo1.jpg'); 
  imgvivo2 = loadImage('vivo2.jpg');
  imgmorto1 = loadImage('morrendo1.jpg');
  imgmorto2 = loadImage('morrendo2.jpg');
}

function draw() {
  background(220);
  if(tela==0){
     menu();
  }
  if(tela==1){
    telanome();
  }
  if(tela==2){
    Instruções();
  }
  if(tela==3){
    créditos();
  }
  if(tela==4){
    fase1();
  }
  if(tela==5){
    fase2();
  }
  if(tela==6){
    fase3();
  }
  if(tela==7){
    fase4();
  }
  if(tela==8){
    fase5();
  }
  if(tela==9){
    final1();
  }
  if(tela==10){
    final2();
  }
}

function menu(){
  background(220);
  image(imgnormal, 0, 0);
  fill(255, 185, 80);
  rect(menux, menuy, larguramenu, alturamenu, 10);
  fill(0,0,0);
  textStyle(BOLD);
  textSize(45);
  
  text('The Planet Water', 80, 100);
  textSize(30);
  text('Jogar', 20, 320);
  text('Instruções', 20,370);
  text('Créditos', 20, 420);
  
  textSize(15);
  text('pressione enter', 377,460);
  text('para selecionar', 377,475);
  
}

function telanome(){
   background(220);
  image(imgnormal, 0, 0);
  fill(255, 185, 80);
  rect(xnome, ynome, xcaixa, 25, 10);
  rect(140, 100, 220,35, 10);
  fill(0,0,0);
  textSize(20);
  text('MAS ANTES, VAMOS DAR UM NOME', 80, 70);
  text('PARA O PERSONAGEM', 138, 92);
  text('A', 100, 170);
  text('B', 125, 170);
  text('C', 150, 170);
  text('D', 175, 170);
  text('E', 200, 170);
  text('F', 225, 170);
  text('G', 250, 170);
  text('H', 275, 170);
  text('I', 300, 170);
  text('J', 325, 170);
  text('K', 350, 170);
  text('L', 375, 170);
  text('M', 400, 170);
  text('N', 100, 220);
  text('O', 125, 220);
  text('P', 150, 220);
  text('Q', 175, 220);
  text('R', 200, 220);
  text('S', 225, 220);
  text('T', 250, 220);
  text('U', 275, 220);
  text('V', 300, 220);
  text('W', 325, 220);
  text('X', 350, 220);
  text('Y', 375, 220);
  text('Z', 400, 220);
  text('Á', 100, 270);
  text('Â', 125, 270);
  text('É', 150, 270);
  text('Ê', 175, 270);
  text('Í', 200, 270);
  text('Õ', 225, 270);
  text('Ó', 250, 270);
  text('Ô', 275, 270);
  text('Ú', 300, 270);
  text('Ç', 325, 270);
  text('0', 350, 270);
  text('1', 375, 270);
  text('2', 400, 270);
  text('3', 100, 320);
  text('4', 125, 320);
  text('5', 150, 320);
  text('6', 175, 320);
  text('7', 200, 320);
  text('8', 225, 320);
  text('9', 250, 320);
  text('CONFIRMAR', 180, 370);
  text(nome , 150, 125);
  
  textSize(15);
  text('pressione enter', 377,460);
  text('para selecionar', 377,475);
  
  text('Aperte ESC',20,460);
  text('para voltar',24, 475);
}

function Instruções(){
  background(220);
  image(imgnormal, 0, 0);
  textStyle(BOLD);
  textSize(40);
  text('INSTRUÇÕES', 118, 90);
  textAlign(LEFT);
  textSize(20);
  text('Nesse jogo, o objetivo é correr ate o final', 50, 150);
  text(' da pista e ganhando pontuação ao jogar', 50, 170);
  text('o lixo nas cestas, mas cuidado, caso você', 50, 190);
  text('jogue o lixo no chão você será punido com', 50, 210);
  text('perda de pontuação.', 50, 230);
  text('Os controles de moviemento são as setas', 50, 280);
  text('do teclado, para confirmar algo use Enter, ', 50, 300);
  text('para sair ou voltar ao menu principal use', 50, 320);
  text('Esc.', 50, 340);
  textSize(15)
  text('Aperte ESC',400,460);
  text('para voltar',404, 475);
}

function créditos(){
  background(220);
  image(imgnormal, 0, 0);
  textSize(45);
  image(imgsofia, 45, 370, 80, 107);
  image(imgjosenilton,43, 270, 85, 85);
  image(imgartur, 45, 130, 70,124);
  textStyle(BOLD);
  textSize(40);
  text('créditos', 170, 100);
  textSize(15);
  text('Programador:', 140, 170);
  text('Artur Rafael de Lucena Maia Gabriel', 140, 185);
  text('Estudante do curso ciencias e tecnologia', 140, 200);
  text('Educador:', 140, 285);
  text('Josenilton Benigno de Lima', 140, 300);
  text('Pedagogo e professor de física', 140, 315);
  text('do ensino médio.', 140, 330);
  text('Desing:', 140, 390);
  text('Sofia Amaro de Jesus ', 140, 405);
  text('Infografia web', 140, 420);
  text('Aperte ESC',400,460);
  text('para voltar',404, 475);
}
function fase1(){
  background(220);
  fill(255,255,255);
  image(imgnormal, 0, 0);
  image(imgestrada, 0,375, 0, 76);
  image(imglixeira, xlixeira, 350, 20, 42);
  image(imgciclista, xciclista, 370,60, 52);
  rect(0, 450, 500,70);
  fill(0,0,0);
  textSize(20);
  text('SCORE:', 10, 475);

  if(keyIsDown(RIGHT_ARROW) && xciclista < 420){
    xciclista = xciclista + 3;
  }
  if(keyIsDown(LEFT_ARROW) && xciclista > 20){
    xciclista = xciclista - 3;
  }
  xlixeira = xlixeira - 4;
  if(xlixeira < -10){
    xlixeira = Math.floor(random(510, 600))
    contadorlixeira++;
  }
  text(pontos, 90, 475);
  if(contadorlixeira > 20){
    if(pontos >= 150){
      tela=9;
      return tela;
    }
    else{
      tela=10;
      return tela;
    }
    
  }
  if(pontos >= 100){
    tela=5;
    return tela;
  }
  if(pontos < -50){
    tela=7;
    return tela;
  }
}

function fase2(){
  background(220);
  fill(255,255,255);
  image(imgvivo1, 0, 0);
  image(imgestrada, 0,375, 0, 76);
  image(imglixeira, xlixeira, 350, 20, 42);
  image(imgciclista, xciclista, 370,60, 52);
  rect(0, 450, 500,70);
  fill(0,0,0);
  textSize(20);
  text('SCORE:', 10, 475);

  if(keyIsDown(RIGHT_ARROW) && xciclista < 420){
    xciclista = xciclista + 3;
  }
  if(keyIsDown(LEFT_ARROW) && xciclista > 20){
    xciclista = xciclista - 3;
  }
  xlixeira = xlixeira - 6;
  if(xlixeira < -10){
    xlixeira = Math.floor(random(510, 600));
    contadorlixeira++;
  }
  text(pontos, 90, 475);
  if(contadorlixeira > 20){
    if(pontos >= 150){
      tela=9;
      return tela;
    }
    else{
      tela=10;
      return tela;
    }
  }
  if(pontos >= 200){
    tela=6;
    return tela;
  }
  if(pontos < 100)
    tela=4
    return tela;
}

function fase3(){
  background(220);
  fill(255,255,255);
  image(imgvivo2, 0, 0);
  image(imgestrada, 0,375, 0, 76);
  image(imglixeira, xlixeira, 350, 20, 42);
  image(imgciclista, xciclista, 370,60, 52);
  rect(0, 450, 500,70);
  fill(0,0,0);
  textSize(20);
  text('SCORE:', 10, 475);

  if(keyIsDown(RIGHT_ARROW) && xciclista < 420){
    xciclista = xciclista + 3;
  }
  if(keyIsDown(LEFT_ARROW) && xciclista > 20){
    xciclista = xciclista - 3;
  }
  xlixeira = xlixeira - 7;
  if(xlixeira < -10){
    xlixeira = Math.floor(random(510, 600));
    contadorlixeira++;
  }
  text(pontos, 90, 475);
  if(contadorlixeira > 20){
    if(pontos >= 100){
      tela=9;
      return tela;
    }
    else{
      tela=10;
      return tela;
    }
  }
  if(pontos < 200){
    tela=5;
    return tela;
  }
}

function fase4(){
  background(220);
  fill(255,255,255);
  image(imgmorto1, 0, 0);
  image(imgestrada, 0,375, 0, 76);
  image(imglixeira, xlixeira, 350, 20, 42);
  image(imgciclista, xciclista, 370,60, 52);
  rect(0, 450, 500,70);
  fill(0,0,0);
  textSize(20);
  text('SCORE:', 10, 475);

  if(keyIsDown(RIGHT_ARROW) && xciclista < 420){
    xciclista = xciclista + 3;
  }
  if(keyIsDown(LEFT_ARROW) && xciclista > 20){
    xciclista = xciclista - 3;
  }
  xlixeira = xlixeira - 2;
  if(xlixeira < -10){
    xlixeira = Math.floor(random(510, 600));
    contadorlixeira++;
  }
  text(pontos, 90, 475);
  if(contadorlixeira > 20){
    if(pontos >= 150){
      tela=9;
      return tela;
    }
    else{
      tela=10;
      return tela;
    }
  }
  if(pontos > -45 && pontos < 100){
    tela=4;
    return tela;
  }
  if(pontos < -70){
    tela=8;
    return tela;
  }
}

function fase5(){
  background(220);
  fill(255,255,255);
  image(imgmorto2, 0, 0);
  image(imgestrada, 0,375, 0, 76);
  image(imglixeira, xlixeira, 350, 20, 42);
  image(imgciclista, xciclista, 370,60, 52);
  rect(0, 450, 500,70);
  fill(0,0,0);
  textSize(20);
  text('SCORE:', 10, 475);

  if(keyIsDown(RIGHT_ARROW) && xciclista < 420){
    xciclista = xciclista + 3;
  }
  if(keyIsDown(LEFT_ARROW) && xciclista > 20){
    xciclista = xciclista - 3;
  }
  xlixeira = xlixeira - 2;
  if(xlixeira < -10){
    xlixeira = Math.floor(random(510, 600));
    contadorlixeira++
  }
  text(pontos, 90, 475);
  if(contadorlixeira > 20){
    if(pontos >= 150){
      tela=9;
      return tela;
    }
    else{
      tela=10;
      return tela;
    }
  }
  if(pontos > -76){
    tela=7;
    return tela;
  }
}

function final1(){
  background(220);
  
  image(imgvivo2, 0, 0);
  
  textSize(40);
  text('Parabéns', 150, 100);
  
  textSize(20);
  text('você ajudou o meio ambiente jogando', 60, 160);
  text('as latinhas na lixeira, o meio ambiente', 60, 180);
  text('agradece.', 60, 200);
  text(' a sua ajuda fez com que a vegetação', 60, 230);
  text('aumentasse, deixando também a água',60, 250);
  text('mais limpa e viva com peixes.',60, 270);
  text('sua pontuação foi: ',300, 430);
  text('Aperte ESC',20,460);
  text('para voltar',24, 475);
  
  textSize(25);
  nome = v.join('')
  text(nome + ': ' + pontos, 300,455);
}

function final2(){
  background(220);
  
  image(imgmorto2, 0, 0);
  textSize(40);
  text('Precisa melhorar', 90, 100)
  
  textSize(20);
  text('você jogou muito lixo no chão, o meio', 60, 160);
  text('ambiente sofre com isso.', 60, 180);
  text('sua ação ocasionou na morte das plantas', 60, 210);
  text(' e vegetação, poluindo também as águas', 60, 230);
  text('gerando a morte dos peixes e animais.', 60, 250);
  text('sua pontuação foi: ',300, 430);
  text('Aperte ESC',20,460);
  text('para voltar',24, 475);
  
  textSize(25);
  nome = v.join('')
  text(nome + ': ' + pontos, 300,455);
  
}

function keyPressed() {
   if(keyCode == UP_ARROW && menuy > 320){
    menuy = menuy - 50;
    op = op - 1
  }
  if(keyCode === DOWN_ARROW && menuy < 350){
    menuy = menuy + 50
    op = op + 1
  }
  if(keyCode === ESCAPE){
    tela=0
    nome = ''
    v[i] = ''
    for(j = 0; j < i; j++){
    v[j] = ''
    }
    i = -1
    contadorlixeira=0
    pontos=0
  }
  if(keyCode === ENTER && tela >= 4 && tela <= 8){
    if(dist(xciclista + 30, 370, xlixeira + 10, 370)<20){
    pontos = pontos + 20
    }
    else{pontos = pontos - 10}
  }
  if(keyCode === ENTER && tela == 0){
    if(op==1){
      tela=1
      op1=1
  }
    if(op==2){
    tela=2  
    }
    if(op==3){
      tela=3
    }
  } 
  if(op1 == 1)
  {
    if(keyCode == UP_ARROW && ynome > 148){
      ynome = ynome - 50;
      opcaonome = opcaonome - 13;
      if(caixa == true){
        caixa = false
        xnome = 245
      }
    }
    if(keyCode == LEFT_ARROW){
      if(xnome > 100 && caixa == false){
        xnome = xnome - 25;
      opcaonome = opcaonome - 1;
      }
  }
    if(keyCode == RIGHT_ARROW && caixa == false){
      if(xnome < 380 && ynome < 260)
      {
        xnome = xnome + 25;
        opcaonome = opcaonome + 1;
      }
      else if(ynome > 260 && xnome < 225)
      {
          xnome = xnome + 25;
        opcaonome = opcaonome + 1;
      }
      if(xciclista < 480 && tela == 4){
        xciclista = xciclista + 3
      }
    }
    if(keyCode == DOWN_ARROW){
      if(xnome < 400 && ynome < 200)
      {
        ynome = ynome + 50;
        opcaonome = opcaonome + 13;
      }
      else if(xnome < 250 && ynome == 248){
        ynome = ynome + 50
        opcaonome = opcaonome + 13;
      }
      else if(xnome > 250 && ynome == 248){
        xnome = 245
        ynome = 298
        opcaonome = 110
      }
      else if(xnome < 250 && ynome == 298){
        ynome = ynome + 50
        xnome = 175
        caixa = true
        opcaonome = 123
      }
    }
    if(caixa == true){
      xcaixa = 135
    }
    else{
      xcaixa = 25
    }
    if(keyCode == ENTER && tela == 1){
      if(opcaonome == 123){
        tela=4
      }
      if(opcaonome <= 90 && opcaonome >= 65 && i < 8){
        nome = ''
        v[i] = String.fromCharCode(opcaonome);
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome >= 101 && opcaonome <= 110 && i < 8){
        n = opcaonome - 53
        nome = ''
        v[i] = String.fromCharCode( n );
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 91 && i < 8){
        nome = ''
        v[i] = 'Á'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 92 && i < 8){
        nome = ''
        v[i] = 'Â'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 93 && i < 8){
        nome = ''
        v[i] = 'É'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 94 && i < 8){
        nome = ''
        v[i] = 'Ê'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 95 && i < 8){
        nome = ''
        v[i] = 'Í'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 96 && i < 8){
        nome = ''
        v[i] = 'Õ'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 97 && i < 8){
        nome = ''
        v[i] = 'Ó'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 98 && i < 8){
        nome = ''
        v[i] = 'Ô'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 99 && i < 8){
        nome = ''
        v[i] = 'Ú'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
      if(opcaonome == 100 && i < 8){
        nome = ''
        v[i] = 'Ç'
        i++
        for(j = 0; j < i; j++){
          nome = nome + v[j]
        }
      }
    }
    if(keyCode == BACKSPACE){
      nome = ''
      v[i] = ''
      i--
      for(j = 0; j < i; j++){
        nome = nome + v[j]
      }
    }
  }
}

