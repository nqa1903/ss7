let num: Array<number> = [1,3,4,2,7,9,32,43,12,45];
function isPrimeNumber(n : number):any{
    if(n < 2){
        return false;
    }
    for(let i = 2 ; i < Math.sqrt(n) ; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
function allPrimeNumbers(arr : number[]) :any{
    for(let num of arr){
        if(!isPrimeNumber(num)){
            return false;
        }
    }
    return true;
}
console.log(allPrimeNumbers(num));
