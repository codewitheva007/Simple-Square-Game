let s1 = document.getElementById("sq1");
s1.addEventListener("click", function(){
let r=Math.floor(Math.random()*100);
s1.innerHTML = `<h1>${r}</h1>`;
})

let s2 = document.getElementById("sq2");
let clr="green" ;
s2.addEventListener("click",function(){
    if (clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    }
    else if (clr=="red"){
        s2.style.backgroundColor="red";
        clr="blue";
    }
    else if (clr=="blue"){
        s2.style.backgroundColor="blue";
        clr="green";
    }
})

let s3 =document.getElementById("sq3");
s3.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    
})

let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    s1.style.backgroundColor="red";
    s2.style.backgroundColor="green";
    s3.style.backgroundColor="blue";
    
})
