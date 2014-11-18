var fs = require('fs');
var path = require('path');

var BaseCommand = require('../util/BaseCommand').BaseCommand;

var VersionCommand = Class(BaseCommand, function (supr) {

	this.name = 'version';
	this.description = 'prints the version of DevKit';

	this.exec = function () {
		var packageJson = path.join(__dirname, '..', '..', 'package.json');
		var packageInfo = JSON.parse(fs.readFileSync(packageJson));
		console.log(packageInfo.version);
	}
});

module.exports = VersionCommand;
