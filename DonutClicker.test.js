import { TestWatcher } from 'jest';
import DonutMaker from './DonutMaker.js'

describe('DonutMaker', () => {
    
    test("Does it add to the Counter", () => {
        let underTest = new DonutMaker(0, 0);
        underTest.addToCounter();
        expect(underTest.retriveDonuts()).toEqual(1);
    });

    
    test("Does it increase the auto clicker when you reach 100 donuts", () => {
        let underTest = new DonutMaker (100,0);
        underTest.addToAutoClicker();
        expect(underTest.retriveDonuts()).toEqual(0);
        expect(underTest.retriveAutoClicker()).toEqual(1);
    });
    
    test("You can not buy the autoclicker with less then 100 donuts", () => {
        let underTest = new DonutMaker(99, 0);
        underTest.addToAutoClicker();
        expect(underTest.retriveDonuts()).toEqual(99);
        expect(underTest.retriveAutoClicker()).toEqual(0);
    });
    
    //*was a redunent test, repurposed*
    test("Does it increase the cost of the next autoclicker", () => {
        let underTest = new DonutMaker(1000, 1);
        underTest.increaseCostOfAutoClickers();
        expect(underTest.retriveDonuts()).toEqual(1000);
    });
});