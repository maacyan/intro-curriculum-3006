'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/omikuji/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${username}>`);
	
	});
	robot.hear(/こんにちは>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('こんにちは ' + username);
	});
	robot.hear(/スロット/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['123', '332', '777', '001', '776'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${username}>`);
	
	});
};
