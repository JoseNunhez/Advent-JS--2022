function checkPart(part) {
    return[...part]
    .reduce((x,_,z)=>{
        let w=[...part].filter((_,y)=>y!=z)
        return x+=[...part].filter((_,y)=>y!=z).join("")==w.reverse().join("")
    },0)>0
}

console.log(checkPart("miidim"))
console.log(checkPart("midu"))
console.log(checkPart("uwu"))