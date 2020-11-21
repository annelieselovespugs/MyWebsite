/*this binds the calculateScore function to the id "submit_answers"*/

$("#submit_answers").click(calculateScore);


function calculateScore() {
    var score =0; //this is the running calculateScore

    var input = document.getElementsByName('question1'); //this is the temporary ARRAY that holds the data from the radio buttons of each question
    /*put the name of the question here*/
    if(input[0].checked){ /*put the index of the right answer into the []*/
      score++;
      document.getElementById("result1").innerHTML = "<span style='color:green'>✔</span>"; //when answer is correct, this slaps a green checkmark
    }
    else {
      document.getElementById("result1").innerHTML = "<span style='color:red'>×</span>"; //when answer is wrong, this slaps a red X

    }

    var input = document.getElementsByName('question2'); /*put the name of the question here*/
    if(input[2].checked){ /*put the index of the right answer into the []*/
      score++;
      document.getElementById("result2").innerHTML = "<span style='color:green'>✔</span>";
    }
    else {
      document.getElementById("result2").innerHTML = "<span style='color:red'>×</span>";
    }

    var input = document.getElementsByName('question3'); /*put the name of the question here*/
    if(input[3].checked){ /*put the index of the right answer into the []*/
      score++;
      document.getElementById("result3").innerHTML = "<span style='color:green'>✔</span>";
    }
    else {
      document.getElementById("result3").innerHTML = "<span style='color:red'>×</span>";
    }


    var input = document.getElementsByName('question4'); /*put the name of the question here*/
    if(input[1].checked){ /*put the index of the right answer into the []*/
      score++;
      document.getElementById("result4").innerHTML = "<span style='color:green'>✔</span>";
    }
    else {
      document.getElementById("result4").innerHTML = "<span style='color:red'>×</span>";
    }


    var input = document.getElementsByName('question5'); /*put the name of the question here*/
    if(input[0].checked){ /*put the index of the right answer into the []*/
      score++;
      document.getElementById("result5").innerHTML = "<span style='color:green'>✔</span>";
    }
    else {
      document.getElementById("result5").innerHTML = "<span style='color:red'>×</span>";
    }

    /*this sets the div "total_result" to contain the score*/
    document.getElementById("total_result").innerHTML = "Result: You got "+score+" out of 5!";

  }
