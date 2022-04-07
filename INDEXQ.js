var answers = [ 
  "And now 'tis man who dares assault the sky.  And as we come to claim our promised place, Aim only to repay the good you gave, And warm with human love the chill of space. THOMAS G. BERGIN", 
  "We who were meant to roam the stars go now on foot upon a ravaged earth. But above us those other worlds still hang, and still they beckon. And so is the promise still given. If we make not the mistakes of the Old Ones then shall we know in time more than the winds of this earth and the trails of this earth. - ANDRE NORTON", 
  "We are the light that travels into space. ZERO 7 ",
  "Two possibilities exist:either we are alone in the universe or we are not. Both are equally captivating.",
  "DONT TELL ME SKY'S THE LIMIT WHEN THERE ARE FOOTPRINTS ON THE MOON" ,
  "For the wise man looks into space and he knows there is no limited dimensions. Zhuangzi ",
  "The rockets and the satellites, spaceships that we're creating now, we're pollinating the universe. Neil Young ",
 "That's one small step for a man, one giant leap for mankind. Neil Armstrong",
 "I think we are at the dawn of a new era in commercial space exploration. Elon Musk"

    ] 

document.getElementById('answerButton').onclick = function () { 
  var answer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById('answerContainer').innerHTML = answer;
};
