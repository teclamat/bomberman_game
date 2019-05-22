const Topbar_height=75;
const Topbar_width=750;

class Topbar{
    constructor(){
        this.model = document.createElement('canvas');
        this.model.id = "topbar";
        this.model.width = Topbar_width;
        this.model.height = Topbar_height;
        this.ctx = this.model.getContext('2d');
        this.ctx.fillStyle = '#b4b18d';
        this.ctx.fillRect(0,0,Topbar_height,Topbar_width);
    }

}

class Bomberman {

    render(){

    }

    build(){
}
}