const repeatString = function(str, nums) {
    if (nums < 0){
        return "ERROR";
    }
    let repeated = "";
    let i = 0;
    while(i < nums){
        repeated += str;
        i+=1;
    }
    return repeated;


};


// Do not edit below this line
module.exports = repeatString;
