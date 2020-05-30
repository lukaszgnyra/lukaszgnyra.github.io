// function ukryj() {
//     const card3 = document.querySelector(".card3");
//     card3.setAttribute('style','opacity:0.2');
//     console.log("dzuaał");
//     document.querySelector(".overlay3").setAttribute('style','opacity:1')
// }; 
// function pokaz() {
//     const card3 = document.querySelector(".card3");
//     card3.setAttribute('style','opacity:1')
//     console.log("kupa")
//     document.querySelector(".overlay3").setAttribute('style','opacity:0')
// }; 

// function ukryj() {
    
//     let cards = document.getElementsByClassName("card3");
//     for(i=0; i < cards.length; i++ ){
//         // console.log(cards[i])
//         // console.log(cards[i]);
//         // console.log(i);
//         // let card = cards[i];
//         if(i==0){
//             console.log(cards[i]);
//         }
//         else if(i==1){
//             console.log(cards[i])
//         }
        
//         // card.setAttribute('style', 'opacity:0.2');
//         // console.log(card);
//     }
// }
// function pokaz(){
//     const cards = document.getElementsByClassName("card3");
//     // console.log(cards);
// }




// let cards = document.getElementsByClassName("card3");

// function show(){
//     console.log(cards);
//     for (i=0; i < cards.length; i++){
//         let card = cards.item(i);
//         console.log(card);
//     }

// }

// cards.item(i)

// var cards = document.querySelectorAll(".cards3");

// var cardsArray = [...document.querySelectorAll(".card3")];

// var card = document.querySelector(".card");

// card.a

// let cardziki = [...document.getElementsByClassName("card3")];

let cards = document.getElementsByClassName("overlay");
let i;


for (i=0; i < cards.length; i++){
    cards[i].addEventListener("mouseenter", function(){
        
        this.style.opacity="1";
        this.style.backgroundColor="rgba(150,150,150,.8)";
        
        
        
    });
    cards[i].addEventListener("mouseleave", function(){
        this.style.opacity="0";
    });
   

}