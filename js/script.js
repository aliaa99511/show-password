



var btn=document.getElementById("btn");
var inputt=document.querySelector("input");


inputt.addEventListener("input",function(){
    btn.classList.remove("none");

})


btn.addEventListener("click",function(){

    var set=inputt.type;

    if(set==="password"){
        inputt.type="type";
    }else{
        inputt.type="password";
    }
    
})


