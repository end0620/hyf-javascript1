let v1 = 4
let v2 = "four"
let v3 = true
let v4 = ["hi", "good bye"]

variables = [v1, v2, v3, v4]

console.log('The value of my variable v1 is: ' + v1)
console.log('The value of my variable v2 is: ' + v2)
console.log('The value of my variable v3 is: ' + v3)
console.log('The value of my variable v4 is: ' + v4)

console.log('The type of my variable v1 will be: Number')   
console.log('The type of my variable v1 is: ' + typeof(v1))
console.log('The type of my variable v2 will be: String')  
console.log('The type of my variable v2 is: ' + typeof(v2))
console.log('The type of my variable v3 will be: Boolean')
console.log('The type of my variable v3 is: ' + typeof(v3))
console.log('The type of my variable v4 will be: Object')  
console.log('The type of my variable v4 is: ' + typeof(v4))

for(i = 0; i < 4; ++i)
    for(j = i+1; j < 4; ++j)
        if(typeof(variables[i])!== typeof(variables[j]))
            console.log('the type of my variables v'+(i+1)+' and v'+(j + 1) +' are not the same.')
        


