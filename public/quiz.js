function pressLoadButton(){
  $("#submit-answers").click(calculateScore);
}


function calculateScore() {
    var score =0;
      // if($('question1')[0].checked){
      //   score++
      // }
      //
      // if($('question2')[2].checked){
      //   score++
      // }
      //
      // if($('question3')[3].checked){
      //   score++
      // }
      //
      // if($('question4')[1].checked){
      //   score++
      // }
      //
      // if($('question2')[0].checked){
      //   score++
      // }
      //
      // $

    var input = document.getElementsByName('question1');
    /*put the name of the question here*/
    if(input[0].checked){ /*put the index of the right answer into the []*/
      score++;
    }

    var input = document.getElementsByName('question2'); /*put the name of the question here*/
    if(input[2].checked){ /*put the index of the right answer into the []*/
      score++;
    }

    var input = document.getElementsByName('question3'); /*put the name of the question here*/
    if(input[3].checked){ /*put the index of the right answer into the []*/
      score++;
    }

    var input = document.getElementsByName('question4'); /*put the name of the question here*/
    if(input[1].checked){ /*put the index of the right answer into the []*/
      score++;
    }

    var input = document.getElementsByName('question5'); /*put the name of the question here*/
    if(input[0].checked){ /*put the index of the right answer into the []*/
      score++;
    }

    document.getElementById("result").innerHTML = score+"/5";

  }
