class DonutMaker{
    
    constructor (donutCounter, autoClicker){
        this.donutCounter = donutCounter;
        this.autoClicker = autoClicker;
        this.increment = 10;
        this.autoClickerCost = 100;
    }
    //Displays the Counter
    get donuts() {
        return this.donutCounter;
    }
    get countAutoClicker(){
        return this.autoClicker;
    }

    //User Clicks donut
    addToCounter(){
        if( this.countAutoClicker > 0){
            this.donutCounter += (this.increment * this.autoClicker);
        } else {
            this.donutCounter += this.increment;
        }
    }
    //Cost of Auto Clicker
    addAutoClicker(){
        let currentClickerCost = (this.autoClickerCost * (this.countAutoClicker+1));
        if (this.donuts >= currentClickerCost){
            this.donutCounter -= currentClickerCost
            this.autoClicker++;
        }
    }


    

}

export default DonutMaker