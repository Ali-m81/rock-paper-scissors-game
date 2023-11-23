let rules = document.querySelector('#b-rules');
let law = document.querySelector('#law-game');
let close = document.querySelector('#close');
let main = document.querySelector('#main-page');
let iteam = document.querySelectorAll('.iteam');
let img = document.querySelectorAll('.iteam img');
let SelectRules = document.querySelector('#select-rules');
let YourPickedIMG = document.querySelector('#your-picked img');
let HousePickedImg = document.querySelector('#house-picked img');
let HousePicked = document.querySelector('#house-picked');
let YourPicked = document.querySelector('#your-picked');
let GameStart = document.querySelector('#game-start');
let TxtGame = document.querySelector('#txt-game');
let picked = document.querySelector('#picked');
let win  = document.querySelector('#win');
let lose  = document.querySelector('#lose');
let equal = document.querySelector('#equal');
let again   = document.querySelector('#again');
let num   = document.querySelector('#num');
let YTxt = document.querySelector('#y');
let HTxt = document.querySelector('#h');
let scissors ='images/icon-scissors.svg';
let spoke ='images/icon-spock.svg';
let paper ='images/icon-paper.svg';
let rock ='images/icon-rock.svg';
let lizard ='images/icon-lizard.svg';
let  computerSelection,PlayerSelection,WinCheck,EqualCheck,computerChoice,playerChoice,point = 0;
        // create a variable in the ;ist of randomize
 let list = [
   scissors,
   spoke,
    paper,
    rock,
    lizard,
]

            // button to change opacity
rules.addEventListener('click' , ()=>{
law.style.display = 'flex';
main.style.opacity = '.3' ;
})

close.addEventListener('click' , ()=>{
    law.style.display = 'none';
    main.style.opacity = '1' ;
    })
    img.forEach((iteam)=>{
        iteam.addEventListener('click' , ()=>{
        SelectRules.style.display = 'none';
        GameStart.style.display = 'block';
         PlayerSelection = iteam.getAttribute('src');
        YourPickedIMG.setAttribute('src' , PlayerSelection);
        if(PlayerSelection==scissors){
            YourPicked.style.border = 'solid 1.5rem #e89f0f';
         } else if(PlayerSelection==paper){
             YourPicked.style.border = 'solid 1.5rem #4b66f1';
         } else if(PlayerSelection==spoke){
             YourPicked.style.border = 'solid 1.5rem #40b8cd';
         } else if(PlayerSelection==rock){
             YourPicked.style.border = 'solid 1.5rem #db3d5b';
         } else if(PlayerSelection==lizard){
             YourPicked.style.border = 'solid 1.5rem #8751e2';
         }
            // randomization for computer role
        computerSelection = list[Math.floor(Math.random() * list.length)]
        HousePickedImg.setAttribute('src' , computerSelection);
     check();
        HousePickedImg.style.display = 'flex';
        HousePicked.style.background = '#fff';
        HousePicked.style.position = 'absolute';
        HousePicked.style.left = '20rem'
        YourPicked.style.position = 'absolute';
        setTimeout(() => {
            if(computerSelection==scissors){
                HousePicked.style.border = 'solid 1.5rem #e89f0f';
                } if(computerSelection==paper){
                    HousePicked.style.border = 'solid 1.5rem #4b66f1';
                } if(computerSelection==spoke){
                    HousePicked.style.border = 'solid 1.5rem #40b8cd';
                } if(computerSelection==rock){
                    HousePicked.style.border = 'solid 1.5rem #db3d5b';
                } if(computerSelection==lizard){
                    HousePicked.style.border = 'solid 1.5rem #8751e2';
                }
                // to display the result of the game
        setTimeout(() => {
            if(window.innerWidth>800){
            YourPicked.style.transform= 'translateX(-20rem)';
            HousePicked.style.transform= 'translateX(20rem)';
            YTxt.style.transform= 'translateX(-20rem)';
            HTxt.style.transform= 'translateX(20rem)';}
            if(EqualCheck==true){
            equal.style.transform = 'rotatey(0deg)';
            equal.style.left = '2.5rem';
            EqualCheck = false;
            }
            if(WinCheck==1){
            win.style.transform = 'rotatey(0deg)';
            }else if(WinCheck==0){
            lose.style.transform = 'rotatey(0deg)';
            }
            again.style.transform = 'rotatey(0deg)';
        }, 2000);
               num.innerHTML = point;
               console.log(point)
            }, -2000);
        })
        
    })
                // replay button
    again.addEventListener('click' , ()=>{
        YourPickedIMG.setAttribute('src' , '');
        HousePickedImg.setAttribute('src' , '');
        SelectRules.style.display = 'flex';
        GameStart.style.display = 'none';
        YourPicked.style.transform= 'translateX(0rem)';
        HousePicked.style.transform= 'translateX(0rem)';
        YTxt.style.transform= 'translateX(0rem)';
       HTxt.style.transform= 'translateX(0rem)';
       win.style.transform = 'rotatey(90deg)';
       lose.style.transform = 'rotatey(90deg)';
       equal.style.transform = 'rotatey(90deg)';
       again.style.transform = 'rotatey(90deg)';
     
    })
   
    


            //   a function to check the result of the game
 function check(){
    playerChoice = PlayerSelection;
    computerChoice = computerSelection;
    if(playerChoice===scissors && computerChoice===paper||computerChoice===lizard){
        point+=1
        WinCheck = 1;
    }else if(playerChoice===rock && computerChoice===rock||computerChoice===scissors){
        point+=1
        WinCheck = 1;
    }else if(playerChoice===paper && computerChoice===spoke||computerChoice===rock){
        point+=1
        WinCheck = 1;
    }else if(playerChoice===rock && computerChoice===scissors||computerChoice===lizard){
        point+=1
        WinCheck = 1;
    } else if(playerChoice===lizard && computerChoice===paper||computerChoice===spoke){
        point+=1
        WinCheck = 1;
    }else if(playerChoice===computerChoice){
        EqualCheck = true;
        WinCheck = 3;
    }else{
        point-=1;
        WinCheck = 0;
    }
};
