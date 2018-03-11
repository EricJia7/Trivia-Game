class TriviaQuestion {
    constructor(question, questionsOptions, answersOptions,imgUrl) {
        this.question = question;
        this.questionsOptions = questionsOptions;
        this.answersOptions = answersOptions;
        this.imgUrl = imgUrl;
    }
    get getQuestionLen() {
        return this.questionsOptions.length;
    }
    get answersOptionsLen() {
        return this.answersOptions.length;
    }
}

var Q1 = new TriviaQuestion("Who is the only person to have served as both US Vice President and President without being elected to either office?", 
["Lyndon B. Johnson","George Washington","Harry Truman","Gerald Ford"], ["Gerald Ford"],"assets/images/Gerald_Ford.jpg");

var Q2 = new TriviaQuestion("How many squares are in normal Monopoly board?", [80,40,20,60], [40],"assets/images/Monopoly_Plus_Board.jpg");

var Q3 = new TriviaQuestion("What type of animal is a seahorse?", ["Crustacean","Arachnid","Fish","Shell"], ["Crustacean"],"assets/images/seahorse.jpg");

var Q4 = new TriviaQuestion("Which of the following dogs is the smallest?", ["Dachshund","Poodle","Pomeranian","Chihuahua"], ["Chihuahua"],"assets/images/chihuahua.jpg");

var Q5 = new TriviaQuestion("What color are zebras?", ["White with black stripes","Black with white stripes","Both of the above","None of the above."], 
["Black with white stripes"],"assets/images/zebras.png");

var Q6 = new TriviaQuestion("What existing bird has the largest wingspan?", ["Stork","Swan","Condor","Albatross"], ["Albatross"],"assets/images/albatross.jpg");

var Q7 = new TriviaQuestion("What is the biggest animal that has ever lived?", ["Blue whale","African elephant","Apatosaurus (aka brontosaurus)","Spinosaurus"], 
["Blue whale"],"assets/images/Blue-Whale.jpg");

var Q8 = new TriviaQuestion("What pets do more families own?", ["Birds","Cats","Dogs","Horses"], ["Dogs"],"assets/images/pets.png");

var Q9 = new TriviaQuestion("What animal lives the longest?", ["Ocean quahog (clam)","Red sea urchin","Galapagos tortois"," Rougheye rockfish"], 
["Ocean quahog (clam)"],"assets/images/Ocean_quahog.jpg");

var Q10 = new TriviaQuestion("Who was the longest serving non-royal world leader who rose to power after 1900?", 
["Muammar Gaddafi","Fidel Castro","Francisco Franco","Kim Il-sung"], ["Fidel Castro"],"assets/images/Castro.jpg");

var Q11 = new TriviaQuestion("In 1781, William Herschel discovered which planet?", ["Uranus","Neptune","Saturn","Jupiter"], ["Uranus"],"assets/images/Uranus.jpg");

var Q12 = new TriviaQuestion("The 'Great Northern War' was primarily a contest between which two countries?", 
["Denmark and Germany","Russia and Sweden", "England and Scotland","Great Britain and Norway"], ["Russia and Sweden"],"assets/images/greatnorthernwar.png");

var Q13 = new TriviaQuestion("Approximately how many turkeys are eaten each year on Thanksgiving in the United States?", ["10 million","28 million","46 million","80 million"], 
["46 million"],"assets/images/Thanksgiving-Turkey.jpg");

var Q14 = new TriviaQuestion("The Pilgrims came to the New world seeking religious freedom and were also called?", 
["The Puritans",
"The Great Explorers","The Wanderers"], ["The Puritans"],"assets/images/Puritans.jpg");

var Q15 = new TriviaQuestion("Which two actors directed themselves in movies and won Oscars for Best Actor?", 
["Al Pacino and Timothy Hutton","Jack Nicholson and Kevin Spacey","Laurence Olivier and Roberto Benigni","Tom Hanks and Paul Newman"], ["Laurence Olivier and Roberto Benigni"], 
"assets/images/Roberto_Benigni.jpg");

var Q16 = new TriviaQuestion("Which movie won Best Picture of Oscars 2018?", ["Call Me by Your Name","The Shape of Water",
"Three Billboards Outside Ebbing, Missouri","Phantom Thread","All the Money in the World"], 
["The Shape of Water"], "assets/images/The-Shape-of-Water.jpg");

var questionPool = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16];


function ranNum(num) {
    return Math.floor(Math.random() * num);
};

var gamePlayHTML = 

'<div class="container guess_page"> \
<div class="col-md-1 "></div> \
<div class="col-md-10"> \
    <div class="row addRowSpace"></div> \
    <div class="row"> \
        <div class="col-md-12 text-center"> \
        <p "text-center" class = "timeDisplay">d</p> \
        </div> \
    </div> \
    <br> \
    <div class="row"> \
        <div class="col-md-1"></div> \
        <div class="col-md-10"> \
            <p "text-center" class = "qDisplay"></p> \
        </div> \  <div class="col-md-1"></div> \
    </div> \
    <div class="row"> \
        <div class="col-md-2"></div> \
        <div class="col-md-8 text-left aDisplay"> \
        </div> \   <div class="col-md-2"></div> \
    </div> \
    <div class="row"> \
        <div class="col-md-12 text-center imgDisplay"> \
        </div> \
    </div> \
</div> \
<div class="col-md-1"></div> \
</div>';

