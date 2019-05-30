class Bomberman {
    render() {

    }

    build() {

    }

    handleInput(event) {


        switch (event.keyCode) {
            // key code lewa strzalka
            case 37:
                console.log('ruch w lewo gracza 1');
                break;

            // key code prawa strzalka
            case 39:
                console.log('ruch w prawo gracza 1');
                break;

            // key code gorna strzalka
            case 38:
                console.log('ruch w gore gracza 1');
                break;

            // key code dol strzalka
            case 40:
                console.log('ruch w dol gracza 1');
                break;

            // key code ctrl
            case 17:
                console.log('drop bomby gracza 1');
                break;

            // key code A
            case 65:
                console.log('ruch w lewo gracza 2');
                break;

            // key code D
            case 68:
                console.log('ruch w prawo gracza 2');
                break;

            // key code W
            case 87:
                console.log('ruch w gore gracza 2');
                break;

            // key code S
            case 83:
                console.log('ruch w dol gracza 2');
                break;

            // key code Q
            case 81:
                console.log('drop bomby gracza 2');
                break;

        }
    }

    init(){
        window.addEventListener('keydown', (ev) => this.handleInput(ev));
    }
}

const bbman = new Bomberman();