const fs= require('fs')

// Part 1

const question=()=>{
    console.time('santa')
    fs.readFile('./santa.txt',(err,data)=>{
        let direction =data.toString()
        let directionArray= direction.split('')
        const answer = directionArray.reduce((acc,currentValue)=>{
            if(currentValue==='('){
                return acc+=1
            }else if(currentValue===')'){
                return acc-=1
            }
        },0) 
        console.log('Floor',answer)   
    })
    console.timeEnd('santa ')
}
question()


// Part 2 