function getGiftsToRefill(a1, a2, a3) {
    const gifts = [...new Set([...a1, ...a2, ...a3])]
    .filter(gift => 
   a1.includes(gift) + 
   a2.includes(gift) + 
   a3.includes(gift) 
   === 1)
   return gifts
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3)

console.log(gifts)