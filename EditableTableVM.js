// EditableTableVM CLASS
var EditableTableVM = function() {
	var self = this;

	//the view state between the tables
	this.isEditView = ko.observable(false);
	this.headings = [];

	this.init();
	this.load();

	this.switchView = function() {
		if(self.isEditView()) {
			self.isEditView(false);
		}
		else {
			self.isEditView(true);
		}
	}

	this.removeListing = function(listing) {
		self.listings.remove(listing);
	}

	this.addListing = function() {
		self.listings.push(new Listing({
			mls: "",
			street: "",
			zip: "",
			saleDate: "",
			bedCount: "",
			bathCount: "",
			yearBuilt: "",
			gla: "",
			dom: "",
			price: ""
		}));
	}
}

EditableTableVM.prototype.init = function() {
	this.listings = ko.observableArray([]);
	this.listingTableHeadings = ko.observableArray([]);
}

EditableTableVM.prototype.load = function() {
	this.listingRepo = this.loadListings();
	this.tableHeadRepo = this.loadHeadings();
}

//makes a call the the listing repo for the listing information
EditableTableVM.prototype.initData = function() {
	var jsonString = '{"headings":[{"name":"MLS","pattern":"bla"},{"name":"Street","pattern":"bla"},{"name":"Zip Code","pattern":"bla"},{"name":"Sale Date","pattern":"bla"},{"name":"Bed","pattern":"bla"},{"name":"Bath","pattern":"bla"},{"name":"Year","pattern":"bla"},{"name":"GLA","pattern":"bla"},{"name":"DOM","pattern":"bla"},{"name":"Price","pattern":"bla"}],"listings":[{"mls":"12345","street":"123 Sesame St","zip":"98765","saleDate":"10-10-10","bedCount":3,"bathCount":2,"yearBuilt":2000,"gla":1500,"dom":100,"price":300000},{"mls":"31231","street":"987 A Street","zip":"12345","saleDate":"10-10-10","bedCount":3,"bathCount":2,"yearBuilt":2000,"dom":100,"gla":1500,"price":300000}]}';
	return JSON.parse(jsonString);
}

//makes a call the the listing repo for the listing information
EditableTableVM.prototype.loadListings = function() {
	// LOAD LISTINGS
	for(var i = 0; i < this.listingRepo.listings.length; i++) {
		var listing = this.listingRepo.listings[i];

		this.listings.push(
			new Listing(listing)
		);
	}
}

EditableTableVM.prototype.loadHeadings = function() {
	// LOAD HEADINGS
	for(var j = 0; j < this.tableHeadRepo.headings.length; j++) {
		var heading = this.tableHeadRepo.headings[j];

		this.listingTableHeadings.push(
			new Heading(heading.name, heading.pattern)
		);

		this.headings.push(
			heading.name
		);
	}
}

//submits the final data to the data layer
EditableTableVM.prototype.submit = function() {
	var json = this.toJson();

	console.log("json", JSON.parse(json));
	//this.displayJson(json);
}

//used to convert the ko object into JS and return the data portion in JSON
EditableTableVM.prototype.toJson = function() {
	var json = ko.toJS(this);

	return JSON.stringify(json.listings);
}

EditableTableVM.prototype.displayJson = function (jsonOutput) {
    var txt = jsonOutput;

    var recipe = window.open('','ResultWindow','width=600,height=600');
    var html = '<html><head><title>Result Window</title> <script type="text/javascript" src="prettify.js"></script> </head><body> ' + txt + '</body></html>';

    recipe.document.open();
    recipe.document.write(html);
    recipe.document.close();

    return false;
}