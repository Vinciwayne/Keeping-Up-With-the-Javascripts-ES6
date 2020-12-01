



class Vehicle {
    constructor(make,model,year,weight){
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }

}


class Cars extends Vehicle {

    constructor(make,model,year,weight) {
        super(make,model,year,weight);
        this.isDriving = false;
    }

    drive() {
        if (this.isDriving === true) {
            console.log("This car is on mode drive");
            return true;
        }
        this.isDriving = true;
        console.log("This Car set to drive true");
        return this.isDriving;
    }

    stop() {
        if (this.tripsSinceMaintenance === 100) {
            this.needsMaintenance = true;
            this.isDriving = false;
            this.isDriving = false;
            console.log(`This Car trip count is 100 so maintenance status ${this.needsMaintenance}`);
            return false;
        }
        if (this.isDriving === false) {
            console.log("Car is already in stop mode");
            return false;
        }
        this.isDriving = false;
        this.tripsSinceMaintenance++;
        console.log(`This Car trip count ${this.tripsSinceMaintenance}`);
        return this.isDriving;

    }

    repair() {
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
        console.log(`Need maintainable status ${this.needsMaintenance} no of trip set status ${this.tripsSinceMaintenance}`);
        return true;
    }
}



let car1 = new Cars("lamboghini", "aventador", 2016, 1.199);
let car2 = new Cars("range rover", "sport", 2019, 1.500);
let car3 = new Cars("mercedes benz", "G-wagon", 2014, 1.945);


for (let i=0; i<10; i++) {
    car1.drive();
    car1.stop();
}

for (let i=0; i<25; i++) {
    car2.drive();
    car2.stop();
}

car3.drive();
car3.stop();
car3.drive();
car3.stop();


console.log(`Car test results`);
console.log(`Car1: ${car1.make} ${car1.model}, year build: ${car1.year}, ${car1.weight} kg, ${car1.needsMaintenance ? 'needs maintenance' : 'another ' + car1.tripsSinceMaintenance + ' trips till maintenance'}`);
console.log(`Car2: ${car2.make} ${car2.model}, year build: ${car2.year}, ${car2.weight} kg, ${car2.needsMaintenance ? 'needs maintenance' : 'another ' + car1.tripsSinceMaintenance + ' trips till maintenance'}`);
console.log(`Car3: ${car3.make} ${car3.model}, year build: ${car3.year}, ${car3.weight} kg, ${car3.needsMaintenance ? 'needs maintenance' : 'another ' + car1.tripsSinceMaintenance + ' trips till maintenance'}`);


// EXTRA CREDIT

class Planes extends Vehicle{
    constructor(make,model,year,weight){
        super(make,model,year,weight);
        this.isFlying = false;
    }

    flying(){
        if (this.tripsSinceMaintenance === 100){
            this.NeedsMaintenance = true;
            this.isFlying = false;
            console.log(`Plane trip status ${this.tripsSinceMaintenance} need maintainable and cannot fly`);
            return false;
        }
        if (this.NeedsMaintenance === true){
            console.log(`Plane can not fly reason need Maintainable ${this.NeedsMaintenance} `);
            return false;
        }
        console.log("Plane is flying");
        this.isFlying = true;
        return true;
    }

    landing(){
        if (this.isFlying === false){
            console.log(`Plane alredy landed`);
            return false;
        }
        this.tripsSinceMaintenance++;
        console.log(`Plane status landing and trip total ${this.tripsSinceMaintenance}`);
        return true;
    }

    repair(){
        if (this.isFlying === true){
            console.log("plans is flying need landing for repair.");
            return;
        }
        this.NeedsMaintenance = false;
        this.tripsSinceMaintenance = 0;
        console.log(`Plane maintainable status ${this.NeedsMaintenance} no of trip set status ${this.tripsSinceMaintenance}`);
    }
}

let boeing707 = new  Planes();
console.log("Boeing 707 " + boeing707.landing());
console.log("Boeing 707 " + boeing707.flying());
boeing707.tripsSinceMaintenance = 100;
console.log("Boeing 707 " + boeing707.flying());
boeing707.landing();
boeing707.repair();

  


// EZEBUIRO UCHECHUKWU VINCENT 