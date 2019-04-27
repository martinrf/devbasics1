class StringCalculator {
  add(values) {
    let numbers;
    const formatted = this.getFormat(values);
    numbers = formatted.values.split(formatted.delimiter);

    const invalids = numbers.filter((n) => n < 0);
    if (invalids.length) {
      throw new Error(`Negative numbers are not supported: ${invalids.join(", ")}`);
    }

    return this.getSum(numbers);
  }

  getSum(numbers) {
    return numbers.reduce((last, current, index) => {
      let sum = 0;
      if (index === 1 && last < 1000) {
        sum += parseInt(last);
      } else if (index !== 1) {
        sum += parseInt(last);
      }
      if (current <= 1000) sum += parseInt(current);
      return sum;
    });
  }

  getFormat(values) {
    const start = values.split("\n")[0];
    let delimiter = ",";
    const matched = start.match(/\[.+\]/g);
    if (matched){
      delimiter = matched[0].match(/\[.+\]/g)[0].replace("[", "").replace("]", "");
    } else if (start.startsWith("//")) {
      delimiter = start.slice(2);
    }
    values = values.replace(`//${delimiter}\n`, "");
    
    return { delimiter, values: values.replace("\n", delimiter) };
  }

}

module.exports = new StringCalculator();
