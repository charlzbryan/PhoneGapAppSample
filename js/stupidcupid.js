$(function() {
        
        //Insert code here
        var currentQuestion = null;
        var questionIndex = 0;
        var questionsOver=0;
        
        // Your list of questions. Each question has an answer (either a,b or c)
        // and then a set of "options" in the question
        var questions = [
            { 
                      'answer': 'b',
                      'question': 'If someone whistles at you, you..',
                      options: ['Cry', 'Meh..whatever', 'Laugh']
            },
          { 
              'answer': 'b',
                      'question': 'Are you a good kisser ?',
                      options: ['Yes', 'Hell yeah !', 'No kissing']
          },
          { 
                       'answer': 'c',
                      'question': 'If you see your ex, you will',
                      options: ['Flirt', 'Cry', 'Avoid contact']
            },
          { 
              'answer': 'b',
                      'question': 'Is there a guy next to you ?',
                      options: ['Yes', 'Oh yeah ', 'Guys ? Eww..']
          },
           { 
              'answer': 'c',
                      'question': 'Do you prefer beer or wine ?',
                      options: ['Beer', 'Wine', 'Both']
          },
          { 
                       'answer': 'c',
                      'question': 'Describe the guy next to you..',
                      options: ['Super hot !', 'Super smart !', 'Both']
            },
          { 
              'answer': 'c',
                      'question': 'Does he like you ?',
                      options: ['No', 'A little', 'A lot']
          },
          { 
              'answer': 'c',
                      'question': 'Do you like him ?',
                      options: ['No', 'A little', 'A lot']
          },
          { 
              'answer': 'b',
                      'question': 'Are you excited right now ?',
                      options: ['No, movie was boring', 'Um hmmm', 'A lot']
          },
          { 
              'answer': 'b',
                      'question': 'What would you prefer to be called ?',
                      options: ['Snehasaurus Rex', 'Merlyn Sneha Merlyn', 'Snehanski']
          },
          { 
              'answer': 'a',
                      'question': 'Sneha Louis, will you marry me ?',
                      options: ['Yes', 'No', 'Um hmmmm']
          }
        ];
        
        // Detect when the submit button is clicked and check if the question
        // was answered correctly
        $('input[type="submit"]').click(function() {
            var val = $('#questions').find('input:checked').val();
            if(currentQuestion) {
                if(currentQuestion.answer == val) {
                    if(questionsOver>=10){
                        alert("Woohoo !");
                        //$.mobile.changePage( "#page2", { transition: "slideup", changeHash: false });
                    }
                    questionsOver=questionsOver+1;
                    showQuestion();
                } else {
                    //alert("Nope!");
                }
            }
            return false;
        });
        
        // Set the value of an option in the question
        function setRadioLabel(radioId, text) {
             $('label[for="' + radioId + '"]').find('span.ui-btn-text').text(text);
        };
        
        // Show a random question
        function showQuestion() {
            // Grab next question, and increment so we get a new one next time
            var random = questions[questionIndex++ % questions.length];
            
            $('#question').text(random.question);
            
            $('input[type="radio"]').attr('checked', false).checkboxradio('refresh');
            
            setRadioLabel('radio1', random.options[0]);
            setRadioLabel('radio2', random.options[1]);
            setRadioLabel('radio3', random.options[2]);
            currentQuestion = random;
        };
        
        // Start the question stuff off
        showQuestion();
        });