const arraylist = [
  {
    question : `
  1). Humayun was born in the year ___________
              (A) 1508
              (B) 1608
              (C) 1708
              (D) 1808\n`,
    answer : "A"
  },
  {
    question : `
  2). Who Invented the 3-D printer?
              (A) Nick Holonyak
              (B) Elias Howe
              (C) Chuck Hull
              (D) Christiaan Huygens\n`,
    answer : "C"
  },
  {
    question : `
  3). What is the maximum number of Members in Lok Sabha?
              (A) 512
              (B) 542
              (C) 552
              (D) 532\n`,
    answer : "C"
  },
  {
    question : `
  4). Who was court poet of Samudragupta?
              (A) Chand Bardai
              (B) Bhavabhuti
              (C) Banabhatta
              (D) Harishen\n`,
    answer : "D"
  }, 
  {
    question : `
  5). Fatehpur Sikri was founded as the capital of the Mughal Empire by ______
              (A) Jahangir
              (B) Akbar
              (C) Babur
              (D) Humayun\n`,
    answer : "B"
  },
  {
    question : `
  6). Which Veda depicts the information about the most ancient Vedic age culture?
              (A) Atharvaveda
              (B) Samaveda
              (C) Rig Veda
              (D) Yajurveda\n`,
    answer : "C"
  },
  {
    question : `
  7). Which of the following rulers issued copper coins named as Jittal?
              (A) Iltutmish
              (B) Quli Qutub Shah
              (C) Mohammad bin Tughlaq
              (D) Firoz Shah Tughlaq\n`,
    answer : "A"
  }, 
  {
    question : `
  8). Who was the first Tirthankara of the Jains?
              (A) Ajitnath
              (B) Rishabhdev
              (C) Aristhenemi
              (D) Parshwnath\n`,
    answer : "B"
  },
  {
    question : `
  9). The maginot line exists between which country?
              (A) France and Germany
              (B) Germany and Poland
              (C) Namibia and Angola
              (D) USA and Canada\n`,
    answer : "A"
  },
  {
    question : `
  10). The Grand Canyon located in which country? "+
            (A) Ghana
            (B) The US
            (C) Canada
            (D) Bolivia\n`,
    answer : "B"
  }
];

Score = 0
const Chalk = require("chalk")
var read = require("readline-sync")
var reply1 = read.question("Welcome to Quiz !\n")
var reply2 = read.question("Press e for exit and c for continue....\n")
if(reply2 == "e" || reply2 == "E"){
  console.log("Thankyou for your time..!")
  } else if(reply2 == "c" || reply2 == "C"){
  for(var i=0;i<arraylist.length;i++){
    var answer = read.question(arraylist[i].question)
    if (answer.toUpperCase() == arraylist[i].answer){
      console.log(Chalk.green("You are Right! "))
      Score += 1
    } else {
      console.log(Chalk.red("Oops! Wrong Answer"))
    }
  }if (Score <= 0){
    Score = 0
    console.log("Updated Score: ",Score)
  } else {
    console.log("Updated Score: ",Score)
  }
}

