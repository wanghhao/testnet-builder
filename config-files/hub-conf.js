/*jslint node: true */
"use strict";

exports.clientName = 'TTT';
exports.minClientVersion = '1.1.0';
exports.WS_PROTOCOL = 'ws://';
// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6616;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

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

exports.initial_peers = [
];

console.log('finished hub conf');
