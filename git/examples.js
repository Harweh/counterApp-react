// let x = 'Hello';

// let y = 'Emmanuel';

// let z = 10

// console.log(x+y+z);


// let x = 10
// let y = 15 

// //conditional
// if (x > y) {
//     console.log(`The sum of ${x} and ${y} is ${x+y}`);
// }
// else {
//     console.log('Fallback');
// }



// loop has 3 Things 
// 1. startinng point
// 2. Ending point
// 3. step, how many steps it takes to reach there 
// for (let i = 0; i<10; i=i+1){
//     console.log(i);
// }

//FOR Each LOOP
const arr = [10, 20, 33, 400, 5000, 6, 77, 800, 9]
//for each one of the index in the array
//For each is the elemrnt in the array // array is the breacket

// const newarr = arr.forEach((e, iex) => {
//     console.log(e, iex);
//     return e
    
// })

// console.log(newarr);


//.map
// const newarr = arr.map((e, idx) =>{
//     return e*2
// })
// console.log(newarr);


//.filte, basically this example is to filter odd number from the even number
// const newarr = arr.filter((e) => {
//     return e%2==0
// })
// console.log(newarr);



// const x = () => {
//     console.log('Helloooooo');
//     return 1
//     console.log('hey');
    
// }

// let y = x()


// console.log(y);




//Hoisting, is callling before actual declearatoin
//koiisting doesnt accept const and let, year E6

// x()

// function x() {
//     console.log("Hello World");   
// }

// console.log(x);

// var x = 10;

// console.log(x);




// callbacks

// const greetUser = (name, callback) => {
//     console.log("Hello", name , '!');
//     callback()
// }

// const sayGoodBye = () => {
//     console.log('Good Bye');
    
// }

// greetUser('Emmy', sayGoodBye)

// setTimeout(() => {
//     sayGoodBye
// }, 2000);

// setTimeout(sayGoodBye,2000)


// const first = (callback) => {
//     setTimeout(() => {
//         console.log('first task done');
//         callback()
        
//     }, 1000);
// }

// const second  = (callback) => {

// }

// const third = ((callback) => {
    
// })

// function fourth (callback) {
//     setTimeout(() => {
//         console.log('this  is sub first');
//         callback()
//     }, 100);
// }


// simpler callback way
// function first(callback) {
//     setTimeout(() => {
//         console.log('First task done');
//         callback()
//     }, 1000);
// }

function second(callback) {
      setTimeout(() => {
        console.log('Second task done');
        callback()
    }, 2000);
}

function third(callback) {
      setTimeout(() => {
        console.log('Third task done');
        callback()
    }, 1000);
}


first(() => {
    second(() => {
        third(() => {
            console.log('All tasks are done');
            
        })
    })
})

// this callback steps disorganise the timer 
// function first(callback) {
//     setTimeout(() => {
//         console.log('First task done');
//         callback()
//     }, 1000);
// }

// function second(callback) {
//       setTimeout(() => {
//         console.log('Second task done');
//         callback()
//     }, 2000);
// }

// function third(callback) {
//       setTimeout(() => {
//         console.log('Third task done');
//         callback()
//     }, 1000);
// }


// first()
// second()
// third()

