import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // ゲームアセットのプリロード
    this.load.setBaseURL('https://raw.githubusercontent.com/photonstorm/phaser3-examples/master/public/assets/');
    this.load.image('logo', 'sprites/phaser3-logo.png');
    this.load.image('red', 'particles/red.png');
  }

  create() {
    // パーティクルエミッターの作成
    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });

    // ロゴの作成と設定
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    // パーティクルをロゴに追従させる
    emitter.startFollow(logo);
  }
}

// ゲーム設定
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [MainScene]
};

// ゲームインスタンスの作成
const game = new Phaser.Game(config);
