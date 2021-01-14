//On Load, page will display drumkit along with buttons containing different sound labels.
    // On Key press, the corresponding sound will play.
//Link to Github Repo will show at bottom of page. 

//Create a container with center area displaying animated drum kit based on key press.
    //Side areas contain API information.

//Create buttons with each corresponding sound at top of page.
    //Buttons are draggable into step sequencer at bottom of page. 

//Create 16 step sequencer at bottom of page displaying 16 slots for user to drag above sounds into.
    //User Sequence repeats indefinitely until stop button is pressed. 

//Create BPM button on right side of Sequencer that user can type desired BPM in.

//Create Metronome, Play/Pause, and Record button in left container to sequencer.
    //User selects sound which corresponds with the users entered pattern according to sound selection.

//Sequencer scrolls through 16 steps according to set BPM as well as shows applicable pattern based on user sound selection.

//Create two image tags so once a button is pressed  by user, image toggles to second image creating an animation.
    //Once button is released by user, image toggles back to initial image. 

//Upon user press, drum animation will move to applicable drum image corresponding to the sound.

//API option on left side of container to search song lyrics

//API second TBD.

$("body").on("keydown", function(e){
    e.preventDefault();
    var audio = $(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    audio.play();

});