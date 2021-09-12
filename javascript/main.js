//alert("La aplicación esta en estado inicial de desarrollo y el archivo principal javascript vinculado");
//console.log("La aplicación esta en estado inicial de desarrollo y el archivo principal javascript vinculado");
const NUM_DAYS = 7;
const NUM_ACTIVITYS = 6;
const MAX_CHECKS = 4;
const MIN_CHECKS = 1;

function insertActivity(index){
    var titleAtivity = "";
    var numRepetitions = 0;

    do{
        titleAtivity = prompt("Escribe el nombre de la actividad");
    }while(titleAtivity == null || titleAtivity == "");

        document.getElementById("title-th-" + index).innerText = titleAtivity;

    do{  

        numRepetitions = prompt("Escribe el número de repeticiones diarias entre 1 y 4");
        numRepetitions = parseInt(numRepetitions);

        if (isNaN(numRepetitions)) {

            alert("Porfavor asegurese que escribe un número");
        }
        else
        {
            if(numRepetitions < MIN_CHECKS || numRepetitions > MAX_CHECKS){
                
                alert("Porfavor asegurese que las repeticiones estan etre 1 y 4");          
            }
        }
    }while(numRepetitions < MIN_CHECKS || numRepetitions > MAX_CHECKS || isNaN(numRepetitions));

        var cellRep = document.getElementById("row-" + index);
        var cellData = cellRep.children;
        var cellInnerHTML = "";
        var i = 0;
        for (const cell in cellData) {
            if (cell > 0) {
                for (i = 0; i < numRepetitions; i++) {
                    if (numRepetitions == 1) {
                        cellInnerHTML = cellInnerHTML + "<input type='checkbox' class='checkData-1' />";
                    } else {
                        cellInnerHTML = cellInnerHTML + "<input type='checkbox' class='checkData' />";
                    }               
                }
                cellData[cell].innerHTML = cellInnerHTML;
                cellInnerHTML = "";
            }
        }

}

function load() {
    let arrayRows = new Array(NUM_ACTIVITYS);
    for (let index = 0; index < arrayRows.length; index++) {
        arrayRows[index] = document.getElementById("th-" + index);
        arrayRows[index].addEventListener(
            "click", 
            function(){insertActivity(index)}
            );
        arrayRows[index].addEventListener(
            "touchstart", 
            function(){insertActivity(index)}
            );
    }
}
document.addEventListener("DOMContentLoaded", load, false);
