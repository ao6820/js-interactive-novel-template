// The whole story is in the following array. You can fork this template, edit it and add new scenes to make it yours.
let scenes = [
  
    // start menu (scene 0): name, first button, first button link, secon button, second button link
      ['<h1> Interactive Novel Template</h1>', 'Start game', 2, 'About', 1],

    // about page (scene 1)
      [' <p>This is a test game created by ao6820. Visit https://github.com/ao6820/js-interactive-novel-template/ </p> Music: Vopna by Alexander Nakarada | https://www.serpentsoundstudios.com Music promoted by https://www.chosic.com/free-music/all/ Creative Commons CC BY 4.0 https://creativecommons.org/licenses/by/4.0/', 'Back', 0, 'Start game', 2],

    // scene 2
      ['Welcome traveler.', 'Who are you?', 3,'Whatever.', 4],

    // scene 3
      ['I\'m a ghost.', 'Nice.', 4,'Bullshit!', 4],

    // scene 4
      ['Eh. Whatever.', 'Ok, bye.', 5,'Cheers.', 5],
      
    // scene 5   
      ['<h2> The End</h2>', 'Start new game', 0, 'About', 1],

    /* You can add more scenes above. The template goes like this:
    ['scene text', 'first button label', number of the scene the first button links to, 'second button label', number of the scene the second button links to],      
    */
];

// Mapping the buttons etc.
const storyboard = document.querySelector("#story");
const button = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const buttonSound = document.querySelector("#buttonSound");

// Music settings
let music = new Audio('./Vopna.mp3');   // you can change './Vopna.mp3' to any URL with music
let musicActive = false;                // autoplay is off by default, if you want to change it, simply replace false with true

function setButtonSound() {
  if (musicActive === true) {
    buttonSound.innerHTML = "■";
    music.play();
  } else {
    buttonSound.innerHTML = "▶";
    music.pause();
  }
}

setButtonSound();

// Game engine ;)
let currentScene = 0;

function goToScene(sceneId) {
  storyboard.innerHTML = '<span>' + scenes[sceneId][0].replace(' ', ' </span><span>') + '</span>';
  button.innerHTML = '<span>' + scenes[sceneId][1] + '</span>';
  button2.innerHTML = '<span>' + scenes[sceneId][3] + '</span>';
}

goToScene(currentScene);

// Setting up clickable buttons
button.addEventListener("click", button1Clicked);
button2.addEventListener("click", button2Clicked);
buttonSound.addEventListener("click", buttonSoundClicked);

function button1Clicked() {
  currentScene=scenes[currentScene][2];
  goToScene(currentScene); 
}

function button2Clicked() {
  currentScene=scenes[currentScene][4];
  goToScene(currentScene);
}

// Turning music on and off
function buttonSoundClicked() {
  musicActive = !musicActive;
  setButtonSound();
}
