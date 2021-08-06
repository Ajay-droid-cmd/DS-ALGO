// To convert every first letter in a string to capitalize
function convert(ch) {
    str =ch.split("");
    for(let i = 0; i < str.length; i++) {
        if(i==0 && str[i] != ' ' || str[i] != ' ' && str[i-1] == ' '){
            if(str[i] >= 'a' && str[i] <= 'z'){
                str[i] = str[i].toUpperCase();
            }
        }else if(str[i] >= 'A' && str[i] <= 'Z'){
            str[i]= str[i].toLowerCase();
        }
    }
    let st=(str.join(""))
    return st;
}

let str ="tEsT tHis WORD"
console.log(convert(str));
// Second approach Using regex pattern
//function allTitleCase(str)
//{
 //   return str.replace(/\w\S*/g, function(tr)
/*	{
		return tr.charAt(0).toUpperCase() + tr.substr(1).toLowerCase();
	});
}

let str ="lkkaic jjwufbnv hashydetneshi aoiqofaslkajoif asjokfa."
console.log(allTitleCase(str));*/