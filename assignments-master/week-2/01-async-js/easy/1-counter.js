/* Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

function delay(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

async function startCounter(){
    let count = 0;
    while(true){
        console.log(count++);
        await delay(1000);
    }
}

startCounter();