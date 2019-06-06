const Topbar_height = 75;
const Topbar_width = 750;
const BLOCK_SIZE = 50;

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

class Wall {
    constructor(gameContext, whichWall){
        this.model = document.createElement('canvas');
        this.model.width = BLOCK_SIZE;
        this.model.height = BLOCK_SIZE;
        this.ctx = this.model.getContext('2d');
        this.game = gameContext;
        this.imgLoaded = false;
        this.img = new Image;
        this.img.src = 'wall_bomberman_50px.png';

        this.img.addEventListener('load',() => {
            if(whichWall === 'solid') {                // ściana pełna / nie zniszczalna
                this.ctx.drawImage(this.img, 0, 0, BLOCK_SIZE, BLOCK_SIZE, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
            }
            if(whichWall === 'to_destructive') {       // ściana do zniszczenia / z cegieł
                this.ctx.drawImage(this.img, 50, 0, BLOCK_SIZE, BLOCK_SIZE, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
            }
            if(whichWall === 'damadged') {             // ściana przy wybuchu / pomarańczowa z cegieł
                this.ctx.drawImage(this.img, 100, 0, BLOCK_SIZE, BLOCK_SIZE, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
            }
            this.imgLoaded = true;
        })
    }


    draw(x, y){
        if(!this.imgLoaded){
            setTimeout(() => this.draw(x,y), 10);
        }
        this.game.drawImage(this.model, x * BLOCK_SIZE, y * BLOCK_SIZE);
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



// class Bomberman {
//     constructor(w = 10, h = 10) {
//         this.w = w;
//         this.h = h;
//         this.game = document.createElement('canvas');
//         this.game.width = BLOCK_SIZE * w;
//         this.game.height = BLOCK_SIZE * h;
//         this.game.style = "border: 1px solid black"
//         this.ctx = this.game.getContext('2d');

//         this.wall_solid           = new Wall(this.ctx,'solid');             // ściana pełna / nie zniszczalna
//         this.wall_to_desttructive = new Wall(this.ctx,'to_destructive');    // ściana do zniszczenia / z cegieł
//         this.wall_damadged        = new Wall(this.ctx,'damadged');          // ściana przy wybuchu / pomarańczowa z cegieł
//     }

//     get randX() {
//         return parseInt(Math.random() * this.w);
//     }
//     get randY() {
//         return parseInt(Math.random() * this.h);
//     }

//     render() {
//         // this.wall_solid.draw(this.randX, this.randY);                //wall_solid            - ściana pełna / nie zniszczalna
//         // this.wall_to_desttructive.draw(this.randX, this.randY);      //wall_to_destructive   - ściana do zniszczenia / z cegieł
//         // this.wall_damadged.draw(this.randX, this.randY);             //wall_damadged         - ściana przy wybuchu / pomarańczowa z cegieł

//     }


//     render_test_random() {

//         //  ---> TEST <--- //
//         this.ctx.clearRect(0, 0, this.game.width, this.game.height);
//         for(let i = 0; i < 40; ++i){
//             this.wall_solid.draw(this.randX, this.randY);
//         }
//         for(let i = 0; i < 20; ++i){
//             this.wall_to_desttructive.draw(this.randX, this.randY);
//         }
//         for(let i = 0; i < 5; ++i){
//             this.wall_damadged.draw(this.randX, this.randY);
//         }
//         setTimeout( ()=> this.render_test_random(), 2500);
//     }


//     render_level_1() {
//         // ramka ze ściany
//         for(let i=0; i<parseInt(this.h); i++) {     // pion
//             this.wall_solid.draw(0, i);
//             this.wall_solid.draw(this.w-1, i);
//         }
//         for(let i=0; i<parseInt(this.w); i++) {     // poziom
//             this.wall_solid.draw(i, 0);
//             this.wall_solid.draw(i,this.h-1);
//         }

//         // szachownica
//         for(let i=2; i<parseInt(this.h-2); i += 2) {
//             for(let j=2; j<parseInt(this.w-2); j += 2) {
//                 this.wall_solid.draw(j,i);
//                 this.wall_solid.draw(j,i);


//                 let x = this.randX;

//                 if(i!=parseInt(this.h-3) && j!=parseInt(this.w-3) ){
//                     if( (x%(i+3)) > this.h/5) this.wall_to_desttructive.draw(j, i+1);
//                     else{
//                         if( (x%(i+2)) < this.h/6) this.wall_to_desttructive.draw(j+1, i);
//                         else this.wall_to_desttructive.draw(j+1, i+1);
//                     }
//                 }
//             }
//         }
//     }


//     init() {
//         document.body.appendChild(this.game);
//         //bbman.render_test_random();
//         bbman.render_level_1();

//     }
// }

const bbman = new Bomberman();

window.addEventListener('DOMContentLoaded', () => bbman.init());
