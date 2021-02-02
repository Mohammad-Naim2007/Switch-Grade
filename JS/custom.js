//variable diclar;

function total(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);
    
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English marks :"+sub2+ "<br> Mathmatics mark :"+sub3+ "<br> Computer marks :" +sub4+ "<br> Science marks :" +sub5+ "Urdu marks :" +sub1+"<br>__________<br> total marks"+total;
    }
}
//Average function;

function average(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);
    
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var average=total/5;
        document.getElementById("avg").innerHTML = "your average marks is : "+average; //problem;
    }
}
// Grade function;

function grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);
    
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter mark in range of 100")
    }
    
    else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var average=total/5;
    }
    if(average>80 && average<=100){
        document.getElementById("grade").innerHTML = "your grade is A";
    }
    else if(average>75 && average<=80){
        document.getElementById("grade").innerHTML = "your grade is B+";
    }
    else if(average>70 && average<=75){
        document.getElementById("grade").innerHTML = "your grade is B";
    }
    else if(average>65 && average<=70){
        document.getElementById("grade").innerHTML = "your grade is C+";
    }
    else if(average>60 && average<=65){
        document.getElementById("grade").innerHTML = "your grade is D";
    }
    else if(average>50 && average<=60){
        document.getElementById("grade").innerHTML = "your grade is D+";
    }
    else{
        document.getElementById("grade").innerHTML = "your grade is F";
    }
    
}












