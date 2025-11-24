let player = 0;//Determines the player. Even = P1, Odd = P2
let turn = 0; //Determines when I need to swap between players
let p1_score = 0; 
let p2_score = 0; 
let cards_list = []; //Keeps a memory of all the two cards collected

const notify_div = document.getElementById("notification");

/*class Card{
    constructor(image,visiblity){
        this.image = image;
        this.visiblity = visiblity
    }
}*/

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

    let len = positions.length;

    while(len != 0){
        let rand_index = Math.floor(Math.random() * len);
        len--;

        [positions[len], positions[rand_index]] = [positions[rand_index], positions[len]]
    }

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
        card.onclick = function(){flipCard(card)};
        card.style.backgroundImage = "url(resources/common/Cards/InactiveCard.png)";
        cards.appendChild(card);

    }   

}

function flipCard(card){ // note that this does not update any scores on the web page yeah.

    const id = card.id ;
    card.style.backgroundImage = `url(resources/common/Cards/${id}.png`;
    cards_list.push(card);

    if (turn % 2 == 1){

        const card_1 = cards_list[0];
        const card_2 = cards_list[1];

        if(card_1.id == card_2.id){
            if (player % 2 == 0){
                p1_score++;
            } 
            else{
                p2_score++;
            }
            card_1.onclick = function(){doesNothing()};
            card_2.onclick = function(){doesNothing()};


            if(p1_score + p2_score == 10){
                console.log(`DEBUG: player1 score${p1_score}`)
                console.log(`DEBUG: player2 score${p2_score}`)

                if(p1_score > p2_score){
                    let p1_wins = Number(sessionStorage.getItem("p1_wins"));
                    p1_wins++;

                    sessionStorage.setItem("p1_wins", p1_wins);
                }

                if(p1_score < p2_score){
                    let p2_wins = Number(sessionStorage.getItem("p2_wins"));
                    p2_wins++;

                    sessionStorage.setItem("p2_wins", p2_wins);
                }


            }
        }

        else{
            const delay = setTimeout(undoFlip, 1500, cards_list);
            console.log("switching turns")
            player++;
            const turn_text = document.getElementById("player_turn")

            if (player % 2 == 0){
                turn_text.textContent = "Player 1 turn"
            }
            else{
                turn_text.textContent = "Player 2 turn"
            }
        }


        cards_list = [];
    }
    turn++;
}

function undoFlip(cards_list){
    cards_list[0].style.backgroundImage = "url(resources/common/Cards/InactiveCard.png)";
    cards_list[1].style.backgroundImage = "url(resources/common/Cards/InactiveCard.png)";
}

function doesNothing(){//There has to be a better way to do this but this also kinda funny so like :P

}

/*
function createNotification(messageString, titleString = "Notification"){
    if(messageString){
        console.log("Wowies");
        console.log(notify_div);
        let title = document.getElementById("noti_title");
        let message = document.getElementById("noti_message");
        let reset_button = document.getElementById("noti_reset");
        let close_button = document.getElementById("noti_close");

        console.log(title);

        title.textContent = titleString;
        message.textContent = messageString;
        notify_div.style.opacity = 1;

        close_button.onclick = function(){notify_div.style.opacity = 0};
    }
}

createNotification("Hello", "World");
*/

function resetButton(){
    window.location.reload();
}