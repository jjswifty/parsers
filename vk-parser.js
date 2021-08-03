function parser(element) {
    const t0 = performance.now()
    let list = [];
    let sortedList = [];

    const endProduct = {};

    const recursyParser = (element) => {
        element.childNodes.forEach(node => {
            if (node.nodeName === 'SPAN' || node.nodeName === 'A') {
                list.push(node.textContent)
            }
            recursyParser(node)
        });
    }
    recursyParser(element)

    let indexes = []; // получаем сюда 
    let idx = list.indexOf('')

    while (idx != -1) {
        indexes.push(idx)
        idx = list.indexOf('', idx + 1)
    }

    for (let i = 0; i < indexes.length; i++) {
        sortedList.push(list.slice(indexes[i], indexes[i + 1]).filter(e => e !== ''))
    }

    for (let i = 0; i < sortedList.length; i++) {
        let song = endProduct[sortedList[i][sortedList[i].length - 1]] = new Object()
        song.singer = new Object()
        for (let j = 0; j < sortedList[i].length - 1; j++) {
            song.singer[j] = sortedList[i][j]
        }
        song.song = sortedList[i][sortedList[i].length - 1]
    }
    const t1 = performance.now();
    console.log("Function working for " + (t1 - t0) + " milliseconds.")
    console.log('Список песен: ', endProduct)
}


