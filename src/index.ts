import Table from "./table";
import NextBalls from "./nextBalls";
import BacColor from "./backColor";
export const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'pink', 'orange']


/**
 * dodanie na strone glowna previe i wygenerowanej tabelki
 */
let nextbalssss = new NextBalls
let table = new Table

/**
 * losowanie randomowego koloru tla moze nie dzialac
 */
let rdcol : number = Math.floor(Math.random() * (6 - 0 + 1)) + 0
let kolorTla = new BacColor(rdcol)
console.log(kolorTla.cos())
