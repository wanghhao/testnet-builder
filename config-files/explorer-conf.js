/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.webPort = 8080;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	"2AZMT7OZ5G4GNJUIJFN5USROFUDIV24P",
	"3APELPZXVCJE5UC52PYN3K5ECLIKVZMW",
	"7LLT2PP55ZHCQ2EE7WL4Q5ZSVDUYORUC",
	"DO4KYXFCTIVR7Z6ER427ULUUTSZ33XCD",
	"JBDK7H6POUFDDCZANIDFPGAXXKAH4W33",
	"JLMQDJQKEW5NUSZWY4RRVJJPLBFR22T2",
	"JXKWPSSS6M5H52WN25RAHNQV6SUJAUW6",
	"N46Q4ILJPMOKL2TP2VNVESHHIGTTVQXI",
	"OHKJLLQJT2VNFY4QOLSBXVYW2NJDYYKN",
	"Q2E3FUE5HPR6BAENETVK5JMT733RPLXX",
	"QFDVGTUL2CWFX4SMQIXCPB5B2COLYOQJ",
	"R2MKRC243V3V3OAWW2ZYFVVW5TH4OPJS"
];


/*'wss://trustnote.org/tg' */
exports.initial_peers = [
	'ws://127.0.0.1:6616'
];

console.log('finished explorer conf');
