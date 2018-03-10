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

const Q1 = new TriviaQuestion("Who is the only person to have served as both US Vice President and President without being elected to either office?", 
["Lyndon B. Johnson","George Washington","Harry Truman","Gerald Ford"], ["Gerald Ford"],"../images/Gerald_Ford.jpg");

const Q2 = new TriviaQuestion("How many squares are in normal Monopoly board?", [80,40,20,60], [40],"../images/Monopoly_Plus_Board.jpg");

const Q3 = new TriviaQuestion("What type of animal is a seahorse?", ["Crustacean","Arachnid","Fish","Shell"], ["Crustacean"],"../images/seahorse.jpg");

const Q4 = new TriviaQuestion("Which of the following dogs is the smallest?", ["Dachshund","Poodle","Pomeranian","Chihuahua"], ["Chihuahua"],"../images/chihuahua.jpg");

const Q5 = new TriviaQuestion("What color are zebras?", ["White with black stripes","Black with white stripes","Both of the above","None of the above."], 
["Black with white stripes"],"../images/zebras.png");

const Q6 = new TriviaQuestion("What existing bird has the largest wingspan?", ["Stork","Swan","Condor","Albatross"], ["Albatross"],"../images/albatross.jpg");

const Q7 = new TriviaQuestion("What is the biggest animal that has ever lived?", ["Blue whale","African elephant","Apatosaurus (aka brontosaurus)","Spinosaurus"], 
["Blue whale"],"../images/Blue-Whale.jpg");

const Q8 = new TriviaQuestion("What pets do more families own?", ["Birds","Cats","Dogs","Horses"], ["Dogs"],"../images/pets.png");

const Q9 = new TriviaQuestion("What animal lives the longest?", ["Ocean quahog (clam)","Red sea urchin","Galapagos tortois"," Rougheye rockfish"], 
["Ocean quahog (clam)"],"../images/Ocean_quahog.jpg");

const Q10 = new TriviaQuestion("Who was the longest serving non-royal world leader who rose to power after 1900?", 
["Muammar Gaddafi","Fidel Castro","Francisco Franco","Kim Il-sung"], ["Fidel Castro"],"../images/Castro.jpg");

const Q11 = new TriviaQuestion("In 1781, William Herschel discovered which planet?", ["Uranus","Neptune","Saturn","Jupiter"], ["Uranus"],"../images/Uranus.jpg");

const Q12 = new TriviaQuestion("The 'Great Northern War' was primarily a contest between which two countries?", 
["Denmark and Germany","Russia and Sweden", "England and Scotland","Great Britain and Norway"], ["Russia and Sweden"],"../images/greatnorthernwar.png");

const Q13 = new TriviaQuestion("Approximately how many turkeys are eaten each year on Thanksgiving in the United States?", ["10 million","28 million","46 million","80 million"], 
["46 million"],"../images/Thanksgiving-Turkey.jpg");

const Q14 = new TriviaQuestion("Today, our Thanksgiving is the fourth Thursday of November because", ["It is the date the Pilgrims landed in the New World", 
"This was the date set by President Franklin D. Roosevelt in 1939 and approved by Congress in 1941.","It was the date people voted to have it on."], 
["This was the date set by President Franklin D. Roosevelt in 1939 and approved by Congress in 1941"]);

const Q15 = new TriviaQuestion("The Pilgrims came to the New world seeking religious freedom and were also called:", 
["The Puritans because they wanted to purify the teachings and ceremonies of the Church of England",
"The Great Explorers","The Wanderers"], ["The Puritans because they wanted to purify the teachings and ceremonies of the Church of England"],"../images/Puritans.jpg");

const Q16 = new TriviaQuestion("Which two actors directed themselves in movies and won Oscars for Best Actor?", 
["Al Pacino and Timothy Hutton","Jack Nicholson and Kevin Spacey","Laurence Olivier and Roberto Benigni","Tom Hanks and Paul Newman"], ["Laurence Olivier and Roberto Benigni"], 
"../images/Roberto_Benigni.jpg");

const Q17 = new TriviaQuestion("Which movie won Best Picture of Oscars 2018?", ["Call Me by Your Name","The Shape of Water",
"Three Billboards Outside Ebbing, Missouri","Phantom Thread","All the Money in the World"], 
["The Shape of Water"], "../images/The-Shape-of-Water.jpg");

const questionPool = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,Q13,Q14,Q15,Q16,Q17];

function ranNum(num) {
    return Math.floor(Math.random() * num)
}

var userSelectedTime = 0;

var timeDisplayStart = false;

var timeDisplay = {
    time = userSelectedTime,

    reset: function() {
        timeDisplay.time = userSelectedTime;
        timeDisplayStart = false;
    },

    start: function() {
        if(!timeDisplayStart) {
            $("#timeDisplay").text(timeDisplay.time);
            setInterval(timeDisplay.count, 1000);
            timeDisplayStart = true;
        }
    },

    count: function() {
        $("#timeDisplay").text(timeDisplay.time);
        setInterval(timeDisplay.time--, 1000);
    }

}