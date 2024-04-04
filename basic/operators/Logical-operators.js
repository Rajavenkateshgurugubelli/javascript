// the logical operators in operated using the logic gates principales like and(&&),or(||),not(!)


//1.Logical AND
console.log('AND',true&&false) //false
console.log('AND',10==20 && 20==33) //false
console.log('AND',true&&true) // true
console.log('AND',false&&false) //false
console.log('AND',0 && 1) //0
console.log('AND',1 && 1) //1
console.log('AND',1 &&'a') //a

//2.Logical OR
console.log('OR',true||false) //true
console.log('OR',10==20 || 20==33) //false
console.log('OR',true||true) // true
console.log('OR',false||false) //false
console.log('OR',0 || 1) //1
console.log('OR',1 || 1) //1
console.log('OR',1 ||'a') //1

//3.Logical NOT

console.log('NOT',!(0))//true
console.log('NOT',!(1))//false
console.log('NOT',!(true))//false
console.log('NOT',!(false))//true
console.log('NOT',!(1==1))//false
console.log('NOT',!(10===20))//true