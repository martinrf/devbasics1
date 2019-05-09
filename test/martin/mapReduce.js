class MapReduce {
    map(data){
        let keyvalues = [];
        for(let i = 0; i < data.length; i++){
            for (let j = i; j < data[i].length - 2; j++){
                keyvalues.push({key : data[i].substr(j, 3), value: 1});
            }
        }
        return keyvalues
    }

    reduce(data) {
        const keys = data.reduce((all, w) => {
            if (all[w.key]) {
                all[w.key] += w.value;
                return all;
            }
            all[w.key] = w.value;
            return all;
        }, {});

        return Object.keys(keys).map(k => ({ key: k, value: keys[k] }));
    }
}

module.exports = new MapReduce();