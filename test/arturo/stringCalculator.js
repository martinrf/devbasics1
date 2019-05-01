class StringCalculator {

    add(values){
        if(values == "") return 0;

        let parts;
        let delimRegexp = /^\/\/(.|(\[.+\])+)\n.*/g;
        if(values.match(delimRegexp)){
            let delims = values.replace(delimRegexp,"$1");
            delims = delims.replace("][","|");
            delims = delims.replace(/\[|\]/g,"");
            delims = delims.replace(/\*/g,"\\*");
            parts =  values.substring(values.indexOf('\n')+1).split(new RegExp(delims));
        }else{
            parts = values.split(/,|\n|;/);
        }

        let sum = 0;
        let negativeValues = "";
        for(let idx= 0; idx < parts.length; idx++){
            let part = parts[idx].trim();
            let number = parseInt(part);

            if(number < 0 || number > 1000){
                if(number < 0) negativeValues += (negativeValues == "")?part:","+part;
                continue;
            }
            sum += number;
        }
        if(negativeValues != "") return "Negative values are not allowed ["+negativeValues+"]";
        return sum;
    }
}

module.exports = new StringCalculator();