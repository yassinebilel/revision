function iterateAndLog(number){
    var result=0
    for (let i = 0; i <=number ; i++) {
        if(number%2===0){
            return number+'is even'
        }
        return number+'is odd'
        
    }
}
undefined
iterateAndLog(2)
'2is even'
function iterateAndLog(number){
    for (let i = 0; i <=number ; i++) {
        if(number%2===0){
            return number+'is even'
        }
        return number+'is odd'
        
    }
}
undefined
iterateAndLog(2)
'2is even'
iterateAndLog(5)
'5is odd'
function iterateAndLog(number){
    for (let i = 0; i <=number ; i++) {
        if(number%2===0){
            return number+' is even'
        }
        return number+' is odd'
        
    }
}
undefined
iterateAndLog(5)
'5 is odd'
function iterateAndLog(number){
    let i=0
    while ( i <=number) i++
        n++{
        if(number%2===0){
            return number+' is even'
        }
        return number+' is odd'
        
    }
}
VM363:4 Uncaught SyntaxError: Unexpected token '{'
function iterateAndLog(number){
    let i=0
    while ( i <=number){ i++}
        n++
        {
            
        if(number%2===0){
            return number+' is even'
        }
        return number+' is odd'
        
    }
}
undefined
iterateAndLog(5)
VM369:4 Uncaught ReferenceError: n is not defined
    at iterateAndLog (<anonymous>:4:9)
    at <anonymous>:1:1
iterateAndLog @ VM369:4
(anonymous) @ VM375:1
function iterateAndLog(number){
    let i=0
    while ( i <=number){ i++}
        
        {
            
        if(number%2===0){
            return number+' is even'
        }
        return number+' is odd'
        
    }
}
undefined
iterateAndLog(5)
'5 is odd'
function iterateAndLog(number){
    let i=0
    while ( i <=number){ i++}
        
        {
            
        if(number%2===0){
            return number+' is even'
        }
        return number+' is odd'
        
    }
}
undefined
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
    }
       return iterateAndLog(number-1)
}
    
undefined
iterateAndLog(5)
'4 is even'
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
    }
       return iterateAndLog(number)
}
    

function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
    }
       return iterateAndLog(number-1)
}
    
undefined
iterateAndLog(45)
'44 is even'
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
        return number+' is odd'
    }
       return iterateAndLog(number-1)
}
    
undefined
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
        else if(number%2==0){
        return number+' is odd'
        }
        
    }
       return iterateAndLog(number-1)
}
    
VM724:4 Uncaught SyntaxError: Unexpected token 'else'
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
            
        }
    else if(number%2==0)
        {
        return number+' is odd'
        }
        
    }
       return iterateAndLog(number-1)
}
    
VM747:12 Uncaught SyntaxError: Illegal return statement
function iterateAndLog(number){
    if(number%2===0){
        return number+' is even'
            
        }
    else if(number%2!==0)
        {
        return number+' is odd'
        }
        
    }
       return iterateAndLog(number-1)
}
    
VM751:12 Uncaught SyntaxError: Illegal return statement
function iterateAndLog(number){
    if(number%2===0){
        return number+' is odd'
        
        
        }
         
        else  number+' is even'
    }
       return iterateAndLog(number-1)
}
    
VM783:10 Uncaught SyntaxError: Illegal return statement
function weirdDivisionWithFor(n) {
for (let i = 1; i < n; i++) {
    if (n%3===0){
        return "julia"
    }
    else if (n%5===0){
        return "james"
    }
    else if(n%3===0 && n%5===0){
        return "juliajames"
    }
    else if(n%3!==0 || n%5!==0)
        return n
}

}

undefined
weirdDivisionWithFor(16)
16
weirdDivisionWithFor(140)
'james'
let i=0
while(i<n){
    i++
}
VM1085:1 Uncaught SyntaxError: Identifier 'i' has already been declared
function weirdDivisionWithFor(n)

var i=0     
while(i<n){
    i++
}
 if (n%3===0){
        return "julia"
    }
    else if (n%5===0){
        return "james"
    }
    else if(n%3===0 && n%5===0){
        return "juliajames"
    }
    else if(n%3!==0 || n%5!==0)
        return n
}

}
VM1096:3 Uncaught SyntaxError: Unexpected identifier 'let'
function weirdDivisionWithFor(n)

let i=1
while(i<n){
    i++
}
 if (n%3===0){
        return "julia"
    }
    else if (n%5===0){
        return "james"
    }
    else if(n%3===0 && n%5===0){
        return "juliajames"
    }
    else if(n%3!==0 || n%5!==0)
        return n
}

}
VM1100:3 Uncaught SyntaxError: Unexpected identifier 'let'
function weirdDivisionWithFor(n) {
for (let i = n; i < 1; i++) {
    if (n%3===0){
        return "julia"
    }
    else if (n%5===0){
        return "james"
    }
    else if(n%3===0 && n%5===0){
        return "juliajames"
    }
    else if(n%3!==0 || n%5!==0)
        return n
}

}
undefined
weirdDivisionWithFor(0.3)
0.3
function weirdDivisionWithFor(n) {
for (let i = n; i <=1; i++) {
    if (n%3===0){
        return "julia"
    }
    else if (n%5===0){
        return "james"
    }
    else if(n%3===0 && n%5===0){
        return "juliajames"
    }
    else if(n%3!==0 || n%5!==0)
        return n
}

}

}
function reverseIterateAndLogRecursively(n){
    if(n===0){
        return 
        
    }if(n%2===0){
        console.log(n+"is even")
        
    }
    else {
        console.log(n+"is odd")
    }
    return reverseIterateAndLogRecursively(n-1)
}
undefined
reverseIterateAndLogRecursively(2)
VM1860:6 2is even
VM1860:10 1is odd
undefined


function  laugh(n){
    var string=""
    for (let i = 0; i <n; i++) {
        string=string+"ha"
    }
    return string
}


function  laugh(n){
    let string=""
    var i=0
   while ( i <n) {
       i++;
        string=string+"ha"
    }
    return string
}


function  laugh(n){
    if (n===0) {
        return ''
    }

    return laugh(n-1) +"ha"
}