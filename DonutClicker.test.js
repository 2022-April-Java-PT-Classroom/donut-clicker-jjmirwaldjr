import { TestWatcher } from 'jest';
import DonutMaker from './DonutMaker.js'

describe('DonutMaker', () => {
    
    test("Does it increase the auto clicker when you reach 100 donuts", () => {
        let underTest = new DonutMaker (100,0);
        underTest.addAutoClicker();
        expect(underTest.donuts).toEqual(0);
        expect(underTest.countAutoClicker).toEqual(1);
    });
    
    test("You can not buy the autoclicker with less then 100 donuts", () => {
        let underTest = new DonutMaker(99, 0);
        underTest.addAutoClicker();
        expect(underTest.donuts).toEqual(99);
        expect(underTest.countAutoClicker).toEqual(0);
    });
    
    //*was a redunent test, repurposed*
    test("This tells the auto clicker how many donuts to click", () => {
        let underTest = new DonutMaker(100, 1);
        underTest.addToCounter();
        expect(underTest.donuts).toEqual(110);
    });

    test("increaes the cost of the auto clicker", () =>{
        let underTest = new DonutMaker(100, 0);
        underTest.addAutoClicker();
        expect(underTest.donuts).toEqual(0);
        expect(underTest.countAutoClicker).toEqual(1);
    });

    // *was a redunent test, repurposed*
    test("Does it add the multiplier", () => {
        let underTest = new DonutMaker(50, 0, 0);
        underTest.addDonutMultiplier();
        expect(underTest.donuts).toEqual(0);
        expect(underTest.donutMultiplier).toEqual(1);
    });
    
});