const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerHTML="";
        } else if(item.id=="backspace"){
            let  string = display.innerHTML.toString();
            display.innerHTML=string.substr(0,string.length-1);
        } else if (display.innerHTML != "" && item.id=="igual"){
            display.innerHTML = eval(display.innerHTML);
        } else if (display.innerHTML == "" && item.id=="igual"){
            display.innerHTML = "👀!";
            setTimeout(()=> (display.innerHTML = ""), 2000);
        } else{
            display.innerHTML+=item.id;
        }
    }
})
