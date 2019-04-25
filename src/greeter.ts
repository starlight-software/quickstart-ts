export class Greeter {
  constructor(private app: HTMLElement) {}

  greet(): void {
    this.app.innerHTML = `<h1>Hello World!</h1>`
  }
}
