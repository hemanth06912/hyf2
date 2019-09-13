// Weather wear
function weatherWear(temp){
    if(temp<2){
        return "Clothes To Wear :Wear clothes,Thermals and Winter Jacket";
    }else if (temp<12){
        return "Clothes To Wear :Wear clothes and Winter Jacket";   
    }else if (temp<20){
        return "Clothes To Wear :Wear Full-sleeve and pants";
    }else {
        return "Clothes To Wear :Wear casual t-shirts and shorts or cotton apparel";
    }
}

console.log(weatherWear(30));