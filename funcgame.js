var player = [];
var comp = [];
var playXO = [0,0,0,0,0,0,0,0,0];
var numbers=[1,2,3,4,5,6,7,8,9];
var compnum = [1,2,3,4,5,6,7,8,9];
var compbeg = [1,3,7,9];
var count=0;
var counter=0;
var breaker=1;

function clicked(props){
    console.log(count);
    player.push(props);
    compnum = compnum.filter(item => item !== props)
    compbeg = compbeg.filter(item => item !== props)
    count++;
    document.getElementById("cell" + props).innerHTML = "X";
    document.getElementById("cell" + props).removeAttribute("onClick");
    numbers = numbers.filter(item => item !== props)
    playXO[props-1]="X";
    if(count==9){
       document.getElementById("result").innerHTML = "TIE!!!"
       document.getElementById("reloader").style.display='block'
    }
    else{
    checkout();
    if(breaker==1){;
    compmove();}
   else{
    document.getElementById("reloader").style.display='block'}
} 
}

function checkout(){
    if((playXO[0]==playXO[1])&&(playXO[2]=="O")&&(playXO[2]==playXO[1])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[2]==playXO[5])&&(playXO[8]=="O")&&(playXO[8]==playXO[2])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[6]==playXO[7])&&(playXO[8]=="O")&&(playXO[8]==playXO[7])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[0]==playXO[3])&&(playXO[3]=="O")&&(playXO[6]==playXO[3])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[1]==playXO[4])&&(playXO[4]=="O")&&(playXO[7]==playXO[4])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[5]==playXO[4])&&(playXO[3]=="O")&&(playXO[3]==playXO[4])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[0]==playXO[4])&&(playXO[8]=="O")&&(playXO[8]==playXO[4])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    else if((playXO[2]==playXO[4])&&(playXO[6]=="O")&&(playXO[6]==playXO[4])){
        document.getElementById("result").innerHTML = "COMPUTER WINS!!!"
        breaker=0
    }
    if(breaker==0){
    document.getElementById("reloader").style.display="block"}
}

