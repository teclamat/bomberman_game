const Topbar_height = 75;
const Topbar_width = 750;


class Topbar {
    constructor() {
        this.model = document.createElement('canvas');
        this.model.width = Topbar_width;
        this.model.height = Topbar_height;
        this.ctx = this.model.getContext('2d');
        this.ctx.fillStyle = 'orange';
        this.ctx.fillRect(0, 0, Topbar_width, Topbar_height);

        this.clock(80,40);


    }



    clock(w,h){
        let x = 3;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect((Topbar_width/2)-(w/2),(Topbar_height/2)-(h/2),w,h);
        this.ctx.font = '20px serif';
        this.ctx.fillText(x,(Topbar_width/2)-(w/2) ,(Topbar_height/2)-(h/2) );
    }
    draw(ctx) {
        ctx.drawImage(this.model, 0, 0);
    }
}

class Bomberman {
    constructor() {
        this.game = document.createElement('canvas');
        this.game.width = 750;
        this.game.height = 650;
        this.ctx = this.game.getContext('2d');
        this.topbar = new Topbar();
    }
    render() {
        this.topbar.draw(this.ctx);
    }

    init() {
        document.body.appendChild(this.game);
        this.render();
    }
}

const bbman = new Bomberman();

window.addEventListener('DOMContentLoaded', () => bbman.init());