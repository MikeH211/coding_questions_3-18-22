
let stack:any[] = [];

function pushToStack(value:any){
    stack.push(value);
    return stack;
}
function pop(){
    if(stack.length>0){
        return stack[stack.length-1];
    }else{
        console.log("Error no values in stack")
    }
    
}
function max(){
    if(stack.length>0){
        return (Math.max(...stack))
    }else{
        console.log("Error no values in stack")
    }
}
pushToStack(6)
pushToStack(8)
pushToStack(10)
console.log(pop())
console.log(max())