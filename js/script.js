const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game_over = document.querySelector('.game-over');
const scoreGameOver = document.querySelector('.score');
const scoreHome = document.querySelector('.score-home');

let score = 0;

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  },500)
}

const loop = setInterval(() => {

  score++;

  scoreHome.innerHTML = `SCORE: ${score}`;
  scoreGameOver.innerHTML = `SCORE: ${score}`;

  const pipePostion = pipe.offsetLeft;
  const marioPostion = +window.getComputedStyle(mario).bottom.replace('px','');
  
  
  if (pipePostion <= 67 && pipePostion > 0 && marioPostion < 80) { 
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePostion}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPostion}px`;
    
    mario.src = './assets/game-over.png';
    mario.style.width = '60px';
    mario.style.left = '20px';
    
    game_over.style.display = 'flex';
    scoreHome.style.display = 'none'

    
    clearInterval(loop)
    
  }
},10)
 
document.addEventListener("keydown", jump);
  