//To Find The Grade 
function grade(Score){
    if(Score >=80){
        return "A";
    }
    else if(Score >=60 && Score <80){
        return "B";
    }
    else if(Score >=50 && Score <60){
        return "C";
    }
    else if(Score >= 45 && Score <50){
        return "D";
    }
    else if(Score >=25 && Score <45){
        return "E";
    }
    else{
        return "F";
    }
}

console.log(grade(80))