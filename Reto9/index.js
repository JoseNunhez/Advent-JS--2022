function countTime(leds) {
    leds = leds.join('').split(1);
    leds[0] += leds.pop();
    let count = Math.max(...leds.map(led =>led.length));
    return count * 7;
}

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)) 