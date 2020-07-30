
var title;
var name, age, review, question, button;
var database;

function setup(){
   createCanvas(displayWidth-30,displayHeight-50);

    database = firebase.database();

   title = createElement("h3");
   title.html("Rid of COVID-19");
   title.position(displayWidth/2-15,displayHeight/2-400);

   name = select('#name');
   age = select('#age');
   review = select('#review');
   button = select("#button");

   
   button.mousePressed((data));
   

   }
   function data(){
      var ref = database.ref('/');
      var data ={
        name: name.value(),
        age: age.value() ,
        review: review.value(),
        
      };
       ref.push(data);
    }

function draw(){
    background(20);

    fill(255);
    textSize(20);
    text("Your Suggestion to the Goverment...",displayWidth/2-75, displayHeight/2-180);

}
