class Card{
    constructor(position){
        this.position = position;
    }
}

if (sessionStorage.getItem("p1_wins") == null){ // this could be moved into genCards. all it does it set up the scores when first loading in
    sessionStorage.setItem("p1_wins", 0);
    sessionStorage.setItem("p2_wins", 0);
}

function genCards(){
    if (sessionStorage.getItem("game_status") == null){

        console.log("true");
        sessionStorage.setItem("game_status","true");
        const positions = [];

        for (let i = 1; i <= 20; i++){
            positions.append(i);
        }

        for (let g = 1; g <= 20; g++){

        }
    }

    else{
        console.log("game is being played");
    }

}
