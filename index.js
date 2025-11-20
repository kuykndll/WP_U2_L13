class Card{
    constructor(position){
        this.position = position
    }
}

function genCards(){
    if (sessionStorage.getItem("game_status") == null){
        console.log("true")
        sessionStorage.setItem("game_status","true")
    }
    else{
        console.log("game is being played")
    }

}