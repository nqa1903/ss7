function filterFalseValue(obj:{[key:string]:any}):void{
    for(let key in obj){
        if(obj[key] === undefined || obj[key] === false || obj[key] === 0 || obj[key] === '' || obj[key] === null){
            delete obj[key];
        }
    }
}

let obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
}

filterFalseValue(obj);
console.log(obj);
