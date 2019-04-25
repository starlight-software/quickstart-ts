import './main.scss'
import { Greeter } from './greeter'

let app = document.getElementById('app')

const g = new Greeter(app)
g.greet()
