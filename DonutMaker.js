class DonutMaker{
    
    constructor (donutCounter, autoClicker, donutMulti, isAutoClickerActivated){
        this.donutCounter = donutCounter;
        this.autoClicker = autoClicker;
        this.donutMulti = donutMulti;
        this.isAutoClickerActivated = isAutoClickerActivated;
        this.increment = 10;
        this.autoClickerCost = 100;
        this.multiplierCost = 50;
    }
    //Displays the Counter
    get donuts() {
        return this.donutCounter;
    }
    get countAutoClicker(){
        return this.autoClicker;
    }
    get countDonutMultiplier(){
        return this.donutMulti
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

    activateAutoClicker(){
        this.isAutoClickerActivated = true;
    }

    //This was part of testing, not used in core loop
    addDonutMultiplier(){
        if (this.donuts >= 50){
            this.donutCounter -= this.multiplierCost;
            this.donutMulti++;
        }
    }

    //This will increase the cost of the multiplier
    costOfMultiplier(){
        let currentmultiplierCost = (this.multiplierCost * (this.countDonutMultiplier+1));
        if (this.donuts >= currentmultiplierCost){
            this.donutCounter -= currentmultiplierCost
            this.donutMulti++;
        }
    }
        // this increases the value of each donut compaired to the multiplier
    multiplierValue(){
        if (this.countDonutMultiplier > 0){
            this.donutCounter += Math.ceil(1.2 * this.countDonutMultiplier);
            this.autoClicker += Math.ceil(1.2 * this.countDonutMultiplier);
        }
    }


}

export default DonutMaker