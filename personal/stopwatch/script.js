let hr=0;
let min=0;
let sec=0;
let microsec=0;

let timer= false;

function start(){
   timer=true
   stopwatch();
}

function stop(){
   timer=false
}

function reset(){
   timer=false

   let hr=0;
   let min=0;
   let sec=0;
   let microsec=0;

   document.getElementById("hr").innerHTML = "00";
   document.getElementById("min").innerHTML = "00";
   document.getElementById("sec").innerHTML = "00";
   document.getElementById("microsec").innerHTML = "00";
}

function stopwatch(){
      if(timer==true){
         microsec=microsec+1;
        
         if(microsec==100){
            sec=sec+1;
            microsec=0;
         } 
         if(sec==60){
            min=min+1;
            sec=0;
         } 
         if(min==60){
            hr=hr+1;
            min=0;
         } 

         let hrString=hr;
         let minString=min;
         let secString=sec;
         let microsecString=microsec;

         if(hr<10){
            hrString = "0" + hrString
         }
         if(min<10){
            minString = "0" + minString
         }
         if(sec<10){
            secString = "0" + secString
         }
         if(microsec<10){
            microsecString = "0" + microsecString
         }


         document.getElementById("hr").innerHTML = hrString;
         document.getElementById("min").innerHTML = minString;
         document.getElementById("sec").innerHTML = secString;
         document.getElementById("microsec").innerHTML = microsecString;
         setTimeout("stopwatch()",10)
      }
     
}
