(function (){
    "use strict"
    let colors =['red','blue','green','yellow',"peachpuff", "mintcream", "slateblue", 
    "khaki", "olivedrab","burlywood", "lightsalmon", "coral", 
    "hotpink", "lemonchiffon", "aliceblue", "lightgrey",      
    "mediumturquoise", "darkseagreen", "peru", "tomato",      
    "orchid","papayawhip"]
    let index=0
    setInterval(()=>{
        index=(index+1)%colors.length
        document.getElementById('time').innerHTML = `<p
        style="width:70%;
        text-align:center;
        color:${colors[index]};
        margin:10% auto;
        border:3px solid black;
        padding:5%;
        font-size:4em;
        text-shadow:7px 8px 9px black;
        box-shadow: -1px -1px 35px 35px ${colors[index]};
        ">${window.globals.getCurrentTime()}</p>`
    },1000)
    
})()