function compmove(){
    let haha;
    if(count<3){
        if(playXO[4]=='0'){
            playXO[4]=="O";
            haha = 5;
        }
        else{
             haha=compbeg[Math.floor(Math.random() * compbeg.length)];
        }
        document.getElementById("cell" + haha).innerHTML = "O";
        comp.push(haha);
        playXO[haha-1]="O";
        compnum = compnum.filter(item => item !== haha)
        numbers = numbers.filter(item => item !== haha)
        compbeg = compbeg.filter(item => item !== haha)
        count++;
        console.log(count);
            }
    else if(count<=8){
        console.log(count)
        let haha;
        
        if((playXO[0]==playXO[1])&&(playXO[0]=="O")&&(playXO[2]!="X")){
            playXO[2]="O";
            haha=3;
        }
        else if((playXO[0]==playXO[2])&&(playXO[0]=="O")&&(playXO[1]!="X")){
            playXO[1]="O";
            haha=2;
        }
        else if((playXO[2]==playXO[1])&&(playXO[2]=="O")&&(playXO[0]!="X")){
            playXO[0]="O";
            console.log("hahha");
            haha=1
        }
        else if((playXO[2]==playXO[5])&&(playXO[2]=="O")&&(playXO[8]!="X")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[2]==playXO[8])&&(playXO[2]=="O")&&(playXO[5]!="X")){
            playXO[5]="O";
            haha=6
        }
        else if((playXO[5]==playXO[8])&&(playXO[5]=="O")&&(playXO[2]!="X")){
            playXO[2]="O";
            haha=3
        }
        else if((playXO[6]==playXO[8])&&(playXO[6]=="O")&&(playXO[7]!="X")){
            playXO[7]="O";
            haha=8
        }
        else if((playXO[7]==playXO[8])&&(playXO[7]=="O")&&(playXO[6]!="X")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[7])&&(playXO[6]=="O")&&(playXO[8]!="X")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[0]==playXO[3])&&(playXO[3]=="O")&&(playXO[6]!="X")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[3])&&(playXO[6]=="O")&&(playXO[0]!="X")){
            playXO[0]="O";
            console.log("hahha");
            haha=1
        }
        else if((playXO[0]==playXO[6])&&(playXO[6]=="O")&&(playXO[3]!="X")){
            playXO[3]="O";
            haha=4
        }
        else if((playXO[1]==playXO[4])&&(playXO[4]=="O")&&(playXO[7]!="X")){
            playXO[7]="O";
            haha=8
        }
        else if((playXO[1]==playXO[7])&&(playXO[7]=="O")&&(playXO[4]!="X")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[4]==playXO[7])&&(playXO[7]=="O")&&(playXO[1]!="X")){
            playXO[1]="O";
            haha=2
        }
        else if((playXO[3]==playXO[4])&&(playXO[4]=="O")&&(playXO[5]!="X")){
            playXO[5]="O";
            haha=6
        }
        else if((playXO[5]==playXO[4])&&(playXO[4]=="O")&&(playXO[3]!="X")){
            playXO[3]="O";
            haha=4
        }
        else if((playXO[3]==playXO[5])&&(playXO[5]=="O")&&(playXO[4]!="X")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[0]==playXO[4])&&(playXO[4]=="O")&&(playXO[8]!="X")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[8]==playXO[4])&&(playXO[4]=="O")&&(playXO[0]!="X")){
            playXO[0]="O";
            console.log("hahha");
            haha=1
        }
        else if((playXO[0]==playXO[8])&&(playXO[8]=="O")&&(playXO[4]!="X")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[2]==playXO[4])&&(playXO[4]=="O")&&(playXO[6]!="X")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[4])&&(playXO[4]=="O")&&(playXO[2]!="X")){
            playXO[2]="O";
            haha=3
        }
        else if((playXO[2]==playXO[6])&&(playXO[6]=="O")&&(playXO[4]!="X")){
            playXO[4]="O";
            haha=5
        }
        //hello split


        else if(((playXO[3]==playXO[7])&&(playXO[7]=='X')&&(playXO[6]=='0'))||((playXO[1]==playXO[3])&&(playXO[3]=='X')&&(playXO[0]=='0'))||((playXO[1]==playXO[5])&&(playXO[5]=='X')&&(playXO[2]=='0'))||((playXO[5]==playXO[7])&&(playXO[7]=='X')&&(playXO[8]=='0'))){
            if((playXO[3]==playXO[7])&&(playXO[7]=='X')&&(playXO[6]=='0'))
            {
                playXO[6]="O";
                haha=7;
            }
            else if((playXO[1]==playXO[3])&&(playXO[3]=='X')&&(playXO[0]=='0')){
                playXO[0]="O";
                haha=1;
                console.log("hahha");
            }
            else if((playXO[1]==playXO[5])&&(playXO[5]=='X')&&(playXO[2]=='0')){
                playXO[2]="O";
                haha=3;
            }
            else if((playXO[5]==playXO[7])&&(playXO[7]=='X')&&(playXO[8]=='0')){
                playXO[8]="O";
                haha=9;
                console.log("hahha");
            }
        }
        else if((playXO[0]==playXO[1])&&(playXO[0]=="X")&&(playXO[2]!="O")){
            playXO[2]="O";
            haha=3
        }
        else if((playXO[0]==playXO[2])&&(playXO[0]=="X")&&(playXO[1]!="O")){
            playXO[1]="O";
            haha=2
        }
        else if((playXO[2]==playXO[1])&&(playXO[2]=="X")&&(playXO[0]!="O")){
            playXO[0]="O";
            haha=1
        }
        else if((playXO[2]==playXO[5])&&(playXO[2]=="X")&&(playXO[8]!="O")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[2]==playXO[8])&&(playXO[2]=="X")&&(playXO[5]!="O")){
            playXO[5]="O";
            haha=6
        }
        else if((playXO[5]==playXO[8])&&(playXO[5]=="X")&&(playXO[2]!="O")){
            playXO[2]="O";
            haha=3
        }
        else if((playXO[6]==playXO[8])&&(playXO[6]=="X")&&(playXO[7]!="O")){
            playXO[7]="O";
            haha=8
        }
        else if((playXO[7]==playXO[8])&&(playXO[7]=="X")&&(playXO[6]!="O")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[7])&&(playXO[6]=="X")&&(playXO[8]!="O")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[0]==playXO[3])&&(playXO[3]=="X")&&(playXO[6]!="O")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[3])&&(playXO[6]=="X")&&(playXO[0]!="O")){
            playXO[0]="O";
            haha=1
        }
        else if((playXO[0]==playXO[6])&&(playXO[6]=="X")&&(playXO[3]!="O")){
            playXO[3]="O";
            haha=4
        }
        else if((playXO[1]==playXO[4])&&(playXO[4]=="X")&&(playXO[7]!="O")){
            playXO[7]="O";
            haha=8
        }
        else if((playXO[1]==playXO[7])&&(playXO[7]=="X")&&(playXO[4]!="O")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[4]==playXO[7])&&(playXO[7]=="X")&&(playXO[1]!="O")){
            playXO[1]="O";
            haha=2
        }
        else if((playXO[3]==playXO[4])&&(playXO[4]=="X")&&(playXO[5]!="O")){
            playXO[5]="O";
            haha=6
        }
        else if((playXO[5]==playXO[4])&&(playXO[4]=="X")&&(playXO[3]!="O")){
            playXO[3]="O";
            haha=4
        }
        else if((playXO[3]==playXO[5])&&(playXO[5]=="X")&&(playXO[4]!="O")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[0]==playXO[4])&&(playXO[4]=="X")&&(playXO[8]!="O")){
            playXO[8]="O";
            haha=9
        }
        else if((playXO[8]==playXO[4])&&(playXO[4]=="X")&&(playXO[0]!="O")){
            playXO[0]="O";
            haha=1
        }
        else if((playXO[0]==playXO[8])&&(playXO[8]=="X")&&(playXO[4]!="O")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[2]==playXO[4])&&(playXO[4]=="X")&&(playXO[6]!="O")){
            playXO[6]="O";
            haha=7
        }
        else if((playXO[6]==playXO[4])&&(playXO[4]=="X")&&(playXO[2]!="O")){
            playXO[2]="O";
            haha=3
        }
        else if((playXO[2]==playXO[6])&&(playXO[4]=="X")&&(playXO[4]!="O")){
            playXO[4]="O";
            haha=5
        }
        else if((playXO[4]!="X")&&(playXO[4]!="O")){
            playXO[4]="O";
            haha=5;
        }
        else{
            console.log(compbeg)
            haha=compbeg[Math.floor(Math.random() * compbeg.length)];
        }
        playXO[haha-1]="O";
        count++;
        document.getElementById("cell" + haha).innerHTML = "O";
        console.log(haha);
        document.getElementsByClassName("tile" + haha).innerHTML="O"
        compnum = compnum.filter(item => item !== haha)
        numbers = numbers.filter(item => item !== haha)
        compbeg = compbeg.filter(item => item !== haha)
        comp.push(haha);
        checkout();
    }
}

// function compmove(){
//     if(count<=8){
//         let haha=compnum[Math.floor(Math.random() * compnum.length)];
//         document.getElementById("cell" + haha).innerHTML = "O";
//         comp.push(haha);
//         console.log(comp);
//         compnum = compnum.filter(item => item !== haha)
//         numbers = numbers.filter(item => item !== haha)
//         count++;
//         // for(let i=0;i<(cns.length);i++){
//         //     for(let j=0;j<(cns[j].length);j++){
//         //         console.log(cns[i][j]);
//         //     }
//         // }
//     }
//     else if(count<=8){
//         var compbest=[];
//         for(let i=0;i<(cns.length);i++){
//             var temp=[];
//             for(let j=0;j<(cns[j].length);j++){
//                 temp.push(cns[i][j])
//             }
//             for(let j=0;j<(temp.length);j++){
//                 for(let k=0;k<(comp.length);k++){
//                     if(comp[k]==temp[j]){
//                         counter=counter+1;
//                     }
//                 }
//             }
//         }
//     }
// }