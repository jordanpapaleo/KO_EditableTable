//Heading Class
var Heading = function(name, pattern) {
	this.name = ko.observable(name);
	this.validationPattern = pattern;
}