// Parse number function
function printNumber(number, decimals){
  
    let decpoint = '.' 
    let thousand = ',' 
  
    let n = number.toFixed(decimals).split('.')
   
    n[0] = n[0].split('').reverse().map((c, i, a) =>
      i > 0 && i < a.length && i % 3 === 0 ? c + thousand : c
    ).reverse().join('')
    
    let final = (Math.sign(number) < 0 ? '-' : '') + n.join(decpoint)
    return final
}

export {printNumber};