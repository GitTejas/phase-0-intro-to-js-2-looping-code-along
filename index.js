function writeCards(names, message="cool") {
    const respectiveArray = []
    for (let i= 0; i<names.length; i++) {
    respectiveArray.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }
    return respectiveArray
}


// Code your solutions in this file



function countDown(number) {
    while (number>=0) {
        console.log(number--)
    }
}