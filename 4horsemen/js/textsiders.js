function play() {
    var url = document.querySelector('input[name="url"]:checked').value;
    window.location = url;
}
var stage = 0;
var audio = document.getElementById('audio');
var quest = document.getElementById('quest');
var choice = document.getElementById('choices');
var story = document.getElementById('story');
function game1() {
    // Stage 0
    if(stage == 0) {
        story.innerHTML = 'Quest'
        quest.innerHTML = 'You have fallen in the streets of New York City. While searching for the ones responsible for framing you. You find yourself in the middle of a battlefield of Hell on Earth with Angels and Demons fighting to the death for supremacy. Which side do you choose?';
        choice.innerHTML = 
        `<label>
            <input type='radio' name='choice' value='answer1' checked='checked'>
                <span>
                    <img src='images/angels.png'>
                </span>
        </label>
        <label>
            <input type='radio' name='choice' value='answer2'>
                <span>
                    Ignore
                </span>
        </label>
        <label>
            <input type='radio' name='choice' value='answer3'>
                <span>
                    <img src='images/demons.png'>
                </span>
        </label>`;
        stage = 1;
        if (true) {
            alert(`Let's Play`);
        }
    // Stage 1
    } else if (stage == 1) {
        var choices = document.querySelector('input[name="choice"]:checked').value;
        // If Choices is Answer1
        if (choices == 'answer1') {
            quest.innerHTML = "<br>Even after you save the Angels.<br> They blame you for breaking the law and<br> will hunt you in the future<br><p>&nbsp;</p>";
            choice.innerHTML = "";
            stage = 2;
        // If Choices is Answer2
        } else if (choices == 'answer2') {
            quest.innerHTML = "<br>You ignore the battle<br> and press forward<br> to find the one responsible<br><p>&nbsp;</p>";
            choice.innerHTML = "";
            stage = 3;
        // If Choices is Answer3
        } else if (choices == 'answer3') {
            quest.innerHTML = "<br>You rule amoung the demons<br> and always waging wars<br> for all of eternity<br><p>&nbsp;</p>";
            choice.innerHTML = "";
            stage = 'begin';
        } 


    // Stage 2
    } else if (stage == 2) {
        quest.innerHTML = 'As you move forward<br> you find yourself in Vulgrim<br> where Sameal is sealed...<br>A Phantom General<br> which guards the seal<br> apears and blocks your path!<br>Do you fight the General or Ignore him?';
        choice.innerHTML = `
        <label>
            <input type='radio' name='choice' value='answer1' checked='checked'>
                <span>
                    <img src='images/fight1.png'>
                </span>
        </label>
        <label>
            <input type='radio' name='choice' value='answer2'>
                <span>
                    Ignore
                </span>
        </label>`;
        stage = 2.1;
    } else if (stage == 2.1) {
        var choices = document.querySelector('input[name="choice"]:checked').value;
        if (choices == 'answer1') {
            quest.innerHTML = "<br>You have killed the Phantom General<br> And as his blood runs<br> The seal breaks<p>&nbsp;</p>";
            choice.innerHTML = "";
            stage = 2.2;
        } else if (choices == 'answer2'){
            quest.innerHTML = '<br>He felt insulted that you turned away<br> so he stabbed you from behind and<br> DIED<br><p>&nbsp;</p>';
            choice.innerHTML = "";
            stage = 'begin1';
        }
    } else if (stage == 2.2) {
        quest.innerHTML = 'Sameal has been released<br> from his imprisonment<br> and he offers you a deal.<br>help him regain his power or Die';
        choice.innerHTML = `
        <label>
            <input type='radio' name='choice' value='answer1' checked='checked'>
                <span>
                    <img src='images/deal.png'>
                </span>
        </label>
        <label>
            <input type='radio' name='choice' value='answer2'>
                <span>
                    <img src='images/die.png'>
                </span>
        </label>`;
        stage = 2.3;
    } else if (stage == 2.3) {
        var choices = document.querySelector('input[name="choice"]:checked').value;
        if (choices == 'answer1') {
            quest.innerHTML = "<br>Sameal tells you<br> to get the hearts<br> of the Chosen's<br> and bring them back<br> to him<p>&nbsp;</p>";
            choice.innerHTML = "";
            stage = 2.4;
        } else if (choices == 'answer2') {
            quest.innerHTML = `Sameal laughs<br> as y'all are both wounded<br> from the battle<br> and says he'll help you<br> in your search<br> only if you help him<br> get the hearts<p>&nbsp;</p>`;
            choice.innerHTML = "";
            stage = 'continue';
        }
    } else if (stage == 2.4) {
        quest.innerHTML = 'You set off to obtain the Chosen Ones hearts for Sameal. Tiamat was the first of the Chosen that you approached and was defeated. Soon the Greveir and Stygian would also know the same fate. You return to Sameal with hearts in hand and offer them to him in exchange for helping you. Sameal accepts you purposal for he knows and approves revenge when he see it.';
        choice.innerHTML ='';
        stage = 2.5;
    } else if (stage == 2.5) {
        
    }
    
    
    
    
    
    
    
    else if (stage == 3) {
        quest.innerHTML = 'As you move forward<br> you find yourself in Vulgrim<br> where Sameal is sealed...<br>A Phantom General<br> which guards the seal<br> apears and blocks your path!<br>Do you fight the General or Ignore him?'
        choice.innerHTML = `
        <label>
            <input type='radio' name='choice' value='answer1' checked='checked'>
                <span>
                    <img src='images/fight1.png'>
                </span>
        </label>
        <label>
            <input type='radio' name='choice' value='answer2'>
                <span>
                    Ignore
                </span>
        </label>`;




    // Stage 'begin'
    } else if (stage == 'begin') {
        audio.play();
        alert(`Achievement Unlocked:
        
        Game Over...?`)
        stage = 'gameOver'
    // Stage 'begin1'
    } else if (stage == 'begin1') {
        audio.play();
        alert(`Achievement Unlocked:
        
        Don't Run Away!`)
        stage = 'gameOver'
    // Stage 'gameOver' 
    } else if (stage == 'gameOver') {
        window.location.href = 'textsiders_war.html';
    // Stage 'continue'
    } else if (stage == 'continue') {
        audio.play();
        alert(`Achievement Unlocked:
        
        Iron-Willed`)
        stage = '';
    } else if (stage == '2.4.1') {
        quest.innerHTML = `Sameal laughs<br> as y'all are both wounded<br> from the battle and says he'll help you<br> in your search`
    }

};
function game2() {
    var quest = document.getElementById('quest');
    var choice = document.getElementById('choices');
};
function game3() {
    var quest = document.getElementById('quest');
    var choice = document.getElementById('choices');
};
function game4() {
    var quest = document.getElementById('quest');
    var choice = document.getElementById('choices');
};