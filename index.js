// code your solution here
function saturdayFun(r = 'roller-skate', activity){
    if(activity){
        return `This Saturday, I want to `+ activity + `!`;
    }
    else{
        return `This Saturday, I want to `+ r + `!`;
    }
}
function mondayWork(o = 'go to the office', activity){
    if(activity){
        return `This Monday, I will ${activity}.`;
    }
    else{
        return `This Monday, I will ${o}.`;
    }
}
function wrapAdjective(wrap){
    return function(s = "special"){
        return (`You are ${wrap}${s}${wrap}!`);
    };
}
wrapAdjective("*")("a hard worker");
wrapAdjective("%")("a dedicated programmer");