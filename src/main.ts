import './main.scss'
import { Greeter } from './greeter'
// import './assets/images/Shojy-Cookie-bg.jpg'

let app = document.getElementById('app')

const g = new Greeter(app)
g.greet()
