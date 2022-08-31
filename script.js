function add(n1,n2){

    return (n1+n2)
}

function multiply(n1,n2){
    let result=0
    for (let i=1; i<=n2; i++){
        result = add(result,n1)
    }
    return result
}

function power(n1,n2){
    let result=n1
    if (n2==0){
        return 1
    }
    for (let i=1; i<n2; i++){
        
        result = multiply(result,n1)
    }
    return result 
}

function factorial(n1){
    let result=1
    if (n1==0){
        return 1
    }
    for (let i=1; i<=n1; i++){
        
        result = multiply(result,i)
    }
    return result 
}

