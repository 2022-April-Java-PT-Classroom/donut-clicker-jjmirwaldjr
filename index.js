import DonutMaker from './DonutMaker.js'

renderPage();

function renderPage(){
  donutMaker();
}

// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

function donutMaker(){
  const createBtn = document.querySelector('#button');
  const donutCounter = document.querySelector('#donutCounter');
  const autoClicker = document.querySelector('#autoClicker');
  const donutMulti = document.querySelector('#multiplier');
  
  
  const createdCounter = new DonutMaker(donutCounter.value, autoClicker.value,
      donutMulti.value);

      donutCounter.innerText = createdCounter.donutCounter;
      autoClicker.innerText = createdCounter.autoClicker;
      donutMulti.innerText = createdCounter.donutMulti;

  // console.log('this is working!!!!');
  
    //Displays Counters
  // displayDonutsCounters(createdCounter);
  
  //constructor for the counters



}