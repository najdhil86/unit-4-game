//Display Computer's random choice

    var computerTotal = Math.floor(Math.random()*120 + 20);

    console.log(typeof computerTotal);

    console.log(computerTotal);


    $('#computerTotal').text(computerTotal);

    var win = 0;
    var lose = 0;
    var total = 0;
    var userScore = 0;

    $('#win').text(win);
    $('#lose').text(lose);
    $('#total').text(userScore);

    // Assigning 

    function imgRandomNumber(){

        var randomImgNumber  = Math.ceil(Math.random()*12);
        return randomImgNumber;
    }

    function reset() {

        userScore = 0;

        $('#total').text(userScore);
            
        computerTotal = Math.floor(Math.random() * (120 - 19 + 1) + 19);

        $('#computerTotal').text(computerTotal);

        $('#img1').attr('data-number',imgRandomNumber());

        $('#img2').attr('data-number',imgRandomNumber());
    
        $('#img3').attr('data-number',imgRandomNumber());
    
        $('#img4').attr('data-number',imgRandomNumber());

    }



    // Set a function here when I get a chance

    $('#img1').attr('data-number',imgRandomNumber());

    $('#img2').attr('data-number',imgRandomNumber());

    $('#img3').attr('data-number',imgRandomNumber());

    $('#img4').attr('data-number',imgRandomNumber());



    $('img').click("on", function(){
        
        
        //Check if the user score is lower than computer's total

        //Conditions

        if (userScore < computerTotal){

            var imgSelect = $(this).attr('data-number');

            var newtotal = parseInt(imgSelect);
            console.log("New Total:" + newtotal);

            userScore = newtotal + userScore;
            console.log("User Score Total:"+ userScore);

            $('#total').text(userScore);
        }

        if (userScore > computerTotal) {

            lose+= 1;
            $('#lose').text(lose);

            //reset variables

            reset();
            
        } else if (userScore == computerTotal){

            win += 1;
            $('#win').text(win);

            //reset variables

            reset();
        }
    })