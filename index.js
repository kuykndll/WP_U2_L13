class Card{
    constructor(image,visiblity){
        this.image = image;
        this.visiblity = visiblity
    }
}

if (sessionStorage.getItem("p1_wins") == null){ // this could be moved into genCards. all it does it set up the scores when first loading in
    sessionStorage.setItem("p1_wins", 0);
    sessionStorage.setItem("p2_wins", 0);
}

function genCards(){

        console.log("true");
        sessionStorage.setItem("game_status","true");
        const positions = [];

        for (let i = 0; i < 20; i++){
            positions[i] = i;
        }

        let x = positions.length

        while(x != 0){
            let rand_index = Math.floor(Math.random() * x);
            x--;

            [positions[x], positions[rand_index]] = [positions[rand_index], positions[x]]
        }
        console.log(positions)
        for (let g = 0; g < 20; g++){
            let randomNumber = positions.pop()
            let pair = Math.floor(g / 2);

            sessionStorage.setItem(randomNumber, `image${pair}`)
        }

        const cards = document.getElementById("cards");

        for (let j = 0; j < 20; j++){
            const image = sessionStorage.getItem(j);
            const card = document.createElement("div");
            card.className = "card";
            card.id = image;
            console.log(card.id);
            card.onclick = function(){flipCard(card)};
            card.style.backgroundImage = "url(resources/common/Cards/InactiveCard.png)";
            cards.appendChild(card);

        }   

}

function flipCard(card){
    const id = card.id 
    card.style.backgroundImage = `url(resources/common/Cards/${id}.png`
}