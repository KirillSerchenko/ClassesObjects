//---EXERCISE1(fShape return object(variation 1))-----------------------------------------
// function fShape(x=0,y=0,color="black"){
//     this.x=x
//     this.y=y
//     this.color=color

//      return {
//      getDistance:()=>Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),
//      toString:()=>`X=${this.x}Y=${this.y}Color=${this.color}`
//     }
// }
//--------------------END-----------------------------------------------------------------



//---EXERCISE1(Add properties with prototype(variation 2))-------------------------------- 
//  function fShape(x=0,y=0,color="black"){
//      this.x=x
//      this.y=y
//      this.color=color
//      fShape.prototype.getDistance=()=>Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
//      fShape.prototype.toString=()=>`X=${this.x}Y=${this.y}Color=${this.color}`
//  }
//-----------------------------------------END--------------------------------------------



//---EXERCISE1(Static Methods(variation 3))-----------------------------------------------
// function fShape(x=0,y=0,color="black"){
//      this.x=x
//      this.y=y
//      this.color=color
//      fShape.getDistance=()=>Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
//      fShape.toString=()=>`X=${this.x}Y=${this.y}Color=${this.color}`
//}
//------------------END--------------------------------------------------------------------



//---EXERCISE1(Class Method(variation 4))--------------------------------------------------
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
//       return  `X=${this.x} Y=${this.y} Color=${this.color}`
//     }
// }
//--------------END-------------------------------------------------------------------------

