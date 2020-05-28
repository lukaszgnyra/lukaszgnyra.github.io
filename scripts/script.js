function ukryj() {
    const card3 = document.querySelector(".card3");
    card3.setAttribute('style','opacity:0.2');
    console.log("dzuaał");
    document.querySelector(".overlay3").setAttribute('style','opacity:1')
}; 
function pokaz() {
    const card3 = document.querySelector(".card3");
    card3.setAttribute('style','opacity:1')
    console.log("kupa")
    document.querySelector(".overlay3").setAttribute('style','opacity:0')
}; 
