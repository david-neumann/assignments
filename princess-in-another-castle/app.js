class Player {
    constructor (name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins; 
        this.status = status; 
        this.hasStar = hasStar; 
    }

    setName(namePicked) {
        if (namePicked === 'Mario' || namePicked === 'Luigi') {
            this.name = namePicked;
        }
    }

    gotHit() {
        if (this.status === 'Powered Up') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else if (this.status === 'Small') {
            this.status = 'Dead';
        }
    }

    gotPowerup() {
        if (this.status === 'Small') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Powered Up';
        } else if (this.status === 'Powered Up') {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        if (this.hasStar) {
            console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nYou have a star\n`);
        }
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`)
    }
}

const mario = new Player ('Mario', 0, 'Small', false);

let intervalId;

const randomNumber = () => Math.floor(Math.random() * 3)

const playGame = () => {
    let randomFunction = randomNumber();
    if (randomFunction === 0) {
        mario.gotHit();
    } else if (randomFunction === 1) {
        mario.gotPowerup();
    } else if (randomFunction === 2) {
        mario.addCoin();
    }
    mario.print();
    if (mario.status === 'Dead') {
        clearInterval(intervalId)
    }
}

intervalId = setInterval(playGame, 1000);