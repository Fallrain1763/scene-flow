var isLeveloneLock = true;
var isLeveltwoLock = true;
var isLevelthreeLock = true;

class start extends Phaser.Scene {
    constructor() {
        super('start');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Scene Flow", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Start Screen\nTap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class LS extends Phaser.Scene {
	constructor() {
			super('LS');
	}
	preload() {
		this.load.path = './assets/LevelUI/';
		this.load.image('l0u','/Level0_unlocked.png');
		this.load.image('l1l','/Level1_locked.png');
		this.load.image('l1u','/Level1_unlocked.png');
		this.load.image('l2l','/Level2_locked.png');
		this.load.image('l2u','/Level2_unlocked.png');
		this.load.image('l3l','/Level3_locked.png');
		this.load.image('l3u','/Level3_unlocked.png');
	}

	create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
		this.add.image(180, 360, 'l0u')
        .setInteractive()
        .on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L0'));
		});

		if(isLeveloneLock) {
			this.add.image(480, 360, 'l1l')
        }
		else {
            this.add.image(480, 360, 'l1u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L1'));
            });
        }

		if(isLeveltwoLock) {
			this.add.image(780, 360, 'l2l')
        }
		else {
            this.add.image(780, 360, 'l2u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L2'));
            });
        }

		if(isLevelthreeLock) {
			this.add.image(1080, 360, 'l3l')
        }
		else {
            this.add.image(1080, 360, 'l3u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L3'));
            });
        }
        
	}
	update() {
        
	}
}

class L0 extends Phaser.Scene {
    constructor() {
        super('L0');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 0", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L0_1'));
        });
    }
    update() {

    }
}

class L0_1 extends Phaser.Scene {
    constructor() {
        super('L0_1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#000000');
        this.add.text(640, 240, "You escaped the Level 0.", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);
        this.add.text(640, 480, "Don't get locked inside again...", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            isLeveloneLock = false;
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L1 extends Phaser.Scene {
    constructor() {
        super('L1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 1", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L1_1'));
        });
    }
    update() {

    }
}

class L1_1 extends Phaser.Scene {
    constructor() {
        super('L1_1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#000000');
        this.add.text(640, 240, "You escaped the Level 1.", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);
        this.add.text(640, 480, "Don't get locked inside again...\nI warn you...", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            isLeveltwoLock = false;
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L2 extends Phaser.Scene {
    constructor() {
        super('L2');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 2", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L2_1'));
        });
    }
    update() {

    }
}

class L2_1 extends Phaser.Scene {
    constructor() {
        super('L2_1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#000000');
        this.add.text(640, 240, "You escaped the Level 2.", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);
        this.add.text(640, 480, "Don't get locked inside again...\nThis is the serious warning...", { fontSize: 48, color: '#FFFFFF' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            isLevelthreeLock = false;
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L3 extends Phaser.Scene {
    constructor() {
        super('L3');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 3", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L3_1'));
        });
    }
    update() {

    }
}

class L3_1 extends Phaser.Scene {
    constructor() {
        super('L3_1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "You escaped the Level 3.", { fontSize: 48, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "I think you already mastered in locking yourself and escaping\nso I do not have to worry you being locked inside again!", { fontSize: 32, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            isLeveloneLock = true;
            isLeveltwoLock = true;
            isLevelthreeLock = true;
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('start'));
        });
    }
    update() {

    }
}

let config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    scene: [start, LS, L0, L0_1, L1, L1_1, L2, L2_1, L3, L3_1]
}

let game = new Phaser.Game(config);