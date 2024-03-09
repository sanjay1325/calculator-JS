
const display=document.getElementById("display");
function send(input){
display.value+=input;
}
function clearnum (){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}