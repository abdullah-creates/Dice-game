var value = document.getElementById("container");

function gameRun() {
  var number = Math.ceil(Math.random() * 6);
  console.log(number);

  if (number == 1) {
    value.innerHTML = `<div class="dice-1 animate__animated animate__flipInX">
    <div class="circle"></div></div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a>`;
  } else if (number == 2) {
    value.innerHTML = `<div class="dice-2 animate__animated animate__flipInX">
            <div class="circle"></div>
            <div class="circle"></div>
        </div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a>`;
  } else if (number == 3) {
    value.innerHTML = `<div class="dice-3 animate__animated animate__flipInX">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a>`;
  } else if (number == 4) {
    value.innerHTML = ` <div class="dice-4 animate__animated animate__flipInX">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a>`;
  } else if (number == 5) {
    value.innerHTML = `<div class="dice-5 animate__animated animate__flipInX">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a>`;
  } else if (number == 6) {
    value.innerHTML = `<div class="dice-6 animate__animated animate__flipInX">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div> <a href ="#" class = "button" onclick="gameRun()"><span></span><span></span><span></span><span></span>roll</a> <h1>You Won!</h1>`;
  }
}
