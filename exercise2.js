
//---EXERCISE 2(Constructor function variation)---------------------------------------------------
// function Circle (x,y,color,radius){
//     fShape.call(this,x,y,color)
//     this.radius=radius
//     Circle.pi=Math.PI
//     Circle.prototype.toString=()=>fShape.prototype.toString.call(this)+`${this.radius}`
//     Circle.prototype.getArea=()=>Circle.pi*(Math.pow(this.radius,2))
//     Circle.prototype.getPerimeter=()=>2*Circle.pi*this.radius
// }
//------------------------END----------------------------------------------------------------------



//---EXERCISE 2(Class syntax variation)------------------------------------------------------------
// class cShape {
//     constructor(x,y,color){
//         this.x=x
//         this.y=y
//         this.color=color
//     }

//     getDistance(){
//         return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
//     }
    
//     toString(){
//         return  `X=${this.x} Y=${this.y} Color=${this.color}`
//     }
// }

// class Circle extends cShape {
//     constructor(x,y,color,radius){
//         super(x,y,color),
//         this.radius=radius
//     }
 
//     static get pi(){
//         return Math.PI
//     } 
    
//     toString(){
//         return `Circle:`+ cShape.prototype.toString.call(this) + ` Radius:${this.radius}`
//     }

//     get getArea(){
//         return Circle.pi*(Math.pow(this.radius,2))
//     }

//     get getPerimeter(){
//         return 2*Circle.pi*this.radius
//     }
// }

// const myCircle=new Circle(0,0,"red",10)
// console.log(myCircle.toString())
// console.log(myCircle.getArea)
// console.log(myCircle.getPerimeter)
//-------------------------------------------------------------------END-----------------------------------------------------



