 const value = document.querySelector('input')

item.addEventListener('click',myfuction);

function myfunction(){
    setTimeout(() => {if(key === 's'){
        counts = S++;
    }else if(key ==='l'){
        countl = l++; 
    }
        
    }, value *1000);
}

function result(myfunction){
    if(countl>counts){
        return 'l won';
    } else if(countl<counts){ 
        return 's won';
    } else 'its tie'
}
