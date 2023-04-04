let quest = confirm('Do you want to play this game??')
while (quest) {
    let math = Math.random();

    let bot = '';

    //bot
    if(math <= 0.33) {
        bot = 'rock';
    } else if (math > 0.33 && math <=0.66) {
        bot = 'paper';
    } else {
        bot = 'scissors';
    }

    let answer = prompt('enter your choice(rock,paper,scissors)');
    if(answer == bot ){
        alert(`You choose ${answer} and computer choose ${bot}, DRAW`);
    } else if(answer == 'rock') {

        if(bot == 'paper'){
            alert(`You choose ${answer} and computer choose ${bot} , You LOSE :))`);
        }else{
            alert(`You choose ${answer} and computer choose ${bot} , You WIN :))`);
        }
    }else if(answer == 'paper') {

        if(bot == 'scissors'){
            alert(`You choose ${answer} and computer choose ${bot} , You LOSE :))`);
        }else{
            alert(`You choose ${answer} and computer choose ${bot} , You WIN :))`);
        }
    }else if(answer == 'scissors') {

        if(bot == 'rock'){
            alert(`You choose ${answer} and computer choose ${bot} , You LOSE :))`);
        }else{
            alert(`You choose ${answer} and computer choose ${bot} , You WIN :))`);
        }
    }

    let quest = confirm('Again??');

}

alert('Made by InSansss Github');