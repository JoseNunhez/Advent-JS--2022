function selectSleigh(distance, sleighs) {
    let list=sleighs.filter(x=>(20/x.consumption)>=distance).at(-1)
    return list==null?null:list.name
}

const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs))