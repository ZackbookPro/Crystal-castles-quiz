
const quizData = [
    {
      question: "Crystal Castles was formed in what city?",
      a: "Toronto",
      b: "Los Angeles",
      c: "Chicago",
      d: "Montreal",
      correct: "a"
    },

    {
      question: "Their hit song “Crimewave” samples vocals from which band?",
      a: "Klaxtons",
      b: "Sonic Youth",
      c: "HEALTH",
      d: "The Cure",
      correct: "c"
    },

    {
      question: "During live performances, Alice would often sing the lyrics to this song over the “Reckless” instrumental",
      a: "Xxzxcuzx Me",
      b: "Through the Hosiery",
      c: "Love and Caring",
      d: "Baptism",
      correct: "b"
    },

    {
      question: "Crystal Castles performed “Alice Practice” for which scripted television show?",
      a: "Degrassi",
      b: "The Inbetweeners",
      c: "Skins",
      d: "Buffy the Vampire Slayer",
      correct: "c"
    },

    {
      question: "Which song was played live for several years before getting an official studio release?",
      a: "Exoskeleton",
      b: "Baptism",
      c: "Yes/No",
      d: "Kerosene",
      correct: "b"
    },

    {
      question: "After a long hiatus, Alice Glass popped up on the scene in 2012 with hair dyed what color?",
      a: "Purple",
      b: "Blonde",
      c: "Black",
      d: "Blue",
      correct: "a"
    },

    {
      question: "Alice's real first name is what?",
      a: "Alice",
      b: "Edith",
      c: "Mary",
      d: "Margaret",
      correct: "d"
    },

    {
      question: "Early Crystal Castles merchandise featured a blackened eye of which pop star?",
      a: "Cindy Lauper",
      b: "Madonna",
      c: "Whitney Houston",
      d: "Paula Abdul",
      correct: "b"
    },

    {
      question: "Crystal Castles name was inspired by which cartoon?",
      a: "She-Ra",
      b: "Thundercats",
      c: "Wonder Women",
      d: "Donkey-Kong",
      correct: "a"

    },

    {
      question: "Crystal Castles are influenced by Murder, blank looks on girls, and ....",
      a: "drugs",
      b: "crime",
      c: "knives",
      d: "rock",
      correct: "c"

    },

    {
      question: "According to Ethan, how did he meet Alice?",
      a: "At a party",
      b: "After on of his shows",
      c: "Reading to the blind",
      d: "In jail",
      correct: "c"

    },

    {
      question: "Pick the odd song out",
      a: "Tell Me What Too Swallow ",
      b: "Birds",
      c: "I Am Made of Chalk",
      d: "Not In Love",
      correct: "a"

    },

    {
      question: "If Alice could spend a day in an amusement park with any person, dead or alive, who would it be?",
      a: "Lydia Lunch",
      b: "Thurston Moore",
      c: "Helen Keller",
      d: "Rupaul Charles",
      correct: "c"

    },

    {
      question: "Alice performed half of a tour in 2011 with",
      a: "A cast for her broken arm",
      b: "Crutches for her broken leg",
      c: "Neckbrace for a neck injury",
      d: "Huge fake breast implants",
      correct: "b"

    },

    {
      question: "The lyrics to Black Panther were written by Alice when she was how old",
      a: "17",
      b: "14",
      c: "15",
      d: "18",
      correct: "b"

    },

]

let questionNum = 1
let grade = 0
let answer = ""

const questionDiv = document.querySelector('#question')
const answerADiv = document.querySelector('#a')
const answerBDiv = document.querySelector('#b')
const answerCDiv = document.querySelector('#c')
const answerDDiv = document.querySelector('#d')
const nextBtn = document.querySelector('#btn')

let score = document.getElementById('questionDiv')
let question = document.getElementById('question')
let questionUpdate = document.createElement('p')
let questionStatus = document.createElement('p')


let answerA = document.getElementById('a')
let answerB = document.getElementById('b')
let answerC = document.getElementById('c')
let answerD = document.getElementById('d')

let answerAText = document.createElement('p')
let answerBText = document.createElement('p')
let answerCText = document.createElement('p')
let answerDText = document.createElement('p')


