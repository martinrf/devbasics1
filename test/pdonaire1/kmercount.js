
class KmerCount {
  constructor() {
    this.array = [];
  }
  formatArray(str = "ACACACAGT", mers = 3) {
    /* Method that return an array
     * with the collection of strings 
     */
    while (str.length >= mers) {
      this.array.push(str.substring(0, mers))
      str = str.slice(1)
    }
  }

  shuffle(){
    /* This method will sort the 
     * repeated string in the array's 
     */
    this.array = this.array.sort();
  }
  
  getResult() {
    /*
     * This method return the collection of repeated numbers
     */
    const dicList = this.array.map((item) => {
      const count = this.array.reduce((acc, current, index) => {
        let accumulator = typeof(acc) === "string" ? 0 : acc;
        if (index === 1 && this.array[index -1] === item) accumulator = 1;
        if (current === item)
          return accumulator + 1;
        else return accumulator;
      })
      return {[item]: count};
    });
    let strIncluded = [];
    let result = []
    dicList.forEach(dic => {
      const newStr = Object.keys(dic)[0];
      if (!strIncluded.includes(newStr)){
        strIncluded.push(newStr);
        result.push(dic);
      }
    });
    return result;
  }

}

module.exports = new KmerCount();
  