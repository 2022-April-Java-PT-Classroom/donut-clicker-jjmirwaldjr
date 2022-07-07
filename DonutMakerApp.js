import DonutMaker from './DonutMaker.js'
import {displayDonutCounter} from './utility/util'


// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

renderPage();

function renderPage(){
  donutMaker();
}

function donutMaker(){
    const createBtn = document.querySelector('#button');
    
    createBtn.addEventListener('click', ()=>{
        const gameLoop = new DonutMaker( 0 , 0 , 0)
        const donutCounter = document.querySelector('#donutCounter');
        const counterInfo = document.createElement('p');
        const conuterInfoSection = document.createElement('section');
        
        //Counters for the donuts
        displayDonutCounter(counterInfo, gameLoop);
        conuterInfoSection.appendChild(counterInfo);

        //display
        donutCounter.appendChild(counterInfo);

        //butons for the game loop
        const bakeBtn = document.createElement('button');
        const autoClickerBtn = document.createElement('button');
        const multiplierBtn = document.createElement('button');

        bakeBtn.innerText = 'Bake!';
        autoClickerBtn.innerText = 'Hire a Helper!';
        multiplierBtn.innerText = 'More Ovens!';
        conuterInfoSection.appendChild(bakeBtn);
        conuterInfoSection.appendChild(autoClickerBtn);
        conuterInfoSection.appendChild(multiplierBtn);
        
        //final display
        donutCounter.appendChild(conuterInfoSection);

        //Game loop buttons
        bakeBtn.addEventListener('click', () => {
          gameLoop.addToCounter();
            if (gameLoop.countDonutMultiplier > 0){
                gameLoop.donutCounter += 
                Math.ceil(1.2 * gameLoop.countDonutMultiplier);}
      
          displayDonutCounter(counterInfo,gameLoop);
        });
        autoClickerBtn.addEventListener('click', () =>{
          gameLoop.addAutoClicker();
          displayDonutCounter(counterInfo,gameLoop);
        });
        multiplierBtn.addEventListener('click', () => {
          gameLoop.costOfMultiplier();
          displayDonutCounter(counterInfo,gameLoop);
        });

        //Timer for the auto bakers
        // if (gameLoop.countAutoClicker <= 1){
        //   setInterval(gameLoop.addToCounter(), 1000);
        // }
    });
}