const questionOne = () => {
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[0].question)

  answerAText.innerText = (quizData[0].a)
  answerBText.innerText = (quizData[0].b)
  answerCText.innerText = (quizData[0].c)
  answerDText.innerText = (quizData[0].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)

  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)



  
  

}

const questionTwo = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[1].question)

  answerAText.innerText = (quizData[1].a)
  answerBText.innerText = (quizData[1].b)
  answerCText.innerText = (quizData[1].c)
  answerDText.innerText = (quizData[1].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)


}

const questionThree = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')

  questionUpdate.innerText = (quizData[2].question)

  answerAText.innerText = (quizData[2].a)
  answerBText.innerText = (quizData[2].b)
  answerCText.innerText = (quizData[2].c)
  answerDText.innerText = (quizData[2].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFour = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[3].question)

  answerAText.innerText = (quizData[3].a)
  answerBText.innerText = (quizData[3].b)
  answerCText.innerText = (quizData[3].c)
  answerDText.innerText = (quizData[3].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFive = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[4].question)

  answerAText.innerText = (quizData[4].a)
  answerBText.innerText = (quizData[4].b)
  answerCText.innerText = (quizData[4].c)
  answerDText.innerText = (quizData[4].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionSix = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[5].question)

  answerAText.innerText = (quizData[5].a)
  answerBText.innerText = (quizData[5].b)
  answerCText.innerText = (quizData[5].c)
  answerDText.innerText = (quizData[5].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionSeven = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[6].question)

  answerAText.innerText = (quizData[6].a)
  answerBText.innerText = (quizData[6].b)
  answerCText.innerText = (quizData[6].c)
  answerDText.innerText = (quizData[6].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionEight = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[7].question)

  answerAText.innerText = (quizData[7].a)
  answerBText.innerText = (quizData[7].b)
  answerCText.innerText = (quizData[7].c)
  answerDText.innerText = (quizData[7].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionNine = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[8].question)

  answerAText.innerText = (quizData[8].a)
  answerBText.innerText = (quizData[8].b)
  answerCText.innerText = (quizData[8].c)
  answerDText.innerText = (quizData[8].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionTen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[9].question)

  answerAText.innerText = (quizData[9].a)
  answerBText.innerText = (quizData[9].b)
  answerCText.innerText = (quizData[9].c)
  answerDText.innerText = (quizData[9].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionEleven = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[10].question)

  answerAText.innerText = (quizData[10].a)
  answerBText.innerText = (quizData[10].b)
  answerCText.innerText = (quizData[10].c)
  answerDText.innerText = (quizData[10].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionTwelve = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[11].question)

  answerAText.innerText = (quizData[11].a)
  answerBText.innerText = (quizData[11].b)
  answerCText.innerText = (quizData[11].c)
  answerDText.innerText = (quizData[11].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionThirteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[12].question)

  answerAText.innerText = (quizData[12].a)
  answerBText.innerText = (quizData[12].b)
  answerCText.innerText = (quizData[12].c)
  answerDText.innerText = (quizData[12].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFourteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[13].question)

  answerAText.innerText = (quizData[13].a)
  answerBText.innerText = (quizData[13].b)
  answerCText.innerText = (quizData[13].c)
  answerDText.innerText = (quizData[13].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

const questionFifteen = () => {
  questionNum++
  questionStatus.innerText = (questionNum + '/15')
  questionUpdate.innerText = (quizData[14].question)

  answerAText.innerText = (quizData[14].a)
  answerBText.innerText = (quizData[14].b)
  answerCText.innerText = (quizData[14].c)
  answerDText.innerText = (quizData[14].d)

  question.appendChild(questionUpdate)
  score.appendChild(questionStatus)


  answerA.appendChild(answerAText)
  answerB.appendChild(answerBText)
  answerC.appendChild(answerCText)
  answerD.appendChild(answerDText)

}

//highlight answer Divs on click

//A
selectedAnswerA = () => {
  answerADiv.style.backgroundColor = "rgb(191, 191, 191)";
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "grey"
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "grey"
  answerCDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "grey"
  answerDDiv.style.borderRadius = "20px"

}

answerClickA = () => {
  setTimeout(selectedAnswerA, 100);
}

answerADiv.addEventListener('click', () => {
  answerClickA()
})

//B
selectedAnswerB = () => {
  answerBDiv.style.backgroundColor = "rgb(191, 191, 191)";
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "grey";
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "grey"
  answerADiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "grey"
  answerDDiv.style.borderRadius = "20px"
}

answerClickB = () => {
  setTimeout(selectedAnswerB, 100);
}

answerBDiv.addEventListener('click', () => {
  answerClickB()
})

//C
selectedAnswerC = () => {
  answerCDiv.style.backgroundColor = "rgb(191, 191, 191)";
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "grey"
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "grey"
  answerBDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "grey"
  answerDDiv.style.borderRadius = "20px"
}

answerClickC = () => {
  setTimeout(selectedAnswerC, 100);
}

answerCDiv.addEventListener('click', () => {
  answerClickC()
})

//D
selectedAnswerD = () => {
  answerDDiv.style.backgroundColor = "rgb(191, 191, 191)";
  answerDDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "grey"
  answerCDiv.style.borderRadius = "20px"
  answerADiv.style.backgroundColor = "grey"
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "grey"
  answerBDiv.style.borderRadius = "20px"
  
}

answerClickD = () => {
  setTimeout(selectedAnswerD, 100);
}

answerDDiv.addEventListener('click', () => {
  answerClickD()
})


//Remove answer div highlight
resetAnswerDiv = () => {
  answerADiv.style.backgroundColor = "grey";
  answerADiv.style.borderRadius = "20px"
  answerBDiv.style.backgroundColor = "grey"
  answerBDiv.style.borderRadius = "20px"
  answerCDiv.style.backgroundColor = "grey"
  answerCDiv.style.borderRadius = "20px"
  answerDDiv.style.backgroundColor = "grey"
  answerDDiv.style.borderRadius = "20px"

}



//Next question button
nextBtn.addEventListener('click', () => {
  if (questionNum === 1) {
    if (answerADiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }
    resetAnswerDiv()
    questionTwo()
  }

  else if (questionNum === 2) {
    if (answerCDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionThree()
  }

  else if (questionNum === 3) {
    if (answerBDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionFour()
  }
  else if (questionNum === 4) {
    if (answerCDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionFive()
  }
  else if (questionNum === 5) {
    if (answerBDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionSix()
  }
  else if (questionNum === 6) {
    if (answerADiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionSeven()
  }
  else if (questionNum === 7) {
    if (answerDDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionEight()
  }
  else if (questionNum === 8) {
    if (answerBDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv() 
    questionNine()
  }
  else if (questionNum === 9) {
    if (answerADiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionTen()
  }
  else if (questionNum === 10) {
    if (answerCDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionEleven()
    
  }

  else if (questionNum === 11) {
    if (answerCDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionTwelve()
  }

  else if (questionNum === 12) {
    if (answerADiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionThirteen()
  }

  else if (questionNum === 13) {
    if (answerCDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionFourteen()
  }
  else if (questionNum === 14) {
    document.getElementById("btn").innerHTML=
    "Finish";
    if (answerBDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    questionFifteen()
  }
  else if (questionNum === 15) {
    if (answerBDiv.style.backgroundColor === "rgb(191, 191, 191)"){
      grade++
  }  
    resetAnswerDiv()
    finishQuiz()
  }


}) 


//Shows final score of quiz
const finishQuiz = () => {
  answerADiv.remove()
  answerBDiv.remove()
  answerCDiv.remove()
  answerDDiv.remove()

  questionUpdate.innerText = ("Your score:" + grade + "/15")
  question.appendChild(questionUpdate)

}

questionOne()




/*const quiz = () => {
let questionBox = document.getElementById('question');

let insertQuestion = document.createElement('p')

//populate quiz with 3 questions from quizData array
let questions = []
  do {
      let picker = quizData[Math.floor(Math.random() * quizData.length)];
        if (questions.includes(picker)){
          continue;
        }
        else {
          questions.push(picker);
        }
    } while (questions.length < 3);
}

questionPick = (questions[0].question);

console.log(questionPick)*/