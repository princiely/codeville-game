function checkIfGameIsWon(first,second,third){
    if(display.textContent.includes("won the game")){
        return
    }


    if (
        buttons[first].textContent=== "X" &&
        buttons[second].textContent=== "X" &&
        buttons[third].textContent=== "X"
    ){
        disableButtonWhenGameIsWon('player 1')
        return;
    } else if (
        buttons[first].textContent=== "O" &&
        buttons[second].textContent=== "O" &&
        buttons[third].textContent=== "O" 
    ){
        disableButtonWhenGameIsWon('player 2')

        return
    } else {
        button.textContent="checkDraw";
        display.textContent="it is a draw"
        checkStatus();
    }

}



function checkStatus(){
    // check if the game has been won horizontaly
    checkIfGameIsWon(0,1,2);
    checkIfGameIsWon(3,4,5);
    checkIfGameIsWon(6,7,8);

    // check if the game has been won vertically
    checkIfGameIsWon(0,3,6);
    checkIfGameIsWon(1,4,7);
    checkIfGameIsWon(2,5,8);


    // check if the game is won diagonaly

    checkIfGameIsWon(0,4,8);
    checkIfGameIsWon(2,4,6);
}

function disableButtonWhenGameIsWon(player){
    for (let button of buttons){
        if (button.textContent === ""){
            button.toggleAttribute("disabled")
        }
    }
    display.textContent= player + " won the game";
}

function checkDraw () {
    for (let button of buttons) {
        if (button.textContent === "") {
            return;
        }
    }
    display.textContent = "it is a Draw game";
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                