var fname;
var lname;
var userSelectedTime;

var timeDisplayStart = false;

var gameon = false;

var currentIndex;
var currentQ;

var correctGuess = 0;
var wrongGuess = 0;
var notAnswered = 0;

var timeHandleId;

var timeDisplay = {

    time: 0,

    reset: function() {
        timeDisplay.time = parseInt(userSelectedTime);
        $("p.timeDisplay").html('<p>Guess Time Left:      ' + timeDisplay.time +  '  seconds </p>');
        timeDisplayStart = false;
    },

    start: function() {
        if(!timeDisplayStart) {
            qDisplay();
            timeHandleId = setInterval(timeDisplay.count, 1000);
            timeDisplayStart = true;
            $(".aDisplayBtn").click(function(){
                var playerAns = $(this).text();
                console.log("This is the answer:", playerAns);
                if(playerAns === currentQ.answersOptions[0]) {
                    clearInterval(timeHandleId);
                    answersDisplay(true);
                    correctGuess++;
                    console.log("correct guess now is:", correctGuess);
                    questionPool.splice(currentIndex,1);
                    setTimeout(selectQuestion,3500);
                } else if (playerAns != currentQ.answersOptions[0]) {
                    clearInterval(timeHandleId);
                    answersDisplay(false);
                    wrongGuess++;
                    console.log("wrong guess now is:", wrongGuess);
                    questionPool.splice(currentIndex,1);
                    setTimeout(selectQuestion,3500);
                };
            });

        };
    },

    count: function() {
        if(timeDisplay.time > 0) {
            console.log("timeDisplay", timeDisplay.time)
            timeDisplay.time--;
            $("p.timeDisplay").html('<p>Guess Time Left:      ' + timeDisplay.time +  '  seconds </p>');
        } else {
            answersDisplay();
            notAnswered++;
            questionPool.splice(currentIndex,1);
            setTimeout(selectQuestion,3500);
            clearInterval(timeHandleId);
        };
    },
};

function qDisplayfunc(str,arr) {
    $(".qDisplay").html('<p "text-center" id = "qDisplay">'+ str +'</p>');
    // arr.map(arr => $(".aDisplay").append('<button type="button" class="btn btn-info  btn-lg btn-block aDisplayBtn">' + arr +'</button>'))

    for(var i=0; i <arr.length; i++) {
        var temBtn = $('<button>')
        .addClass("btn btn-info  btn-lg btn-block aDisplayBtn")
        .text(arr[i])
        .attr("aDisPlayBtn-Data"+i,arr[i])
        $(".aDisplay").append(temBtn);
    }
};

function qDisplay() {
    displayReset();
    qDisplayfunc(currentQ.question,currentQ.questionsOptions);
};

function answersDisplay(booleanVaule) {
    $(".aDisplay").empty();

    if(timeDisplay.time === 0) {
        $(".aDisplay").append('<p "text-center" id = "qDisplay"> Time out!   Correct Answer is: '+ currentQ.answersOptions[0] +'</p>');
    } else if(timeDisplay.time > 0 && booleanVaule) {
        $(".aDisplay").append('<p "text-center" id = "qDisplay"> Correct! It is: '+ currentQ.answersOptions[0] +'</p>');
    } else if (timeDisplay.time > 0 && !booleanVaule) {
        $(".aDisplay").append('<p "text-center" id = "qDisplay"> Sorry! It is: '+ currentQ.answersOptions[0] +'</p>');
    };
    $(".imgDisplay").append('<img class= "imageClass" src="' + currentQ.imgUrl + '" >');
};

function displayReset() {
    $(".qDisplay").empty();
    $(".aDisplay").empty();
    $(".imgDisplay").empty();
};

function selectQuestion() {

    timeDisplay.reset();

    if(questionPool.length !=0){
        currentIndex = ranNum(questionPool.length);
        console.log("currentIndex is:  ", currentIndex);
        currentQ = questionPool[currentIndex];
        timeDisplay.start();
    }

    else {
        displayReset();
        $(".qDisplay").append('<p "text-center" id = "qDisplay"> All Done '+fname+' '+lname+', Heres how you did!</p>');
        $(".aDisplay").append('<p "text-center"> Correct Answers: '+ correctGuess +'</p>');
        $(".aDisplay").append('<p "text-center"> Incorrect Answers:: '+ wrongGuess +'</p>');
        $(".aDisplay").append('<p "text-center"> Unanswered is: '+ notAnswered +'</p>');
        $(".aDisplay").append('<button type="button" class="btn btn-info  btn-lg btn-block restartBtn">Start Over</button>');

        $(".restartBtn").click(function(){
            questionPool = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16];
            selectQuestion();
            correctGuess = 0;
            wrongGuess = 0;
            notAnswered = 0;
        });
    };

};

$(".startBtn").click(function(){
    fname = $("#first-name-text-input").val();
    lname = $("#last-name-text-input").val();
    userSelectedTime = $("#timeout-input").val();
    timeDisplay.time = parseInt(userSelectedTime);
    $("#initial_page").parent().remove();
    $(".full-bg-img").addClass("full-bg-img-startGame");
    $(".container").append(gamePlayHTML);
    $("p.timeDisplay").html('<p>Guess Time Left:      ' + parseInt(userSelectedTime) +  '  seconds </p>');
    selectQuestion();
    $(".startBtn").unbind("click");
});
