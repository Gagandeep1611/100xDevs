function gaganAsyncFunction(){
    let p = new Promise(function(resolve) {
        setTimeout(function(){
            resolve("Hi there");},3000);
    });
    return p;
}

async function gaganAsyncFunctionAsync() {
    let value = await gaganAsyncFunction();
    console.log(value);
}

gaganAsyncFunctionAsync();