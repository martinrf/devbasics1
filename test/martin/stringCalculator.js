class StringCalculator {
    add(values) {
        const inputDelimiter = this.getInputDelimitar(values);
        const numbers = this.parseAndSplitToNumbers(values, inputDelimiter);
        let sum = 0;
        numbers.forEach(number => {
            sum += Number(number);
        });
        return sum;
    }

    parseAndSplitToNumbers(values, customDelimiter) {
        if (customDelimiter !== "") {
            values = values.replace(/\/\//g, ",").replace(new RegExp(customDelimiter, "g"), ",");
        }
        return values.replace(/\n/g, ",").split(",");
    }

    getInputDelimitar(values) {
        let re = new RegExp("^\/\/(.*?)\\n.*", "g");
        let match = re.exec(values);
        return match && match.length > 1? match[1] : "";
    }
}

module.exports = new StringCalculator();