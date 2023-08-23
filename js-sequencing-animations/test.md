---

What they didn't tell you about JS Promise
If you think you know JS Promise, try solving this MDN Sequencing Animation challenge to animate the 3 Alices images. The catch here is not to rely on setTimeOut to write your code in synchronous order. You must use either Promise, or Async Await.
If you are like me, this challenge keeps me puzzling for hours. Even after looking at the provided solutions, I was still left wondering - why didn't my methods work? Eventually I resolved my own questions. During that arduous process to wrap my mind about the topic of creating and using Promise, I managed to learn a few key intricacies about JS Promise I wish the documentation or those Youtube tutorials have told me earlier.
TLDR; here are what I learned
1. Promise chaining with `.then` requires that the previous then return a Promise
2. Async Await requires a Promise to work
3. Promise could be resolved without being fulfilled or rejected
4. Promise and callback function by itself does not provide any guarantee that the previous statement has finished executing before the next line executes
5. Promise could be resolved without being fulfilled or rejected
6. Promise is started as soon as it is defined
Getting familiar with the environment
const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");
Our goal is to animate alice1, then alice2, then alice3 in order.

---

The first solution with Promise chaining
This solution rely on Promise chaining. The key insight here is that we can call `.finished` after `animate`, which will return a Promise that we could use to chain on each other
alice1.animate(aliceTumbling, aliceTiming).finished
.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
.then(() => alice3.animate(aliceTumbling, aliceTiming));
This works alright and produces our desired effect.
Thought exercise with Promise chaining, why doesn't this work with bracket?
Now a thought exercise, if we add brackets `{}` around the arrow functions in the second Promise on the second line, will it still work, and why? Like this
alice1.animate(aliceTumbling, aliceTiming).finished
.then(() => { alice2.animate(aliceTumbling, aliceTiming).finished } )
.then(() => alice3.animate(aliceTumbling, aliceTiming));
It won't work. You will see that alice3 will not wait for alice2 to finish. 
Why?
This is a JavaScript trivial, not specific to Promise. When we use a bracket, the function will return `undefined` unless we use a specfic return statement inside that bracket. The return is implicit when we don't use bracket.
const a = () => 3;
// return 3

/* the above is equivalent with: */
const b = () => {return 3;}
// return 3

/* they are not the same if we use bracket and omit return */
const c = () => {3;}
// return undefined
Back to our alice example. When we use bracket without a return statement, that second Promise on the second line is thrown away, and the function return undefined. Hence the third line `.then` has nothing to bind on. That's why alice3 didn't wait on alice2 to start executing!
💡 *the key takeaways here are:*
1. *when using bracket with arrow function, function returns undefined unless using an explicit return statement*
2. *Promise chaining with then requires that the previous then return a Promise*

---

Nested promise implementation
Here we use thens but in a nested manner, like this
alice1.animate(aliceTumbling, aliceTiming).finished
.then(() => {alice2.animate(aliceTumbling, aliceTiming).finished.
   then(() => {alice3.animate(aliceTumbling, aliceTiming)})});
You see that the second then is called inside alice2.animate(…).finished promise directly.
Does this work?
Notice here are using brackets inside then, WITHOUT a return statement.
Yes this works! But why, didn't we just talk about using bracket in arrow function will result in an undefined being returned, and how it did not work for Promise chaining?
Well, in this solution we are no longer using Promise chaining, we are using nested Promise, in other words, Promise hell.
The first `.then` is called on `.finished` which returns a Promise itself, so that's why the first `.then` works. The second `.then` is called on the second `.finished` which also works.
In fact, it doesn't matter at all whether that inner function passed to then return anything. Whether we return or not there doesn't matter. That is this version below would also work (and slightly more readable)
alice1.animate(aliceTumbling, aliceTiming).finished
.then(() => alice2.animate(aliceTumbling, aliceTiming).finished.
   then(() => alice3.animate(aliceTumbling, aliceTiming)));

---

Async Await requires a Promise to work
We have another solution to our alices challenges using async await
async function animateAlices() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished;
  }
  catch (error) {
    console.log("error happened ", error)
  }
}
animateAlices();

If you are not familiar with async await, these statements allow us to run code as if they are synchronous. Each await statement will finish first before the next statement is executed.
The requirement for await to work is that the statement follow it must be a promise , which is what `.finished` return.
If we don't call `.finished`, the async await has no effect. The below code will not work as desired in our challenge and all 3 alices will be animated at once
// this doesn't work
async function animateAlices() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming);
    await alice2.animate(aliceTumbling, aliceTiming);
    await alice3.animate(aliceTumbling, aliceTiming);
  }
  catch (error) {
    console.log("error happened ", error)
  }
}
animateAlices();
💡 Key takeaway: async await rely on the statement following await being a Promise

---

