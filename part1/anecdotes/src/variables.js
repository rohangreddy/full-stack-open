// const is a variable that can no longer be change
// let is a normal variable

// const x = 1
// let y = 5

// console.log(x, y)

// y += 10
// console.log(x,y)

// y = 'sometext'

// console.log(x,y)
// x = 4

// Arrays
// const t = [1, -1, 3]
//t.push(5)

// Use concat instead of push to preserve the original array
// const t2 = t.concat(5)

// console.log(t2.length)
// console.log(t2[1])

// t2.forEach(value => {
//     console.log(value)
// })

// map

// const z = [1,2,3]
// const m1 = z.map(value => value * 2)
// console.log(m1)

// // Destructuring assignment
// const t = [1,2,3,4,5,6,7,8,9]
// const [first, second, ...rest] = t

// console.log(first)
// console.log(second)
// console.log(rest)


// Objects are like dicts in python

//Functions

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

// Single param exclude parens

const square = p => {
  console.log(p)
  return p * p
}

// Single expression get rid of brackets
const square = p => p * p

const result = sum(2,3)