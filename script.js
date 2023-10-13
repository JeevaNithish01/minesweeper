var redPosition = Math.floor(Math.random() * 16) + 1;
var points = 0;

function _(id) {
  return document.getElementById(id);
}

function generateBox() {
    _("play").textContent = "Restart";
    var a = '';
    points = 0;
    // console.log(redPosition);
    _("points").innerHTML = `Your score is : ${points}`;

    for (var i = 0; i < 16; i++) {
        var c = i === redPosition ? "red" : "green";
        a += `<div class="b" onclick="action(this)" id="${i+1}"></div>`;
    }

    _("boxes").innerHTML = a;
    _("text").innerHTML = "All the best!"
}


function action(c) {
// console.log(c.id)  
  if(redPosition == c.id){
    _(c.id).innerHTML = "<img class='bomb-img' src='bomb.gif' alt='bomb'/>"
    _("text").innerHTML = `You lost!, box ${c.id} had the bomb!`
    redPosition = Math.floor(Math.random() * 16) + 1;
    points = 0;
    // _("points").innerHTML = `Your score is : ${points}`;
    _(c.id).onclick = null;
    for(var j = 1; j < 17; j++){
      _(`${j}`).onclick = null;
    }
  }
  else{
    _(c.id).innerHTML = "<img src='gold.gif' alt='gold'/>"
    points += 1;
    _(c.id).onclick = null;
    _("points").innerHTML = `Your score is : ${points}`;
  }

  if(points == 15){
    _("text").innerHTML = "Winner Winner Chicken Dinner!";
    _(redPosition).onclick = null;
    redPosition = Math.floor(Math.random() * 16) + 1;
    }
  
}
