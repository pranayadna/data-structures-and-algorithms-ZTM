# Big-O

## **1. Section Overview**

---

Big-O official term is **Big-O Asymptomatic Analysis**. Big-O can tell us how well problem is solved.

## **2. What Is Good Code?**

---

- Readable

        is your code just generally clean, can others understand your code.

- Scalable

        Big O notation is what allow us to measure this idea of scalable code that can scale.

```js
const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!!!');
    }
  }
}

findNemo(nemo);
```

## **3. Big-O and Scalability**

---

_As our input grew, our function become slower and slower._

_Our runtime (how long it takes to run certain problem through a function) increased._

There is many factors that can influence function runtime.

```js
const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10000).fill('nemo');

// As our input grew, our function become slower and slower
function findNemo(array) {
  let t0 = performance.now(); // for measuring code performance
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!!!');
    }
  }
  let t1 = performance.now(); // for measuring code performance
  console.log('Call to find nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(large);
```

**Big-O** notation is the language we use for talking about how long algorithm take to run. Using Big-O we can compare different algorithm and which one is better than the other when it comes to scale regardless of our computer differences.

    Important note: When we talk about Big-O and scalability of code, we simply mean when we grow bigger and bigger with input, how much does the algorithm slow down. The slower it slows down the better it is.

![Big-O Complexity Chart](/others/img/bigO-chart.jpeg)
