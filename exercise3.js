
function excuteAll(obj){
    console.log('------------------OBJECT------------------')
    Object.keys(obj).map((element,index)=>{
        if(typeof(obj[element])==="function")
                (obj[element])()
        })
    console.log('---------------------END------------------')
}



const getMyComputer=(...args)=>{
    //According number of arguments i`m recognize which inctance create
    if(args.length === 5){
        var [ram,rom,cpu,price,guarantee] = args
    }

    if(args.length === 7){
        var [ram,rom,cpu,price,guarantee,mouse,screen] = args
    }

    if(args.length === 8){
        var [ram,rom,cpu,price,guarantee,chargeHours,batteryPrecent,touchScreen] = args
    }
    //Check validation of arguments
        try{
            if(ram < 4 || ram > 16 || !(typeof(ram)==="number"))
                throw new Error("WRONG RAM range must be number (4-16)!")
            if(rom < 200 || rom > 3000 || !(typeof(rom)==="number"))
                throw new Error("WRONG ROM range must be number (200-3000)!")
            if(price < 800 || price > 20000 || !(typeof(price)==="number"))
                throw new Error("WRONG Price range must be number (800-20000)!")
            if(guarantee < 0 || guarantee > 5 || !(typeof(guarantee)==="number"))
                throw new Error("WRONG Guarantee range must be number (0-5)!")
            if(mouse !== undefined)
                if(typeof(mouse)!=="boolean")
                    throw new Error("WRONG mouse must be boolean!")   
            if(screen !== undefined)
                if(screen < 11 || screen > 18 || !(typeof(screen)==="number"))
                    throw new Error("WRONG Screen range must be number (11-18)!")
            if(chargeHours !== undefined)
                if(chargeHours < 1 || chargeHours > 9 || !(typeof(chargeHours)==="number"))
                    throw new Error("WRONG chargeHours range must be number (1-9)!")   
            if(batteryPrecent !== undefined)
                if(batteryPrecent < 0 || batteryPrecent > 100 || !(typeof(batteryPrecent)==="number"))
                    throw new Error("WRONG battery precent range must be number (0-100)!")
            if(touchScreen !== undefined)
                if(typeof(touchScreen)!=="boolean")
                    throw new Error("WRONG touch screen must be boolean!")
        }
    //catch any error from try block and return function that returned undefined
    catch(e){
        console.log(e.message)
        return ()=>undefined
    }
    //Computer Class
    class Computer{
        
        constructor(ram,rom,cpu,price,guarantee){
            this._ram=ram,this._rom=rom,this._cpu=cpu,this._price=price,this._guarantee=guarantee    
        }

        static purchaseHeadphones(){console.log("Do you want purchase Headphones?")}

        static print(){console.log(`
RAM:${this.ram} , ROM:${this.rom} , CPU:${this.cpu} , PRICE:${this.price} , GUARANTEE:${this.guarantee}`)} 
        
        get ram(){
            return this._ram
        }

        get rom(){
            return this._rom
        }

        get cpu(){
            return this._cpu
        }

        get price(){
            return this._price
        }

        get guarantee(){
            return this._guarantee
        }

        set ram(newValue) {
            this._ram = newValue;   
        }

        set rom(newValue) {
            this._rom = newValue;   
        }

        set cpu(newValue) {
            this._cpu = newValue;   
        }

        set price(newValue) {
            this._price = newValue;   
        }

        set guarantee(newValue) {
            this._guarantee = newValue;  
        }


    }
//Pc class extends Computer
    class PC extends Computer{
            
            constructor(ram,rom,cpu,price,guarantee,mouse=null,screen=null){
                 super(ram,rom,cpu,price,guarantee)
                 this._mouse=mouse,this._screen=screen
                 this.purchasePcDesk=()=>console.log("Do you want purchase DESK?")
                 this.print=()=>{
                   Computer.print.call(this)
                    console.log(`, MOUSE:${this.mouse}, SCREEN:${this.screen}
`)
                 }
                    }

            get mouse(){
                 return this._mouse
            }
            
            set mouse(newValue){
                 this._mouse=newValue
            }
            
            get screen(){
                return this._screen
            }
            
            set screen(newValue){
                this._screen=newValue
            }

           
        }

        //Laptop class extends Computer
        class Laptop extends Computer{
    
            constructor(ram,rom,cpu,price,guarantee){
                 super(ram,rom,cpu,price,guarantee)
                 this._chargeHours=chargeHours,this._batteryPrecent=batteryPrecent,this._touchScreen=touchScreen
                 this.purchaseBag=()=>{
                    Computer.purchaseHeadphones()
                    console.log("Do you want purchase Bag?")
                }
                this.charge=()=>console.log("The laptop succefully charged!")    
                this.print=()=>{
                    Computer.print.call(this)
                    console.log(`,Hours:${this.chargeHours}H, Battery:${this.batteryPrecent}%,Touch Screen:${this.touchScreen}
`)  
                }
                }

            get chargeHours(){
                 return this._chargeHours
            }
            
            set chargeHours(newValue){
                 this._chargeHours=newValue
            }
            
            get batteryPrecent(){
                return this._batteryPrecent
            }
            
            set batteryPrecent(newValue){
                this._batteryPrecent=newValue
            }
            get touchScreen(){
                return this._touchScreen
            }
            
            set touchScreen(newValue){
                this._touchScreen=newValue
            }
    }
    
    return () => args.length === 7 ? new PC(ram,rom,cpu,price,guarantee,mouse,screen) 
                : args.length === 5 ? new Computer(ram,rom,cpu,price,guarantee)
                : new Laptop(ram,rom,cpu,price,guarantee,chargeHours,batteryPrecent,touchScreen)
}

//Run programm
const differentComputers = new Array(10)
for(let i=0;i<differentComputers.length;i++){
     i%2===0?differentComputers[i]= getMyComputer(4,200,"Intel",800,4,5,70,true)()
    :differentComputers[i]=getMyComputer(4,200,"Intel",800,4,true,15)()
}

differentComputers.map(cmp=>excuteAll(cmp))










