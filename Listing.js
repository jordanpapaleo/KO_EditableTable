// Listing Class
var Listing = function(listing) {
	var self = this;

	this.mls = ko.observable(listing.mls);
	this.street = ko.observable(listing.street);
	this.zip = ko.observable(listing.zip);
	this.saleDate = ko.observable(listing.saleDate);
	this.bedCount = ko.observable(listing.bedCount);
	this.bathCount = ko.observable(listing.bathCount);
	this.yearBuilt = ko.observable(listing.yearBuilt);
	this.gla = ko.observable(listing.gla);
	this.dom = ko.observable(listing.dom);
	this.price = ko.observable(listing.price);

// VALIDATION PROPERTIES
	this.isValidMls = ko.observable(true);
	this.isValidStreet = ko.observable(true);
	this.isValidZip = ko.observable(true);
	this.isValidSaleDate = ko.observable(true);
	this.isValidBedCount = ko.observable(true);
	this.isValidBathCount = ko.observable(true);
	this.isValidYearBuilt = ko.observable(true);
	this.isValidGla = ko.observable(true);
	this.isValidDom = ko.observable(true);
	this.isValidPrice = ko.observable(true);
// END VALIDATION PROPERTIES

// VALIDATION
	this.validatedMls = ko.computed({
        read: this.mls,
        write: function (value) {
        	var isNumber = this.validateIsNumber(value);

        	if(!isNumber) {
                self.isValidMls(false);
        	}
            else {
                self.isValidMls(true);
            }

            self.mls(value);
        },
        owner: this
    });

	this.validateStreet = ko.computed({
		read: this.street,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidStreet(false);
            }
            else {
                self.isValidStreet(true);
            }

            self.street(value);
        },
        owner: this
    });

    this.validateZip = ko.computed({
		read: this.zip,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidZip(false);
            }
            else {
                self.isValidZip(true);
            }

            self.zip(value);
        },
        owner: this
    });

    this.validateSaleDate = ko.computed({
		read: this.saleDate,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidSaleDate(false);
            }
            else {
                self.isValidSaleDate(true);
            }

            self.saleDate(value);
        },
        owner: this
    });

    this.validateBedCount = ko.computed({
		read: this.bedCount,
        write: function (value) {
        	var isNull = this.validateIsNull(value);
        	var isNumber = this.validateIsNumber(value);

            if (isNull || !isNumber) {
                self.isValidBedCount(false);
            }
            else {
                self.isValidBedCount(true);
            }

            self.bedCount(value);
        },
        owner: this
    });

    this.validateBathCount = ko.computed({
		read: this.bathCount,
        write: function (value) {
        	var isNull = this.validateIsNull(value);
        	var isNumber = this.validateIsNumber(value);

            if (isNull || !isNumber) {
                self.isValidBathCount(false);
            }
            else {
                self.isValidBathCount(true);
            }

            self.bathCount(value);
        },
        owner: this
    });

    this.validateYearBuilt = ko.computed({
		read: this.yearBuilt,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidYearBuilt(false);
            }
            else {
                self.isValidYearBuilt(true);
            }

            self.yearBuilt(value);
        },
        owner: this
    });

    this.validateGla = ko.computed({
		read: this.gla,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidGla(false);
            }
            else {
                self.isValidGla(true);
            }

            self.gla(value);
        },
        owner: this
    });

    this.validateDom = ko.computed({
		read: this.dom,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidDom(false);
            }
            else {
                self.isValidDom(true);
            }

            self.dom(value);
        },
        owner: this
    });

    this.validatePrice = ko.computed({
		read: this.price,
        write: function (value) {
        	var isNull = this.validateIsNull(value);

            if (isNull) {
                self.isValidPrice(false);
            }
            else {
                self.isValidPrice(true);
            }

            self.price(value);
        },
        owner: this
    });
// END VALIDATION

// FORMATTING
	this.formattedPrice = ko.computed({
        read: function () {
            return '$' + self.price();
        },
        write: function (value) {
            value = parseFloat(value.replace(/[^\.\d]/g, ""));
            self.price(isNaN(value) ? 0 : value);
        },
        owner: this
    });
// END FORMATTING
}

Listing.prototype.validator = function(value, proptery) {
	var isNull = this.validateIsNull(value);

    if (isNull) {
        self.isValidPrice(false);
    }
    else {
        self.isValidPrice(true);
    }

    el(value);
}

Listing.prototype.validateIsNull = function(value) {
	var isNull = (value) ? false : true;

	return isNull;
}

Listing.prototype.validateIsNumber = function(value) {
	var isNum = false;

	if(this.validateIsNull(value)) {
		isNum = !isNaN(value);
	}

	return isNum;
}

Listing.prototype.validateIsString = function(value) {
	var isString = (typeof(value) === "string") ? true : false;

	return isString;
}