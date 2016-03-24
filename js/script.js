var width = window.innerWidth;

var height = window.innerHeight;
//console.log(width+' '+height);
var circles = [];

var colors = [['#FF5E3A','#FF2A68'],['#FF9500','#FF5E3A'],['#FFDB4C','#FFCD02'],
             ['#87FC70','#0BD318'],['#52EDC7','#5AC8FB'],['#1AD6FD','#1D62F0'],
            ['#C644FC','#5856D6']];


function runMain(){

  var mainBackground = document.getElementById("Greetings");
  //mainBackground.style.width = (width+100)+'px';
  //mainBackground.style.height = (height+100)+'px';

  var circleSize = 0;
  var circleMargin = 0;
  var letXPos = 0;
  var letYPos = 0;

  if(width > height) {
    circleSize = width/10;
  } else {
    circleSize = height/10;
  }
  circleMargin = circleSize/3;
  while(letXPos+circleSize < height){
    letYPos = 0;
    while(letYPos+circleSize < width) {
      var newCircle = document.createElement('div');
      newCircle.style.width = circleSize+'px';
      newCircle.style.height = circleSize+'px';
      newCircle.className = 'colors';
      newCircle.onclick = puff;

      //newCircle.onclick = 'removeCircle(self)';
      circles.push(newCircle);

      var rand_x = letXPos + Math.ceil(Math.random()*circleMargin);
      var rand_y = letYPos + Math.ceil(Math.random()*circleMargin);
      newCircle.style.top = rand_x+'px';
      newCircle.style.left = rand_y+'px';
      setRandomColor(newCircle);
      mainBackground.appendChild(newCircle);
      letYPos += circleSize*0.8;
    }
    letXPos += circleSize*0.8;
  }


  function createMsg(){
    var msg = document.createElement('div');
    msg.setAttribute("id","msg");

    var text = document.createTextNode('HAPPY HOLI');
    msg.appendChild(text);
    mainBackground.appendChild(msg);
  }
  setTimeout(createMsg,5000);
}


function setRandomColor(circleDiv){
  var random = Math.random()*7;
  var randomIndex = Math.floor(random);
  var string = 'radial-gradient(circle,' +
                                    colors[randomIndex][0]+','+
                                    colors[randomIndex][1]+')';
  var circleStyle = circleDiv.style;
  circleStyle.backgroundImage = string;
  if(circleStyle.backgroundImage === undefined )
    circleDiv.style.backgroundImage = '-webkit-'+string;
  if(circleStyle.backgroundImage === undefined )
    circleDiv.style.backgroundImage = '-moz-'+string;
  if(circleStyle.backgroundImage === undefined )
    circleDiv.style.backgroundImage = '-o-'+string;
        //console.log(randomIndex+' '+colors[0][0]);
}

function puff(){
  removeChild(this);
  var audio = document.getElementById('end');
  audio.play();
}

function removeChild(del){
  del.parentNode.removeChild(del);
}
