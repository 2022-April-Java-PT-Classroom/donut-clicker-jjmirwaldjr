import DonutMaker from './DonutMaker.js'
import {displayDonutCounter} from './utility/util'


const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!');

renderPage();

function renderPage(){
  donutMaker();
}

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

function donutMaker(){
    const createBtn = document.querySelector('#button');
    
    createBtn.addEventListener('click', ()=>{
        const donutCounters = new DonutMaker( 0 , 0 , 0)
        const donutCounter = document.querySelector('#donutCounter');
        const counterInfo = document.createElement('p');
        const conuterInfoSection = document.createElement('section');
        
        //Counters for the donuts
        displayDonutCounter(counterInfo, donutCounters);
        conuterInfoSection.appendChild(counterInfo);

        //display
        donutCounter.appendChild(counterInfo);
        
    });

}