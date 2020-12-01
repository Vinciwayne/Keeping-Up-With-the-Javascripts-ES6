


function Car(model, color, year, plate) {
this.model = model;
this.color = color;
this.year = year;
this.plate = plate;
}

Car.prototype.getServices = function () {
return this.availableServices;
};

function regularCar(model, color, year, plate) {
Car.call(this, model, color, year, plate);
Car.availableServices = ['wash', 'wax', 'vacuum'];
}

function SUVCar(model, color, year, plate) {
Car.call(this, model, color, year, plate);
Car.availableServices = ['wash', 'wax', 'vacuum', 'leather polish'];
}

function SportCar(model, color, year, plate) {
Car.call(this, model, color, year, plate);
Car.availableServices = ['wash', 'wax', 'vacuum', 'leather polish'];
}

function WashJob(car, selectedServices) {
this.car = car;
this.selectedServices = selectedServices;
}

WashJob.prototype.addCar = function (model, color, year, plate) {
this.car = new Car(model, color, year, plate);
return this.car;
};

WashJob.prototype.addService = function (serviceType) {
this.selectedServices =serviceType;
return this.selectedServices;
};


///EZEBUIRO UCHECHUKWU VINCENT 