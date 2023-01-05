const quizData =[{
    question:"How often does being online interfere with responsibilities in your life like work,projects, or chores?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often have you chosen to stay online rather than go out with friends or family?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often has your school work or paid emoyment suffere because of the time you spend online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"Before starting a task,how often do you find yourself first checking email or message online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often do you submit work or school assignments late because of the time you spend online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:" To what extent do you feel like being withhout the internet would be a serious issue for you?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often do you feel irritable or agitated when offline,only to find that those feelings subside when you go online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:" How often do you make new friends with other online users?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often have you become irritable or annoyed when someone comments on how much time you spend online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often do people close to you comment negatively about the amount time you spend on the internet or social media?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:" How often have you lied about how much time you spend online?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
{
    question:"How often o you use time on the internet to avoid thoughts about problems or issues in your life?",
    a: "Never",
    b: "Some of the time",
    c: "Most of the time",
    d: "Nearly all the time",
    
},
// {
//     question:" To what extent do you feel like being withhout the internet would be a serious issue for you?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:"After going offline,how often do you find yourself thinking about when you wll next be able to go online?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:"How often do you find that you are unable to drag yourself away from being online,ot promising youself(Just another 5 minutes)?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:"When you are offline ,how often do you think about being back online?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:" How often do you find yourself, when online or becoming irritable when someone interrupts you while you are online?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:"How often do you spend time online at the expense of engaging with friends or family?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:"How often do you lose track of time browsing the internet or social media?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:" How often does your internet use prevent you from getting the amount of sleep you need?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// },
// {
//     question:" How often have you tried and failed to reduce the amount of time you spend on theinternet and social media?",
//     a: "Never",
//     b: "Some of the time",
//     c: "Most of the time",
//     d: "Nearly all the time",
    
// }
];

let temp=0;
let index = 0;
var res=0;
let ans;

total = quizData.length;
total1 = 120;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    temp = getAnswer();
    console.log(temp); //for printing purpose only.
    res=parseInt(res) + parseInt(temp);
    console.log("Inner Result",res);
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("by")[0].innerHTML = `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Test Results</title>
<link href="../css/css" rel="stylesheet">
<link rel="stylesheet" media="all" href="../Mind_diag1.css">
</head>

<body class="layout-2018">


<header>
<div class="container">
  <div class="row">
    <div class="col-md-8">
      <br>
      <a href="options.html">Mental Health Analyzer</a>
    </div>
  </div>
</div>
</header>

<div class="core-layout__viewport">
  <div class="screener-results">
    <div class="hero">
      <div class="container">
        <h1>Your Depression test results</h1>
      </div>
    </div>
    <div class="container main">
      <div class="crest">
        <div class="row">
          <div class="col-md-12 score">
            <p>Your result is</p>
          </div>
        </div>
          <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 col-xs-12 flex-container">
              <div class="row">
                <div class="col-md-5 col-sm-5 col-xs-12 flex-item">
                  <dl class="interpretation">
                    <dt>0 - 25</dt>
                    <dd>Very Low Risk</dd>
                    <dt>26 - 50</dt>
                    <dd>Low Risk</dd>
                    <dt>51 - 75</dt>
                    <dd>Moderate Risk</dd>
                    <dt>76 - 100</dt>
                    <dd>High Risk</dd>
                    <dt>101 - 120</dt>
                    <dd>Severe Risk</dd>
                    </dl>
                    </div>
                    <div class="col-md-7 col-sm-7 col-xs-12 flex-item">
                    <div class="real-val" style="display:none;">14</div>
                    <div class="donut-wrapper animated">
                    <div class="donut-card">
<div class="donut-chart chart">
      <svg class="svg-donut" width="145px" height="145px" viewBox="0 0 42 42">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#31466d" stroke-width="4"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#12a5c6" stroke-width="4" stroke-dasharray="50 50" stroke-dashoffset="25"></circle>
      </svg>
<div class="chart-center">
  <span class="value">${res}</span>
  <span class="small">out of ${total1} </span>
  </div>
  </div>
  </div>
  </div>
<div class="subtitle-copy">
  <p>As per your result, if you have Moderate risk, High risk or Severe risk then you must consult with the doctors, Here are our some specialist that you can contact with them and keep your health stable.
  <br>

  <span id="center">
  <button value="sound" onclick="window.location.href='doctor.html'; "id="ce" class="btn btn-primary">Dr.Consultation</button>
  </span>
  </p>

 
  




  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


  


  <style>
 #center{
  align-item:center;
 }
#ce {
    /* padding: 52px; */
    margin-top: 95px;
    padding: auto 131px;
    height: 66px;
    width: 124px;
    font-size: 15px;
    font-weight: 500;
  }
  .svg-donut {
    transform: scale(1.15) rotate(0deg); }
  
  .donut-segment {
    animation: donut 3s forwards; }
  
  @keyframes donut {
    0% {
      stroke-dasharray: 0 100; }
    100% {
      stroke-dasharray: 35 65; } }
  
  .donut-chart {
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    background: #31466d;
    width: 145px;
    height: 145px; }
    .donut-chart .chart-center {
      top: 15px;
      left: 15px;
      width: 115px;
      height: 115px;
      background: #162c56; }
      .donut-chart .chart-center span {
        font-size: 60px;
        line-height: 100px;
        color: #e9edf0; }
</style>





</body>
</html>
`
}
loadQuestion(index);