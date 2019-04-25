import { Greeter } from './greeter'

describe('Greeter', () => {
  it('should greet', () => {
    let elem = document.createElement('div')
    const greeter = new Greeter(elem)

    greeter.greet()

    expect(elem.hasChildNodes).toBeTruthy
  })
})
