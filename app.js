// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')  // old way
// .then((res) => res.json()).then((json) => {
// console.log(json)
// console.log('I should log after the data!');
// })


// async function exercise1(){
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no') // new way to fetch
//     const json = await res.json()
//     console.log(json)
//     console.log('I should log after the data!');
// }
// exercise1();


// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json)
//     console.log('I should be between the cats and dogs');               //old way
//     fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     .then((res) => res.json()).then((json) => {
//         console.log(json)
//         console.log('I should be last');
//     })
// })

// async function exercise2() {
//     console.log('I should be before the cats data');
//     const res1 = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')    //new way
//     const json1 = await res1.json()
//     console.log(json1)
//     console.log('I should be between the cats and dogs');
//     const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     const json2 = await res2.json()
//     console.log(json2)
//     console.log('I should be last');
// }
// exercise2();

//PROMISES

// const successfulPromise = new Promise(function(resolve, reject){ //in here you must invoke either resolve or reject
//     setTimeout(function(){
//         resolve(); 
//     }, 3000)
// })
// console.log(successfulPromise);


// const unsuccessfulPromise = new Promise(function(resolve, reject){ //in here you must invoke either resolve or reject
//     setTimeout(reject, 6000)     
// })
// console.log(unsuccessfulPromise);

// setTimeout( function(){
//     console.log(unsuccessfulPromise);
//     console.log(successfulPromise);
// },7000);

const conditionalPromise = new Promise(function(resolve, reject){
    const num = 3;
    if (num < 4)
    setTimeout(reject,3000)
    else if (num > 4)
    resolve();    
})

console.log(conditionalPromise);

// const conditionalPromise = (condition) => new Promise(function(resolve, reject) {
//     if (condition % 2 === 0) {
//         resolve();
//     } else {
//         reject();
//     }
// })
// console.log(conditionalPromise(4), 'c');
// console.log(conditionalPromise(5), 'c');


//STATUST CODES
//2XX - SUCCESS
//3XX - REDIRECT
//4XX - CLIENT MESSED UP
//5XX - SERVER MESSED UP


function myFetch(url) {
    const myPromise = new Promise(function(resolve, reject){
        const webData = somehowGetWebData()
        if (webData.statusCode < 200) {
            resolve(webData)
        } else if (400 <= webData.statusCode <= 599) {
            reject('this is bad data: '+ webData.statusCode)
        }
    })
    return myPromise
}

myFetch('url').then(...).catch()    //only can be used if items are in resolve and reject