var fs = require('fs');

function loadData() {
    return JSON.parse(fs.readFileSync('players.json'));
}

function saveData(data) {
	var obj = {
		players: data
	};

	fs.writeFileSync('players.json', JSON.stringify(obj));
}

function getPlayers(player) {
	
}

module.exports = {
    loadData: loadData,
    saveData: saveData,
    getPlayers: getPlayers
}