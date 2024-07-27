// flexible reusble functions and classes for any types

class StorageContainer<T> {
  private contents: T[]

  constructor() {
    this.contents = []
  }

  addItem(item: T): void {
    this.contents.push(item)
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx]
  }
}

const usernames = new StorageContainer<string>()
usernames.addItem('cart')
usernames.addItem('wowow')
console.log(usernames.getItem(1))

const herocount = new StorageContainer<number>()
herocount.addItem(123)
herocount.addItem(34223)
console.log(usernames.getItem(1))
