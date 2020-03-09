function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(0, 0, 600, 600),
spriteBoneco = new Sprite(635, 21, 66, 67),
perdeu = new Sprite(600, 330, 394, 299),
jogar = new Sprite(610, 123, 390.02, 188),
novo = new Sprite(610, 640, 380, 130),
spriteRecord = new Sprite(46, 842, 486, 134),
spriteChao = new Sprite(0, 640, 602, 65),

redObstacle = new Sprite(628, 822, 50, 120),
pinkObstacle = new Sprite(681, 822, 50, 120),
blueObstacle = new Sprite(734, 822, 50, 120),
greenObstacle = new Sprite(787, 822, 50, 120),
yellowObstacle = new Sprite(840, 822, 50, 120);