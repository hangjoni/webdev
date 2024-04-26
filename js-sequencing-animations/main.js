const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1
//   .animate(aliceTumbling, aliceTiming)
//   .finished.then(() => {
//     alice2.animate(aliceTumbling, aliceTiming).finished;
//   })
//   .then(() => alice3.animate(aliceTumbling, aliceTiming));

/* 0. synchronous style implementation
 */
// alice1.animate(aliceTumbling, aliceTiming);
// setTimeout(() => {alice2.animate(aliceTumbling, aliceTiming)},2000);
// setTimeout(() => {alice3.animate(aliceTumbling, aliceTiming)}, 4000)

/* 1. Promise hell implementation 
the brackets is optional, see explanation below
*/
// alice1.animate(aliceTumbling, aliceTiming).finished
// .then(() => {alice2.animate(aliceTumbling, aliceTiming).finished.
//   then(() => {alice3.animate(aliceTumbling, aliceTiming)})});

// with this method, it doesn't matter whether we use brackets or not, because
// the nested then means we are not relying on the return value of the previous
// then
// the last animate could be used with or without finished because we
// don't need it to be a promise
// alice1.animate(aliceTumbling, aliceTiming).finished
// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished.
//   then(() => alice3.animate(aliceTumbling, aliceTiming).finished));

/* 2. Promise chain implementation 
the last .finished is optional 
*/

// alice1.animate(aliceTumbling, aliceTiming).finished
// .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
// .then(() => alice3.animate(aliceTumbling, aliceTiming));

/* 3. Using async / await with callback
 */
// const myFunc = async (callback) => {
//   await alice1.animate(aliceTumbling, aliceTiming).finished;
//   await alice2.animate(aliceTumbling, aliceTiming).finished;
//   callback();
// }

// myFunc(() => alice3.animate(aliceTumbling, aliceTiming));

/* 4. using async await purely
 */
// async function animateAlices() {
//   try {
//     await alice1.animate(aliceTumbling, aliceTiming).finished;
//     await alice2.animate(aliceTumbling, aliceTiming).finished;
//     await alice3.animate(aliceTumbling, aliceTiming).finished;
//   }
//   catch (error) {
//     console.log("error happened ", error)
//   }
// }
// animateAlices();

/* 5. the true Promise hell. 
Here we write our own promise instead of relying on .finished promise
we are using then to chain, so each statement has to be its own promise
we can't define the promise in advance because promise are executed as soon as they are defined =))
*/

// new Promise((resolve) => {
//   alice1.animate(aliceTumbling, aliceTiming);
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// }).then(
//   () =>
//     new Promise((resolve) => {
//       alice2.animate(aliceTumbling, aliceTiming);
//       setTimeout(() => {
//         resolve()
//       }, 2000);
//     })
//   ).then(
//     () => {
//       alice3.animate(aliceTumbling, aliceTiming);
//     }
//   );

/* 6 Promise hell with a slight modification 
defining first promise separately
note that the second alice cannot be declared in advance! (as it will be executed when declared!) 
*/

// const p1 = new Promise((resolve) => {
//   alice1.animate(aliceTumbling, aliceTiming);
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// });

// p1.then(
//   () =>
//     new Promise((resolve) => {
//       alice2.animate(aliceTumbling, aliceTiming);
//       setTimeout(() => {
//         resolve()
//       }, 2000);
//     })
//   ).then(
//     () => {
//       alice3.animate(aliceTumbling, aliceTiming);
//     }
//   );

/* 7. using .playState on the animation object to check if the animation is done
 */
// const p1 = new Promise((resolve) => {
//   const animate1 = alice1.animate(aliceTumbling, aliceTiming);
//   const interval1 = setInterval(() => {
//     if (animate1.playState == "finished") {
//       clearInterval(interval1);
//       resolve();
//     }
//   }, 200);
// });

// p1.then(
//   () =>
//     new Promise((resolve) => {
//       alice2.animate(aliceTumbling, aliceTiming);
//       setTimeout(() => {
//         resolve();
//       }, 2000);
//     })
// ).then(() => {
//   alice3.animate(aliceTumbling, aliceTiming);
// });

/* 8. */
const promiseMaker = (el) => {
  return new Promise((resolve) => {
    const ani = el.animate(aliceTumbling, aliceTiming);
    const inter = setInterval(() => {
      if (ani.playState == "finished") {
        clearInterval(inter);
        resolve();
      }
    }, 200);
  });
};
const p1 = promiseMaker(alice1);

p1.then(() => promiseMaker(alice2)).then(() =>
  alice3.animate(aliceTumbling, aliceTiming)
);

/* this wouldn't work as promise is executed as soon as they are defined
 */
// const p1 = new Promise((resolve) => {
//   alice1.animate(aliceTumbling, aliceTiming);
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// });

// const p2 = new Promise((resolve) => {
//   alice2.animate(aliceTumbling, aliceTiming);
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// });

// p1.then(
//   () => p2
//   ).then(
//     () => {
//       alice3.animate(aliceTumbling, aliceTiming);
//     }
//   );

/* this wouldn't work , not without using setTimeout or .finished in the promise 
because resolve is called immediately after alice1.animate is called without waiting for it to finishes
*/
// const alice1AnimatePromise = new Promise((resolve) => {
//   alice1.animate(aliceTumbling, aliceTiming);
//   resolve()
// });

// alice1AnimatePromise.then(() => alice2.animate(aliceTumbling, aliceTiming));

/* what happens if we use a callback function to call resolve? 
nope the below doesn't work
with callback-only we still guarantee that the callback is called after alice1Animate is finished
*/
// const alice1Animate = () => alice1.animate(aliceTumbling, aliceTiming);

// const animateCallback = (callback) => {
//   alice1Animate();
//   console.log("inside animateCallback", callback)
//   callback();
// }

// alice1AnimatePromise = new Promise((resolve) => {
//   animateCallback(resolve)
// });

// alice1AnimatePromise.then(() => alice2.animate(aliceTumbling, aliceTiming));
