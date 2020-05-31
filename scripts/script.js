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