import { colors } from "."
export let randomColor:number = Math.floor(Math.random() * (6 - 0 + 1)) + 0
export let randomColor1:number = Math.floor(Math.random() * (6 - 0 + 1)) + 0
export let randomColor2:number = Math.floor(Math.random() * (6 - 0 + 1)) + 0
    /**
     * tworzenie prewie kulek
     */
export default class NextBalls{
    constructor() {
        this.coscos()
    }
    /**
     * tworzenie preview 3 kulek
     */
    private coscos() {
    const myBall = document.getElementById('ball')
    const myBall1 = document.getElementById('ball1')
    const myBall2 = document.getElementById('ball2')

    let ball = document.createElement('div')
    ball.style.backgroundColor = colors[randomColor]
    ball.style.width = '20px'
    ball.style.height = '20px'
    ball.style.borderRadius = '10px'
    ball.style.border = '1px solid black'

    let ball1 = document.createElement('div')
    ball1.style.backgroundColor = colors[randomColor1]
    ball1.style.width = '20px'
    ball1.style.height = '20px'
    ball1.style.borderRadius = '10px'
    ball1.style.marginLeft = '5px'
    ball1.style.border = '1px solid black'

    let ball2 = document.createElement('div')
    ball2.style.backgroundColor = colors[randomColor2]
    ball2.style.width = '20px'
    ball2.style.height = '20px'
    ball2.style.borderRadius = '10px'
    ball2.style.marginLeft = '5px'
    ball2.style.border = '1px solid black'

    myBall?.appendChild(ball)
    myBall1?.appendChild(ball1)
    myBall2?.appendChild(ball2)
    }
}