function resolve(resolveAfter){
    new Promise(()=>{
        setTimeout(()=>{
            console.log('resolve');
        },resolveAfter*1000)
        
    })
};

resolve(2);


function makeUpOwnFunctionName(resolveAfter){
    new Promise(()=>{
        setTimeout(()=>{
            console.log('resolve');
        },resolveAfter*1000)
        
    })
};

makeUpOwnFunctionName(3);

function makeUpYourOwnFunctionName(resolveAfter){
    new Promise(()=>{
        setTimeout(()=>{
            console.log('I am called asynchronously');
        },resolveAfter*1000)
        
    })
};

makeUpYourOwnFunctionName(6);


