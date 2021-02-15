//draw the doughnut
var doughnutArray1 = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d'), document.getElementById('doughnut5').getContext('2d'), document.getElementById('doughnut6').getContext('2d'), document.getElementById('doughnut7').getContext('2d'), document.getElementById('doughnut8').getContext('2d')];
for (var i = 0; i < doughnutArray1.length; i++) {
  doughnutArray1[i].lineWidth = 15; //thickness of the line
  doughnutArray1[i].fillStyle = 'black';
  doughnutArray1[i].strokeStyle = "black";
  doughnutArray1[i].beginPath();
  doughnutArray1[i].arc(80, 80, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  doughnutArray1[i].stroke();
}
window.onload = function() {
    loadSkills1();
    loadSkills2();
    loadSkills3();
    loadSkills4();
    loadSkills5();
    loadSkills6();
    loadSkills7();
    loadSkills8();
  }

/*Skill Data Mining & Visualization*/
function loadSkills1() {
  var ctx = document.getElementById('skill1').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "coral";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(80, 80, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 90) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 5); //speed   
}

/*Skill Cibersecurity*/
function loadSkills2() {
  var ctx = document.getElementById('skill2').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; 
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "coral";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(80, 80, 55, start, diff / 10 + start, false); 
    ctx.stroke();
    if (al >= 90) { 
      clearTimeout(sim);
    }
    al++;
  }
  var sim = setInterval(progressSim, 5); 
}

/*Skill Mobile computing*/
function loadSkills3() {
  var ctx = document.getElementById('skill3').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; 
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "#ffa500";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(80, 80, 55, start, diff / 10 + start, false); 
    ctx.stroke();
    if (al >= 85) { 
      clearTimeout(sim);
    }
    al++;
  }
  var sim = setInterval(progressSim, 5); 
}

/*Human-Agent Interaction*/
function loadSkills4() {
  var ctx = document.getElementById('skill4').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; 
    ctx.fillStyle = 'black';
    ctx.strokeStyle = "#ffa500";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(80, 80, 55, start, diff / 10 + start, false); 
    ctx.stroke();
    if (al >= 85) { 
      clearTimeout(sim);
    }
    al++;
  }
  var sim = setInterval(progressSim, 5); 
}

/*Skill Diseases monitoring*/
function loadSkills5() {
  var ctx1 = document.getElementById('skill5').getContext('2d');
  var al1 = 0;
  var start1 = 4.72;
  var cw1 = ctx1.canvas.width;
  var ch1 = ctx1.canvas.height;
  var diff1;

  function progressSim1() {
    diff1 = ((al1 / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx1.clearRect(0, 0, cw1, ch1);
    ctx1.lineWidth = 5;
    ctx1.fillStyle = 'black';
    ctx1.strokeStyle = "#c0392b";
    ctx1.textAlign = 'center';
    ctx1.font = "30px Radley";
    ctx1.fillText(al1 + '%', cw1 * .5 + 2, ch1 * .5 + 8, cw1);
    ctx1.beginPath();
    ctx1.arc(80, 80, 55, start1, diff1 / 10 + start1, false);
    ctx1.stroke();
    if (al1 >= 80) { 
      clearTimeout(sim1);
    }
    al1++;
  }
  var sim1 = setInterval(progressSim1, 5); 
}

/*Skill Usability & User Experience*/
function loadSkills6() {
  var ctx1 = document.getElementById('skill6').getContext('2d');
  var al1 = 0;
  var start1 = 4.72;
  var cw1 = ctx1.canvas.width;
  var ch1 = ctx1.canvas.height;
  var diff1;

  function progressSim1() {
    diff1 = ((al1 / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx1.clearRect(0, 0, cw1, ch1);
    ctx1.lineWidth = 5; 
    ctx1.fillStyle = 'black';
    ctx1.strokeStyle = "#1199ff";
    ctx1.textAlign = 'center';
    ctx1.font = "30px Radley";
    ctx1.fillText(al1 + '%', cw1 * .5 + 2, ch1 * .5 + 8, cw1);
    ctx1.beginPath();
    ctx1.arc(80, 80, 55, start1, diff1 / 10 + start1, false); 
    ctx1.stroke();
    if (al1 >= 90) { 
      clearTimeout(sim1);
    }
    al1++;
  }
  var sim1 = setInterval(progressSim1, 5); 
}

/*Skill Behaviour Analysis*/
function loadSkills7() {
  var ctx1 = document.getElementById('skill7').getContext('2d');
  var al1 = 0;
  var start1 = 4.72;
  var cw1 = ctx1.canvas.width;
  var ch1 = ctx1.canvas.height;
  var diff1;

  function progressSim1() {
    diff1 = ((al1 / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx1.clearRect(0, 0, cw1, ch1);
    ctx1.lineWidth = 5; 
    ctx1.fillStyle = 'black';
    ctx1.strokeStyle = "#c0392b";
    ctx1.textAlign = 'center';
    ctx1.font = "30px Radley";
    ctx1.fillText(al1 + '%', cw1 * .5 + 2, ch1 * .5 + 8, cw1);
    ctx1.beginPath();
    ctx1.arc(80, 80, 55, start1, diff1 / 10 + start1, false);
    ctx1.stroke();
    if (al1 >= 80) { 
      clearTimeout(sim1);
    }
    al1++;
  }
  var sim1 = setInterval(progressSim1, 5); 
}

/*Skill Smart health*/
function loadSkills8() {
  var ctx1 = document.getElementById('skill8').getContext('2d');
  var al1 = 0;
  var start1 = 4.72;
  var cw1 = ctx1.canvas.width;
  var ch1 = ctx1.canvas.height;
  var diff1;

  function progressSim1() {
    diff1 = ((al1 / 100) * Math.PI * 2 * 10).toFixed(2); 
    ctx1.clearRect(0, 0, cw1, ch1);
    ctx1.lineWidth = 5; 
    ctx1.fillStyle = 'black';
    ctx1.strokeStyle = "#9b59b6";
    ctx1.textAlign = 'center';
    ctx1.font = "30px Radley";
    ctx1.fillText(al1 + '%', cw1 * .5 + 2, ch1 * .5 + 8, cw1);
    ctx1.beginPath();
    ctx1.arc(80, 80, 55, start1, diff1 / 10 + start1, false);
    ctx1.stroke();
    if (al1 >= 75) { 
      clearTimeout(sim1);
    }
    al1++;
  }
  var sim1 = setInterval(progressSim1, 5); 
}



