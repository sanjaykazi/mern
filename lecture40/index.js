console.log("Hello world")
console.log( 1 < 2 ? "sanjay" : 'kazi')
// logical operator
// logical operator with non-boolean
// 1. falsey value -> nan, null, undefined
// 2. truthy value -> anything that is not falsey
// short-circuiting 
console.log(false || true && true || 5)
// working only on forst condition later are ignored and this 
// behaviour is called short circuiting
// console.log("Loop starts...")
// for(let i = 1; i <=10; i++){
//     if(i == 4){
//         console.log("continueing the loop")
//         continue;
//     }
//     else if(i == 9){
//         console.log("Loop breaked...")
//         break;
//     }
//     else{
//         console.log(i)
//     }
// }
// let i = 1;
// while(i<6){
//     if(i == 3){
//         i++;
//         continue;
//     }
//     else if(i == 5){
//         break;
//     }
//     else{
//         console.log(i)
//     }
//     i++;
// }
//deep vs shallow copy
