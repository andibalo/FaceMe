function main(number){

    for(let i = 1; i <= number; i++){
        for(let x = 0; x < i ; x++){
            console.log(i)
        }
    }
}

console.log(main(6))

function main2(bil,a,b){
    if(a < b){
        console.log("invalid number")
    }

    if(bil === "K"){
        for(let i= a; i <= b;i++){
            if(i%2 === 0){
               console.log(i) 
            }
        }
    } else{
        for(let i= a; i <= b;i++){
            if(i%2 !==0){
                console.log(i)
            }
        }
    }
}

console.log(main2("K",3,10))

function main3(number){
    let x = 1
    for(let i = 0 ; i < number ; i++){
        console.log(x)
        x *= 2
    }
}



function factorial(p,q){
    let factorial = 1
    
    for( let x = p ; x <=q;x++){
        for(let i = 1 ; i <=x ;i++){
            factorial = factorial *i
        }
        console.log(factorial)
        factorial = 1
    }
}

console.log(factorial(3,8))

function factorial2(p,q){
 
    while(p <=q){
        let a = p ;
        let f =a;
        while(a>1){
            a -= 1
            f *= a
        }
        console.log(p + "!="+f)
        p +=1
    }
}

console.log(factorial2(3,8))

