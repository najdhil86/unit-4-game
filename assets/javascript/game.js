//Display Computer's random choice

    var randomTotalNumber = Math.floor(Math.random()*120 + 20);

    console.log(typeof randomTotalNumber);

    console.log(randomTotalNumber);


    $('#randomTotalNumber').text(randomTotalNumber);

    var win = 0;
    var lose = 0;
    var total = 0;
    var userScore = 0;

    $('#win').text(win);
    $('#lose').text(lose);
    $('#total').text(userScore);

    // Assigning 

    function AppliedRandomNumber(){

        var randomNumber  = Math.ceil(Math.random()*12);
        return randomNumber;
    }



    // Set a function here when I get a chance

    $('#img1').attr('data-number',AppliedRandomNumber());

    $('#img2').attr('data-number',AppliedRandomNumber());

    $('#img3').attr('data-number',AppliedRandomNumber());

    $('#img4').attr('data-number',AppliedRandomNumber());



    $('img').click("on", function(){

        
        var imgSelect = $(this).attr('data-number');

   
        // console.log(imgSelect);

        // console.log(typeof imgSelect); < Checking what type of data type this variable is..

        // var new_total = $('#total').attr('data-total');

        var newtotal = parseInt(imgSelect);

        console.log("New Total:" + newtotal);
        

        userScore = newtotal + userScore;

        console.log("User Score Total:"+ userScore);

        $('#total').text(userScore);
    
        


    })