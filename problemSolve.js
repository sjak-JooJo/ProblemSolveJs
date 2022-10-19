let temparature = [2, 3, -5, -8, 9, 10, 32];

function getHigherAndLowerValue(arr){
    let high = arr[0]; 
    let low = arr[0]; 
    for(let i = 0; i < arr.length; i++){
       // if(arr[i].typeof !== "number") continue;

        if(high > arr[i]){
            high = arr[i];
        }
        if(low < arr[i]){
            low = arr[i];
        }
    }
    console.log(high, low);
}

getHigherAndLowerValue(temparature);