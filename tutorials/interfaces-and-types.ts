// defining objects and types

// personalize type on an object
interface UserInterface {
  id: number
  name: string
  age?: number // since there is question mark here (part 1)
  greet(message: string): void // a function
}

const User: UserInterface = {
  id: 2,
  name: 'wowowin',
  age: 22, // this attribute can be empty (part 2)
  greet(message) {
    console.log(message)
  },
}
