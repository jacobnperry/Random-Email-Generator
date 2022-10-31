export function comparison(subscriberCount,  version){
    let oldMax = "0",
        i = 0,
        middle
    let high = Math.floor((Object.keys(version).length) - 1)
    let low = 0
    
    while(i < 13){
        middle = Math.floor((high + low) / 2)
        console.log("current middle " + middle)
        if(parseInt(subscriberCount) >= intConvert(version[middle].Min) && parseInt(subscriberCount) <= intConvert(version[middle].Max)){
            console.log("First exit")
            return version[middle]
        }
        else if(parseInt(subscriberCount) < intConvert(version[middle].Max)){
            high = middle - 1
            console.log("Lower")

        }else if (parseInt(subscriberCount) > intConvert(version[middle].Max)){
            low = middle + 1
            console.log("Higher")   
        }
        i = i + 1
    }
}


function intConvert(count){
    if(count.indexOf(',') != -1 ){
      count = count.replace(/,/g, '')
      console.log("After conversion " + count)

    }
    return parseInt(count)
}