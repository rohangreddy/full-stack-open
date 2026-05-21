// constant; variable can no longer be changed
const x = 1
// variable
let y = 5

console.log(x,y) //logs 1,5

y +=10
console.log(x,y) //logs 1,15
y = 'sometext'
console.log(x,y) // logs 1, sometext
// x = 4 // error


// Arrays
// const ensures immutability of the reference, but not the data the reference points to
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // logs 4
console.log(t[1]) // logs -1

// receives a function defined using arrow syntac as a parameter
t.forEach(value => {
    console.log(value)
})

//rather than t.push, react prefers concat, which creates a new array with added item. Ensuring original array is unchanged
const t2 = t.concat(5)

// map

const m1 = t.map(value => value * 2)
console.log(m1) // [2, -2, 6, 10]

// Destructuring assignment

const t3 = [1,2,3,4,5]
const [first, second, ...rest] = t
console.log(first,second)
console.log(rest)


// Objects - few ways to define

// Object literal

const obj1 = {
    name: 'rohan',
    age: 35
}

console.log(obj1.name)
obj1['address'] = 'NYC'
console.log(obj1.address)


// Functions


// Arrow function

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1,5)
console.log(result)

// Single variable

const sum2 = p1 => {
    return p1
}

console.log(sum2(5))

// one expression

const sum3 = (p1,p2) => p1 * p2
console.log(sum3(5,7))