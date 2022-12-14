function wrapping (gifts) {
    return gifts.map(gift => { 
      const papel = "*".repeat(gift.length + 2)
      return `${papel}\n*${gift}*\n${papel}`
    })
}



const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)