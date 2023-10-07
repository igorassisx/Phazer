window.onload = function() {
    var gameConfig = {
        width: 800,
        height: 800, 
        backgroundColor: 0xecf0f1,
        scene: [bootGame, playGame]
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
    }

    class bootGame extends Phaser.Scene {
        constructor() {
            super("BootGame");
        }
        preload(){
            this.load.image("emptytile", "assets/sprites/emptytile.png");
        }
        create() {
            this.scene.start("PlayGame")
        }
    }


    class playGame extends Phaser.Scene {
        constructor() {
            super("PlayGame");
        }
        create() {
            for(var i = 0; i < 4; i++) {
                for(var j = 0; j < 4; j++) {
                    this.add.image(100 + j * 200, 100 + i * 200, "emptytile");
                }
            }
        }
    }

    function resizeGame() {
        var canvas = document.querySelector("canvas");
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio = game.config.width / game.config.height;
        if(windowRatio < gameRatio) {
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else  {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }
       
   