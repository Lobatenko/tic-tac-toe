/**
 * Created by Mauri on 25.12.17.
 */

window.onload = function(){

    var step = 0;

    document.getElementById("game").onclick = function(){
        //console.log(event);

        if (event.target.className = 'block'){
            if (step % 2 == 0){
                event.target.innerHTML = "x";
            }else{
                event.target.innerHTML = "0";
            }
            step++;

            checkWinner();
        }
    }



    // check Winner
    function checkWinner(){
        var allblock = document.getElementsByClassName('block');

        for (var i = 0; i < 9; i++){
        if (allblock[i].innerHTML == 'x' || allblock[i].innerHTML == '0' ){
            allblock[i].disabled = 'disabled';
            alert('1');
        }
    }

          if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x' ){
            alert("First player WIN!");
            reset();
        }
        if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
        if (allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0' ){
            alert("Second player WIN!");
            reset();
        }
    }
//   function isFill(){
//       var allblock = document.getElementsByClassName('block');
//
//    if (allblock == "x" && allblock= "0" ){
//        document.getElementsByClassName('block').disabled = "disabled";
//    }
//   }
    // reset cells
     function reset(){
        var allblock = document.getElementsByClassName('block');
            for (var i = 0; i <9; i++){
                allblock[i].innerHTML = " ";
            }
        }


}