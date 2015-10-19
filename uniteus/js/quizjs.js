var useranswers = new Array();
var answered = 0;


//displays the questions on the page
function renderQuiz() {
  for(i=0;i<questions.length;i++) {
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"></span></p>');
    for(j=0;j<choices[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> </p>');
}
// This submits the question checks it and disables the chance for people to change their answers.
function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  showResult(questionId);
  answered++;
}

// This tells the person if they were wrong or right
function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = 'Correct!';
  } else {
    document.getElementById('result_' + questionId).innerHTML = 'Incorrect!';
  }
}

// check to make sure they answered it all
function showScore() {
  if(answered != answers.length) {
    alert("Please finish the test before submitting it.");
    return false;
  }

  // ensures that the variables are set to 0 before the next part
  questionTotal = answers.length;
  correct = 0;
  incorrect = 0;
  // totals the amount of correct and incorrect answers
  for(i=0;i<questionTotal;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }

// does uses the variables from teh last part to do get the percentage
  pc = Math.round((correct / questionTotal) * 100);
  alertMsg = "You scored " + correct + " out of " + questionTotal + "\n\n";
  alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 70)
    alertMsg += response[2];
  else if(pc > 50)
    alertMsg += response[3];
  else if(pc >= 40)
    alertMsg += response[4];
  else if(pc >= 20)
    alertMsg += response[5];
  else if(pc >= 10)
    alertMsg += response[6];
  else
    alertMsg += response[7];
  if(pc < 100) {
    if(confirm(alertMsg))
      resetQuiz(false);
    else
      return false;
  } else {
    alert(alertMsg);
  }
}
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}



        