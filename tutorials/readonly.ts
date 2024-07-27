// setting a variable in read only mode

interface TestOne {
  readonly id: number

  name: string
}

const test: TestOne = {
  id: 123,
  name: 'hahahaha',
}

test.name = 'cart'
