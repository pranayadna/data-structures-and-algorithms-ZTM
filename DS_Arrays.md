# ZERO TO MASTERY - Master the Coding Interview: Data Structure + Algorithms

## --- DATA STRUCTURES: ARRAYS ---

## **1. Arrays Introduction**

---

- **Arrays** which sometimes called "List", organizes items sequentially(meaning: one after another in memory)
- **Arrays** stored in contiguous memory(meaning: in order), have smallest footprint of any data structure
- **Arrays** is object.

```js
const strings = ['a', 'b', 'c', 'd'];
```

- We store memory with 32-bit system, that we have 4 shelves
- So 4 items times 4 shelves, 4x4 = 16 bytes of storage
- What we're doing here is simply storing "a, b, c, d" in sequential order in RAM
- So the computer now know where to find these items
- Now we try to grab the third item from where the array is stored in memory

```js
console.log(strings[2]);
```

### **--- Some of operations on the array ---**

```js
// Push -> O(1) operation, because all we're doing is adding whatever item we want at the end without looping through anything.
strings.push('e'); //

// Pop -> O(1)
strings.pop();
strings.pop();

// Unshift(add item at the beginning of the array) -> O(n), how is it works?
['a', 'b', 'c', 'd']
0 1 2 3

['x', 'a', 'b', 'c', 'd']
0 1 2 3 // index is shifted

['x', 'a', 'b', 'c', 'd']
0 1 2 3 4 // after shifted, iterate and add 1

strings.unshift('x');

// Splice -> O(n), initially O(n/2)
strings.splice(2, 0, 'alien');

console.log(strings);
```

## **2. Static VS Dynamic Arrays**

---

- **Static**, has limitation is that they are fixed in size, meaning we need to SPECIFY the number of elements our array will hold ahead of time. Ex: C++
- **Dynamic**, allow us to copy and rebuild an array at new location which with more memory if we wanted more memory. Ex: Javascript, Python, JAVA
- Push operation in dynamic array can become O(n) from O(1), because when we adding item into dynamic array there is going on a process underneath the hood to loop over that item, copy them, and move it to different location with designated memory space (it usually doubles the space)

## **OPTIONAL : Class In Javascript**

---

### **--- Reference Type ---**

```js
// Reference type -> non-primitive type, are not defined by the programming languages(meaning: they created by the programmer )

console.log([] === []);
console.log([1] === [1]);

const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);
```

### **--- Context vs Scope ---**

```js
- Scope is created when it sees curly brackets
- Context tells you where we are within the object
  \*/

function b() { // As soon as we create function, there is a new scope that created
let a = 4;
return a;
}

console.log(b())
console.log(this)
console.log(this === window)
console.log(this.alert('hello'))
console.log(window.alert('hello'))
console.log(alert('hello'))

function a() {
console.log(this);
}

console.log(a());
console.log(window.a());

// In order to create a new value for this, we have to do something like below

const object4 = {
    a: function() {
        console.log(this);
    }
}

console.log(object4.a());
```

### **--- Instantiation ---**

```js
// Instantiation, is when you make a copy of an object and reuse the code

class Player {
  constructor(name, type) {
    console.log('player', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi My name is ${this.name}, I'm a/an ${this.type}`);
  }
}

class Agent extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('agent', this);
  }

  play() {
    console.log(`Hello I'm a ${this.type}`);
  }
}

const agent1 = new Agent('Bobby', 'Initiator');
const agent2 = new Agent('John', 'Controller');

// console.log()
agent1.introduce();
console.log(agent1.play());
```

## **3. Implementing An Array**

---

```js
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const getItem = this.data[index];
    return getItem;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deleteItem = this.data[index];
    this.shiftItem(index);
    return deleteItem;
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.push('!'));
// console.log(newArray.pop());
console.log(newArray.delete(0));
console.log(newArray.delete(1));
console.log(newArray.get(0));
console.log(newArray.push('are'));
console.log(newArray.push('nice'));
console.log(newArray);
```

## **EXERCISE: Reverse A String**

---

```js
function reverse(str) {
const arrayStr = str.split('');
const length = arrayStr.length;

    last = length - 1;

    for(let start = 0; start < length; start++){
        arrayStr[start] = arrayStr[last];
        last--;
    }

    const stringArray = arrayStr.join('');

    return stringArray;

}

const string = '1 2 3 4 5 6 7 8'

console.log(reverse(string));

/_
H i
0 1
i i
_/
```
