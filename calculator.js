
class Calci
{
    constructor()
    {
        
    }
     dis(val) 
    { 
        document.getElementById("result").value+=val 
    } 
    solve() 
    { 
        let x = document.getElementById("result").value 
        let y = eval(x) 
        document.getElementById("result").value = y 
    } 

     clr() 
    { 
        document.getElementById("result").value = "" 
    } 
}
obj=new Calci();
