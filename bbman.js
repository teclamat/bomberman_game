class Bomberman {
    constructor() {
        this.game = document.createElement('canvas');
        this.game.width = 750;
        this.game.height = 650;
        this.ctx = this.game.getContext('2d');
        this.ctx.fillStyle = "#393";
    }
    render() {
        this.ctx.fillRect(0, 0, 750, 650);
    }

    init() {
        document.body.appendChild(this.game);
        this.render();
    }
}

const bomberman = new Bomberman();

window.addEventListener('DOMContentLoaded', () => bomberman.init());
