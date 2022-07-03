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

    // *Redunent Test*
    // test("Does it add to the Counter", () => {
    //     let underTest = new DonutMaker(0, 0);
    //     underTest.addToCounter();
    //     expect(underTest.getDonuts()).toEqual(10);
    // });
    
});