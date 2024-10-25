let a = new Date();
let b = a.getHours();

if (b <= 11) {
  let First = "Good Morning.";
  let i = 0;
  let first = setInterval(() => {
    demo.innerHTML += First[i];
    i++;
    if (i == First.length) {
      clearInterval(first);
    }
  }, 500);
} else if (b <= 16) {
  let Second = "Good Afternoon.";
  let j = 0;
  let second = setInterval(() => {
    demo.innerHTML += Second[j];
    j++;
    if (j == Second.length) {
      clearInterval(second);
    }
  }, 300);
} else if (b <= 24) {
  let Secon = "Good Evening.";
  let index = 0;
  let secon = setInterval(() => {
    demo.innerHTML += Secon[index];
    index++;
    if (index == Secon.length) {
      clearInterval(secon);
    }
  }, 500);
}

setTimeout(() => {
  Start.style.display = "block";
}, 5000);
setTimeout(() => {
  options.style.display = "grid";
}, 5100);

// Page two
let Grade = 0;
let loose;
let d;
let c = [];
let highScore = "";
let savescore = [];
function Startgame() {
  document.querySelector(".frontPage").style.display = "none";
  StartGame.style.display = "block";
  three.play();
  body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  setTimeout(() => {
    loose = setInterval(() => {
      let randomX = Math.floor(Math.random() * 90);
      let randomY = Math.floor(Math.random() * 65);
      let Di = document.createElement("div");
      Di.setAttribute("class", "hello");
      Di.style.width = "70px";
      Di.style.height = "120px";
      Di.style.position = "absolute";
      Di.style.left = `${randomX}%`;
      Di.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )})`;
      document.getElementById("gud").appendChild(Di);
      c.push(Di);
      c.forEach((el, i) => {
        Di.setAttribute("id", `hello${i}`);
        Di.setAttribute("onclick", `save(${i})`);
        Di.setAttribute("onanimationiteration", "gameover()");
        d = "hello" + i;
      });
    
      const element = document.getElementById(d); // Retrieve element once

      if (element) {
        if (Sco.textContent > 40) {
          element.style.animationDuration = "1s";
        } else if (Sco.textContent > 30) {
          element.style.animationDuration = "1.5s";
        } else if (Sco.textContent > 20) {
          element.style.animationDuration = "1.9s";
        }
      }
    }, 2000);
  }, 1000);
}
function save(message) {
  document.getElementById(`hello${message}`).style.display = "none";
  Sco.textContent = Number(`${Grade++}`) + 1;
  one.play();
}
function gameover() {
  three.pause();
  three.currentTime = 0;
  ov.style.display = "flex";
  StartGame.style.display = "none";
  two.play();
  clearInterval(loose);
  let End = ["E O", "ME OV", "AME OVE", "GAME OVER"];
  let en = 0;
  let over = setInterval(() => {
    ending.innerHTML = End[en];
    en++;
    if (en == End.length) {
      clearInterval(over);
    }
  }, 500);
  setTimeout(() => {
    ov.style.display = "none";
    frontPage.style.display = "block";
  }, 3000);
  if (Grade > highScore) {
    highScore = Grade;
    highscore.innerHTML = highScore;
  }
  savescore.unshift(Sco.textContent);
  if (savescore.length == 5) {
    savescore.pop();
  }
  console.log(savescore);
  Sco.textContent = "";
  Grade = 0;
}
function volu() {
  one.volume = range.value;
}
function volum() {
  three.volume = range2.value;
}
function Setting() {
  document.querySelector(".frontPage").style.display = "none";
  Settings.style.display = "grid";
}
function back() {
  Settings.style.display = "none";
  document.querySelector(".frontPage").style.display = "block";
}
function Developer() {
    document.querySelector(".frontPage").style.display = "none";
    Dev.style.display = "grid";
}
