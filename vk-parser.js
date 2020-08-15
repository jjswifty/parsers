const musicList = ["Wex & Kiddo Laser", "Ya Soshla S Uma", "", "Rich Brian", "Keith Ape", "XXXTENTACION", "Gospel", "", "HOME ANIMAL", "Стакан за стаканом", "", "FOVLA", "MONSTER KILL", "", "BER$$ERKER", "Белая ночь [#NDNF_music]", "", "freddie dredd", "i gotta", "", "Shinigami  Tenshi", "Underground City", "", "bbno$", "lentra", "quarantine freestyle", "", "bbno$, So Loki", "fragile", "", "City Morgue", "ZillaKami", "SosMula", "THE BALLOONS", "", "RHODAMINE", "Tennessee (feat. Sixdez)", "", "ЧЁРНЫЕ ГЛАЗА", "Чёрные глаза phonk (boosted by Ibr@)", "", "Rich Brian", "Offset", "Attention", "", "BLOCKBUDDHA", "robbery", "prod. SMOKAMANE", "psych0", "Paris", "", "Young Thug", "Gunna", "Surf (feat. Gunna)", "", "MAKISHIMA RECORDS", "YOU BLYADINA", "", "makishima records", "дед мороз и лето", "", "MAKISHIMA RECORDS", "Phonk edition", "", "XXXTENTACION", "Trippie Redd", "Fuck Love", "", "Stephane Deschezeaux", "Do U Wanna", "", "NERONUS", "PHONK DEALER", "", "Yeah Yeah Yeahs", "Dance till you're dead", "", "Yung Gravy", "bbno$", "Justin Bieber Wrist", "", "Makishima", "bara bara bere bere(phonk edition)", "", "GONE.Fludd", "ВКУС ЯДА (feat. IROH)", "prod. by Toreno", "BEXEY", "JACKBOY", "LONDON TO 1800", "", "bbno$, So Loki", "okay", ""]
// just for test. also this is my music list.

function parser(element) {
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

    let indexes = []; 
    let idx = list.indexOf('')

    while (idx != -1) {
        indexes.push(idx)
        idx = list.indexOf('', idx + 1)
    }
    console.log('ti pidor, my friend.')
    for (let i = 0; i < indexes.length; i++) {
        sortedList = [...sortedList, list.slice(indexes[i], indexes[i + 1]).filter(e => e !== '')]
    }

    for (let i = 0; i < sortedList.length; i++) {
        let song = endProduct[sortedList[i][sortedList[i].length - 1]] = new Object()
        song.singer = new Object()
        for (let j = 0; j < sortedList[i].length - 1; j++) {
            song.singer[j] = sortedList[i][j]
        }
        song.song = sortedList[i][sortedList[i].length - 1]
    }

    console.log('Список песен: ', endProduct)
}

// parser(document.querySelector('.audio_page__rows_wrap')) - and let's goo