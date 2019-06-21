var funnyList = ["Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.","Are you a beaver? Cuz daaaaaam.","Is your face from McDonald's? 'Cause I'm LOOOVIN' it!"];

var sweetList = ["Can I follow you home? Because my parents always told me to follow my dreams.","May I borrow your phone? I need to call your mother and thank her for bringing you into this world.","I bet you're exhausted because you've been running through my mind all day."];

var smoothList = ["I think your hand looks heavy...Would you like me to hold it for you?","I just lost my phone number...can I have yours instead?","If I had a nickel everytime I saw someone as beautiful as you, then I would have 5 cents."];

var nerdyList = ["My love for you is like dividing by zero--it cannot be defined.","You're sweeter than 3.14","Are you related to Yoda? Because yodalicious."];

var desperateList = ["Do you know what my shirt is made of? Boyfriend material."," My love for you is like diarrhea. I can’t hold it in.","If I were a stop light, I’d turn red every time you passed by, just so I could stare at you a bit longer."];


var buttonFunny = $('.funny');
var buttonSweet = $('.sweet');
var buttonSmooth = $('.smooth');
var buttonNerdy = $('.nerdy');
var buttonDesperate = $('.desperate');
var message = $('.message');


buttonFunny.on("click", funnyLine);
buttonSweet.on("click", sweetLine);
buttonSmooth.on("click", smoothLine);
buttonNerdy.on("click", nerdyLine);
buttonDesperate.on("click", desperateLine);


function funnyLine(){
  var random = Math.random()*3;
  var rounded = Math.floor(random);
  var line = funnyList[rounded];
  message.text(`${line}`);
}
function sweetLine(){
  var random = Math.random()*3;
  var rounded = Math.floor(random);
  var line = sweetList[rounded];
  message.text(`${line}`);
}
function smoothLine(){
  var random = Math.random()*3;
  var rounded = Math.floor(random);
  var line = smoothList[rounded];
  message.text(`${line}`);
}
function nerdyLine(){
  var random = Math.random()*3;
  var rounded = Math.floor(random);
  var line = nerdyList[rounded];
  message.text(`${line}`);
}
function desperateLine(){
  var random = Math.random()*3;
  var rounded = Math.floor(random);
  var line = desperateList[rounded];
  message.text(`${line}`);
}
