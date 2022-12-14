function distributeGifts(packOfGifts, reindeers) {
    return parseInt(reindeers.reduce((acc, reindeer) => 
    acc + (reindeer.length * 2), 0) / packOfGifts.reduce((acc, gift) => acc + gift.length, 0))
  }

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers))