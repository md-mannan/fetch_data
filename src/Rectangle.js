import Shape from './Shape'


export default class Rectangle extends Shape{
   
    constructor(height,width){
         super()
        this.height=height
        this.width=width
    }

    calculate(){
        return this.height*this.width
    }
    draw(){
        console.log('Drawing a Rectangle')
    }
}