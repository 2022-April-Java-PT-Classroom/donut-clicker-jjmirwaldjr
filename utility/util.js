export const displayDonutCounter = (element, object) => {
    element.innerText = 'Donut Counter: ' + object.donutCounter
    + '\n Auto Clicker: ' + object.autoClicker + '\n Donut Multiplier: '
    + object.donutMulti;
}