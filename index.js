const button1Div = document.querySelector("#button1");
const button2Div = document.querySelector("#button2");
const storyboard = document.querySelector("#story");

const button = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const buttonSound = document.querySelector("#buttonSound");

let music = new Audio('./Vopna.mp3');

// The whole story is in the following array.
  let scenes = [
    // Start menu (no 0): name, first button, first button link, secon button, second button link
      ['<h1>Roguelike game</h1>','Start game',2,'About',1],

    // About page (no 1)
      ['This is a test game created by Aleksander Olszewski.','Back',0,'Start game',3],

    // This is no 2
      ['Welcome traveler.','Who are you?',3,'Whatever.',4],

    // This is no 3
      ['I\'m a ghost.','Nice.',4,'Bullshit!',4],

    // This is no 4
      ['Eh. Whatever.','Ok, bye.',5,'Cheers.',5],
      
    // This is no 5   
      ['<h2>The End</h2>','Start new game',0,'About',1],

/* You can add more above. The template goes like this:
['text','first button',number the first button links to,'second button',number the second button links to],       */
];

let currentScene = 0;

function goToScene(sceneId) {
  storyboard.innerHTML = '<span>' + scenes[sceneId][0].replace(' ', ' </span><span>') + '</span>';
  button1Div.innerHTML = '<span>' + scenes[sceneId][1] + '</span>';
  button2Div.innerHTML = '<span>' + scenes[sceneId][3] + '</span>';
}

goToScene(currentScene);

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

let musicActive = false;

function buttonSoundClicked() {
  if (musicActive === false) {
    music.play();
    musicActive = true;
    buttonSound.innerHTML = "⏸";
  }
  else {
    music.pause();
    musicActive = false;
    buttonSound.innerHTML = "▶";
  }
}