Writing our own Promise
Up until now, we have relied on the convenience attribute `.finished` of animate which provide us with a Promise. Let's write our own Promise instead.
As reminder, this is the provided syntax for Promise in most documentation and tutorial
const p = new Promise((resolve, reject) => {
 // do something
 // resolve if successful
 resolve();
 // else reject
});
What is not super clear is what resolve, reject do to the big picture. Those are the questions that kept me scratching my head when trying to learn Promise. To answer this question, we need to see the big picture of how promise is used
aPromise
.then(aCallbackFunction) //executed when aPromise resolve()
.catch(anOtherFunction) //executed when 1 of the promise in this chain rejects
The above helps explain the purpose of resolve and reject. It is the way to signal for the callback functions in .then and .catch to be called.
So does that mean as long as the callback function `f` is passed to `.then()`, `f` would only be executed when the action inside promise has completed??
That is where a lot of my confusion came from. Eventually, I realize the use of callback function do not provide any guarantee of order of completed execution.
One key terminology helps me reason through this logic….
… Promise could be resolved without being fulfilled or rejected
"Resolved" means the promise 's fate has been assigned to something outside of its own control (funny how this sounds like a movie…)
To provide a more concrete example, let's go back to our alices challenge, and attempt to write our own promise
const alice1AnimatePromise = new Promise((resolve) => {
  alice1.animate(aliceTumbling, aliceTiming); // line 2
  resolve()                                   // line 3
});

alice1AnimatePromise.then(() => alice2.animate(aliceTumbling, aliceTiming)); //line 5
Would this work?
We have a promise which resolves after calling alice1 to animate, we then chain it with alice2 to animate.
Sadly, it doesn't work. The two alices will animate at the same time!!
A Promise provide NO guarantee that `resolve()` on line 3 would be executed after the previous animate on line 2 has finished executing.
How we read this code above is:
- `alice1.animate` on line 2 is called
- `resolve()` on line 3 is called immediately after
- the function inside `then` on line 5 is called immediately after that because the promise has ***resolved***
- alice2.animate is called
💡 `resolve()` just gives us a way to control when the Promise return. By itself, `resolve` provides no guarantee that the previous statement has been fulfilled

---

A working Promise: we need to control when resolve() is called!
To make our promise work (without relying on animate.finished) , we need to make sure resolve takes as long as the animate. This is one way - use setTimeout
const p1 = new Promise((resolve) => {
  alice1.animate(aliceTumbling, aliceTiming);
  setTimeout(() => {
    resolve()
  }, 2000);
});

p1.then(
  () =>
  alice2.animate(aliceTumbling, aliceTiming);
); 
Alright, that works for 2 alices. To make it work with the third alices, we need to nest another Promise inside `.then` of p1, like this:
const p1 = new Promise((resolve) => {
  alice1.animate(aliceTumbling, aliceTiming);
  setTimeout(() => {
    resolve()
  }, 2000);
});

p1.then(
  () =>
    new Promise((resolve) => {
      alice2.animate(aliceTumbling, aliceTiming);
      setTimeout(() => {
        resolve()
      }, 2000);
    })
  ).then(
    () => {
      alice3.animate(aliceTumbling, aliceTiming);
    }
  );
Promise is started as soon as it is defined
The is the true Promise hell, and Callback hell at the same time. It's hard to read.
Can we put the second Promise into its own variable to improve readability?
const p1 = new Promise((resolve) => {
  alice1.animate(aliceTumbling, aliceTiming);
  setTimeout(() => {
    resolve()
  }, 2000);
});

const p2 = new Promise((resolve) => {
  alice2.animate(aliceTumbling, aliceTiming);
  setTimeout(() => {
    resolve()
  }, 2000);
});

p1.then(
  () => p2
  ).then(
    () => {
      alice3.animate(aliceTumbling, aliceTiming);
    }
  );
Much more readable, right? Would this work?
Sadly, no :')
When we construct a Promise, statements get executed immediately without us having to invoke it. This Stackoverflow thread has more discussion. An example to illustrate this point:
let asyncTaskCompleted = true

const executorFunction = (resolve, reject) => {
  console.log("This line will be printed as soon as we declare the promise");
  if (asyncTaskCompleted) {
    resolve("Pass resolved Value here");
  } else {
    reject("Pass reject reason here");
  }

}

const myPromise = new Promise(executorFunction)
Notice that we never invoke myPromise, but you will see *"This line will be printed as soon as we declare the promise"* printed as soon as we declare the promise.
Since promise is executed as soon as we declare them, we can't declare a promise and store as a variable for use letter. This explains why the previous "simplification" attempt wouldn't work.

---

Summary
Here is what we learned about asynchronous functions
1. Promise chaining with `.then` requires that the previous then return a Promise
2. Async Await requires a Promise to work
3. Promise could be resolved without being fulfilled or rejected
4. Promise and callback function by itself does not provide any guarantee that the previous statement has finished executing before the next line executes
5. Promise could be resolved without being fulfilled or rejected
6. Promise is started as soon as it is defined
Most of the magic is in deciding when to call `.resolve()`. Most often in tutorials on Promise, the implementation of Promise, and when the `resolve()` statement has been abstrated away through a provided promise (like fetch API)
- -
👉 You can find the code for this blog post here
🙏 Please comment if you have ideas to clarify this concept further.*