
var title;
var face, age, review, question, button;
var database;

function setup(){
   createCanvas(displayWidth-30,displayHeight-50);

    database = firebase.database();

   title = createElement("h3");
   title.html("Rid of COVID-19");
   title.position(displayWidth/2-15,displayHeight/2-400);

   face = createInput("name");
   face.position(displayWidth/2, displayHeight/2-100);
  
   age = createInput("age");
  age.position(displayWidth/2, displayHeight/2);
   review = createInput("review");
   review.position(displayWidth/2, displayHeight/2+100);
   button = createButton("SUBMIT");
   button.position(displayWidth/2, displayHeight/2+200);
   
   button.mousePressed((data));
   

   }
   function data(){
      var ref = database.ref('/');
      var data ={
        face: face.value(),
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
