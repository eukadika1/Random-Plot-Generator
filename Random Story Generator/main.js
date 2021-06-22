// Create arrays
let character = document.getElementById("character")
let setting = document.getElementById("setting")
let conflict = document.getElementById("conflict")
let theme = document.getElementById("theme")
let mainChar = document.getElementById("char")
let set = document.getElementById("set")
let problem = document.getElementById("conf")
let plot = document.getElementById("story")
let topic = document.getElementById("topic")

function randomValue(array){
    return array[Math.floor(Math.random()*array.length)];
  }

let maincharacter = ["A shy woman in her 20s, who's an aspiring writer.", "A middle aged man, who is overly blunt.", "A hairstylist in her 20's, who's quite reclusive.", "A man with a hero complex.", "A young boy who doesn't remember his past.", "A kind but secretive girl in her 20's.", "A shy but energetic teenage girl.", "An aloof girl with a dark past."];

let initsetting = ["The story begins in a school.", "The story begins at the main character's house.", "The story begins in a café.", "The story begins at a carnival.", "The story begins in a car.", "The story begins on a movie set.", "The story begins in an office.", "The story begins in a lounge."];

let initconflict = ["The main character is grieving the loss of a loved one.", "The main character's loved one was kidnapped.", "The main character discovers they have a superpower.", "An rise of artificial consciousness.", "An important promis was broken."];

let inittheme = ["A story about grief.", "A story about acceptance.", "A story about love.", "A stroy about hope.", "A story about loss.", "A story about forgiveness.", "A story about greed.", "A story about corruption.", "A story about revenge."]


character.addEventListener('click', MainCharacter)
setting.addEventListener('click', Setting)
conflict.addEventListener('click', Conflict)
theme.addEventListener('click', Theme)

function MainCharacter(){
    mainChar.innerHTML = randomValue(maincharacter);
}

function Setting(){
  set.innerHTML = randomValue(initsetting);
}

function Conflict(){
  problem.innerHTML = randomValue(initconflict);
}

function Theme(){
  topic.innerHTML = randomValue(inittheme)
}
