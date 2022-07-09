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
        let underTest = new DonutMaker(100, 1);
        underTest.addAutoClicker();
        expect(underTest.donuts).toEqual(100);
        expect(underTest.countAutoClicker).toEqual(1);
    });

    // *was a redunent test, repurposed*
    test("Does it add the multiplier", () => {
        let underTest = new DonutMaker(100, 0, 0);
        underTest.addDonutMultiplier();
        expect(underTest.donuts).toEqual(50);
        expect(underTest.countDonutMultiplier).toEqual(1);
    });

    test("Does it increase the cost of the multiplier", () => {
        let underTest = new DonutMaker(100, 0, 1);
        underTest.costOfMultiplier();
        expect(underTest.donuts).toEqual(0);
        expect(underTest.countDonutMultiplier).toEqual(2)
    });
    
    test("Should increase the value of each donut clicked", () => {
        let underTest = new DonutMaker(100, 0, 1);
        underTest.addToCounter();
        underTest.addDonutMultiplier();
        underTest.multiplierValue();
        expect(underTest.donuts).toEqual(63);
        expect(underTest.countAutoClicker).toEqual(3)
        expect(underTest.countDonutMultiplier).toEqual(2)
    });
});