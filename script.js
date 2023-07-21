let orlink=document.getElementById("olink");
let shlink=document.getElementById("slink");
let shorten=document.getElementById("shorten");
let copy=document.getElementById("copy");

shorten.addEventListener("click",()=>{
    let url= orlink.value;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp)=>resp.json())
    .then((value)=>{
        shlink.value=value.result.short_link;
    })
    .catch((error)=>{
        shlink.value="error";
    });
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(shlink.value);
    copy.innerHTML="copied";
    setTimeout(()=>{
    copy.innerHTML="copy"},1000);
});