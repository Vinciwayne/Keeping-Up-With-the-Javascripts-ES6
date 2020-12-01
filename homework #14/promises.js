'use strict';


function calculateNumber(num) {

    if (num < 1 && num > 1000) { return ; }

  function helper_closestPrime(num) {

    for (let i = num; i >= 2; i--) {
      
      let isPrime = true;
      let limit = Math.round(Math.sqrt(i));
        for (let mod = 2; mod <= limit; mod++) {
          
          if (i % mod === 0) {
            isPrime = false;
            break;
          }
        }
    
        if (isPrime) { return i; }
    }
      
  }

  const startTime = new Date().getTime();
  let stopTime = 0, square = 0, root = 0;
  console.log(`Started calculate at ${startTime} ms.`);

  square = Math.pow(num, 2);
  console.log(`Square from ${num} = ${square}.`);

  root = new Promise((resolve, reject) => {
    setTimeout(() => { resolve( Math.round(
      Math.sqrt(num)*1000)/1000 ); }
    );
  });

  Promise.resolve(root).then(root => 
  console.log(`Square root from ${num} = ${root}.`));

  console.log(`Closest prime (lower to ${num}) is ${helper_closestPrime(num)}.`);

  stopTime = new Date().getTime();
  console.log(`Stop time = ${stopTime}.`);
  console.log(`Total time elapsed = ${(stopTime-startTime)} ms.`);
}

calculateNumber(100);
console.log('---');
calculateNumber(10);




///EZEBUIRO UCHECHUKWU VINCENT 