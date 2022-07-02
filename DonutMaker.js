class DonutMaker{

    constructor (donutCounter, autoClicker){
        this.donutCounter = donutCounter;
        this.autoClicker = autoClicker;
    }

    //Counter for the Donut Master to track
    addToCounter(){
        this.donutCounter++;
    }

    addToAutoClicker(){
        if (this.donutCounter >= 100){
        this.donutCounter -= 100;
        this.autoClicker += 1;
        }
    }

    
    //Displays the counter
    retriveDonuts() {
        return this.donutCounter;
    }

    retriveAutoClicker(){
        return this.autoClicker;
    }

    //Donut Clicker
    increaseCostOfAutoClickers(){
        if( this.autoClicker >= 1){
            this.donutCounter ** 10;
        }
    }

}

export default DonutMaker