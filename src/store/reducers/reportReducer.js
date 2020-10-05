const dataset = [];

const readTextFile = (file) => {
    const data = { id: file[0], title: '', author: '', releasedDate: '', content: '', text: '', tag: '' };
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file[1], false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                data.content = allText.split('\n')[0];
                data.text = allText;
                for (let text of allText.split('\n')) {
                    if (text.includes('Title:')) {
                        data.title = text.split('Title: ')[1]
                    }
                    if (text.includes('Author:')) {
                        data.author = text.split('Author: ')[1]
                    }
                    if (text.includes('Release Date:')) {
                        data.releasedDate = text.split('Release Date: ')[1]
                        break;
                    }
                }
            }
        }
    };
    rawFile.send(null);
    return data;
};


for (let id = 1; id < 52; id++) {
    let txtFileItem = require(`../../reports/report${id}.txt`)
    dataset.push(readTextFile([id, txtFileItem]))
}

const initState = {
    reports: dataset
};

const reportReducer = (state = initState, action) => {
    return state.reports;
};

export default reportReducer;