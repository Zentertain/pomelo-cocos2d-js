var Util = require('util');

function checkCocos2dJsb() {
	if (typeof cc !== 'undefined' && cc && cc.sys && cc.sys.isNative) {
		return true;
	}

	return false;
}

var Root;
(function() {
	Root = this;
}());

if (checkCocos2dJsb()) {
	var console = cc;
	Root.console = console;
	cc.formatStr = Util.format;
}

var EventEmitter = require('events').EventEmitter;
Root.EventEmitter = EventEmitter;
var protobuf = require('pomelo-protobuf');
Root.protobuf = protobuf;
var Protocol = require('@zentertain/pomelo-protocol');
Root.Protocol = Protocol;
var encoding = require('text-encoding-utf-8');
Root.TextDecoder = encoding.TextDecoder;
Root.TextEncoder = encoding.TextEncoder;
var pomelo = require('@zentertain/pomelo-jsclient-websocket');
Root.pomelo = pomelo;