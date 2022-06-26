import { colors } from "."
/**
 * dekorator dla zmiany koloru tla, moze nie dzialac
 */
export default class BacColor{
    num : number
    constructor(a: number){
        this.num = a
    }
    cos():string{
        return colors[this.num]
    }
}