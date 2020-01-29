
class Calci
{
    constructor()
    {
   
    }
    //a=[];  
     dis(val) 
    { 
        document.getElementById("result").value+=val 
        //document.getElementsByClassName("buttons").style.backgroundColor = "white";
    } 
    solve() 
    { 
        var x = document.getElementById("result").value; 
        var y = eval(x) ;
        //console.log(y)
        document.getElementById("result").value = y ;
        var string=String(y);
        obj.displayHist(x+"  ="+y);
       // a.push(x);


        //var ele=document.createElement("div");
        //var newvalue=a.map(function(item){
          //  ele.innerHTML=item+"="+eval(item)
            
            //document.getElementById("txt1").appendChild(ele)})
            //console.log(newvalue);
        
        //document.getElementById("1").innerHTML= x+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+y;
        
    } 

     clr() 
    { 
        document.getElementById("result").value = "" ;
    } 
    back()
    {
        var value=document.getElementById("result").value;
        document.getElementById("result").value=value.substr(0,value.length-1);
    }
    pow()
    {
        var value=document.getElementById("result").value;
        document.getElementById("result").value=Math.pow(value,2);
        
    }
    sqrt()
    {
        var value=document.getElementById("result").value;
        document.getElementById("result").value=Math.sqrt(value);   
    }
    
    displayHist(value)
    {
        var displayString=document.createElement("div")
        displayString.innerHTML=value;
        var element=document.getElementById("txt1");
        element.appendChild(displayString);
    }
}
obj=new Calci();
