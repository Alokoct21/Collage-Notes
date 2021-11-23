let button = document.querySelector("nav .menu ul li a");
button.addEventListener("click",()=>{
    const span = document.querySelector("nav .menu ul li  a span");
    button.style.paddingRight = "10px";
    span.style.visibility = "visible";
    setTimeout(()=>{
        span.style.visibility="hidden";
        button.style.transition="1s ease-in-out";
        button.style.paddingRight="0px";
    },3000);
})