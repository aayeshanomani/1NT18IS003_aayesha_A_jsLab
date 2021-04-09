

var customName = document.getElementById('customName');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var m19 = document.querySelector('.ml9');



function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "ONCE UPON A TIME, there was a girl named Cindrella. She was :insertx:. She lived with :inserty:. Once she was walking down the street that :insertz:.";
var insertX =['really intelligent','big time stupid','depressed'];
var insertY = ['her father and two dogs', 'her step mother and two step sisters', 'her brother and his wife'];
var insertZ = ['she saw the Wizard of Oz standing in front of her', 'a dog came running to her with a bone in his mouth. It had written chapad jhunjhun on it', 'she saw a washerman washing clothes and was lost in some deep thought that she fell into the water nearby'];


function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  if(customName !== null && customName.value !== '') {
    var name = customName.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Cindrella/g, name);
  }
  

  story.textContent = newStory;
  story.style.visibility = 'visible';
  m19.style.borderStyle = 'dotted';
}

randomize.addEventListener('click', result);

var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letters',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });