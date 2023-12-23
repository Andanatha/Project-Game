let isCardVisible = false;

function more() {
    var kart = document.getElementById("kart");
    var mor = document.getElementById("mor");
    var itemsCard = document.getElementById("itemsCard");
    var judulCard = document.querySelector(".judul");

    var isCardVisible = window.getComputedStyle(kart).getPropertyValue("display") !== "none";
    
    if (isCardVisible) {
        kart.style.display = "none";
        itemsCard.style.display = "block";
        itemsCard.style.display = "flex";
    } else {
        judulCard.innerHTML = "Informasi";
        kart.style.display = "block"; 
        itemsCard.style.display = "none";
        itemsCard.style.display = "flex";
    }

    isCardVisible = !isCardVisible;

}
    