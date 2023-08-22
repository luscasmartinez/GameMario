const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreValueElement = document.getElementById('score-value');
const cloud = document.querySelector('.cloud');

const restartButton = document.getElementById('restart');

const animateClouds = () => {
    cloudLoop = setInterval(() => {
        const cloudPosition = cloud.offsetLeft;

        if (cloudPosition >= window.innerWidth) {
            cloud.style.right = '-550px';
        }
        cloud.style.right = `${cloudPosition + 1}px`;
    }, 10);
};

const stopCloudAnimation = () => {
    clearInterval(cloudLoop);
};

const restartGame = () => {
    mario.style.animation = '';
    mario.style.bottom = '0';
    mario.src = './images/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '';

    pipe.style.animation = '';
    pipe.style.left = '';

    cloud.style.right = '-550px';

    a = 0;
    scoreValueElement.textContent = a;

    clearInterval(loop);
    clearInterval(cloudLoop);

    loop = setInterval(() => {
        const pipeposition = pipe.offsetLeft;
        const cloudposition = cloud.offsetLeft;
        const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipeposition}px`;

            cloud.style.animation = 'none';
            cloud.style.left = `${cloudposition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioposition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
            restartButton.style.display = 'block';
        } else {
            a++;
            scoreValueElement.textContent = a;

            if (a !== 0) {
                restartButton.style.display = 'none';
            }
        }
    }, 10);
    
    animateClouds(); // Reiniciar a animação das nuvens
};

animateClouds(); // Iniciar a animação das nuvens

restartButton.addEventListener('click', restartGame);

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

let a = 0;
let loop = setInterval(() => {
    const pipeposition = pipe.offsetLeft;
    const cloudposition = cloud.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        restartButton.style.display = 'block';
    } else {
        a++;
        scoreValueElement.textContent = a;

        if (a !== 0) {
            restartButton.style.display = 'none';
        }
    }
}, 10);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) {
        jump();
    }
});
