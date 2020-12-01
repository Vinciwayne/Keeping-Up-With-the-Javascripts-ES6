





'use strict';

// import { range } from 'lodash';


  /**
   * Building class
   * 
   */

  class Building {

    constructor(floors = []) {
      this.floorNumber = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//range(-1,10);
      this.floors = [];
      this.inhabitants = 100;
      this.timeLimit = 180;
    }

    // generate floors with buttons, add to array
    setFloorOptions() {

      for (let i = -1; i<this.floorNumber.length; i++) {

        let floor = null;

          switch (i) {
            case -1:
              floor = new Floor(i, true, false);
              this.floors.push(floor);
              break;
            case 10:
              floor = new Floor(i, false, true);
              this.floors.push(floor);
              break;
            default:
              floor = new Floor(i);
              this.floors.push(floor);
          }
      }
    }
  }



  /** 
   * Floor class
   * 
   */

  class Floor {

    constructor(floorNumber = 0, buttonUp = true , 
                buttonDown = true) {
      this.floorNumber = floorNumber;
      this.buttonUp = buttonUp;
      this.buttonDown = buttonDown;
    }
  }



  /** 
   * ElevatorsController class
   * 
   */

  class ElevatorsController {

    constructor(e1, e2) {
      this.elevator = [e1, e2];
      this.floorsNumber = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//range(-1,10);
      this.elevatorToUse = [];
      this.maxQueries = 10;
      this.userQueries = [];
      this.queryLasting = [];
      // this.startTime = [];
      // this.endTime = [];
    }


    /**
     * generates elevator call queries 
     */

    generateQueries() {

      for (let i = 0; i < this.maxQueries; i++) {

        if (i === 0) {

          // trying to get 2 different random numbers -
            // start and end cannot be at the same floor
          while (true) {

            // when pushing first item, the start position is random
            const start = this.helper_generateRandomNumber() ;
            const destination = this.helper_generateRandomNumber() ;

              if (start !== destination) {
                const query = new UserQuery(start, destination);
                this.userQueries.push(query);
                break;
              }
          }
        }
          else {

            // trying to get 2 different random numbers -
            // start and end cannot be at the same floor
            while (true) {

              // when pushing other positions the start position have 
              // to equal last destination
              const lastPosition = this.userQueries[i-1].
                destination;
              const destination = this.helper_generateRandomNumber();

                if (lastPosition !== destination) {
                  const query = new UserQuery(lastPosition, 
                    destination);
                  this.userQueries.push(query);
                  break;
                }
            }
          }
      }
    }


    /**
     * generates a number in a range
     */

     helper_generateRandomNumber() {

       // generates a number in range of floors
       // and returns it
       let number = ((Math.round(Math.random() 
        * 12)) - 2);

        if (number < this.floorsNumber[0]) {
          number = this.floorsNumber[0];
        }

        if (number > this.floorsNumber[this.
          floorsNumber.length-1]) {
          number = this.floorsNumber[this.
            floorsNumber.length-1];
        }

      return number;
     }


    /**
     * controller function for managing elevators
     */

    callElevators() {

       for (let i = 0; i < 1; i++) {

        // get closest elevator
        const calledElevator = this.whichIsCloser(i);

        // move with elevator
        this.moveElevator(calledElevator);

        // arrival in destination and logging
        // const query = this.userQueries[i];
        // this.elevatorLogger(calledElevator, query);
       }
    }


    /**
     * finds out which elevator services next
     */

    whichIsCloser(i) {

      let index = 0;
      // gets users query and decides
      // which elevator is best to use
      // counts calling distance
  // // for (let i = 0; i < this.userQueries.length; i++) {

        let query = this.userQueries[i];
        let elevator = null, callDistance = 0;

          if (query.destination === -1 || 10) {

              // deciding if was called basement or apartment
              if (query.destination === -1) {

                // if destination is -1 - a basement
                // // this.helper_destinationBasement(query);
                elevator = this.elevator[0];
              }
              if (query.destination === 10) {

                // if destination is 10th floor - appartment
                // // this.helper_destinationAppartment(query);
                elevator = this.elevator[1];
              }
            //console.log(elevator);
            // // count elevator distance and set query
            callDistance = Math.abs( elevator.location 
              - query.currentFloor );
            this.userQueries[i] = query;

            return elevator;
          } else {

            // otherwise decide which it will be
            // compare distance for each elevator
              if ((Math.abs( this.elevator[0].location - 
                    query.currentFloor)) < 
                  (Math.abs( this.elevator[1].location - 
                    query.currentFloor))) {

                      elevator = this.elevator[0];
                      // // query.callLasting = Math.abs( this.
                      // //   elevator[0] - query.currentFloor);
                    } else {

                        elevator = this.elevator[1];
                        // query.callLasting = Math.abs( 
                        //   this.elevator[1] - query.
                        //   currentFloor);
                      }
            // // query = this.helper_countCallDistance(query);
            // // query = this.helper_countTravelAndTotal(query);
          }

        // sets query with filled up values to controller
        query.callLasting = callDistance;
        this.userQueries[i] = query;
        console.log('190: elevatorToUse = ', this.elevatorToUse);
        // calling logger of elevator movements
        // // const chosenElevator = this.elevatorToUse.pop();console.log('192: chosenElevator = ', chosenElevator);

      // }

      return elevator;
    }


    /**
     * move with elevator - count travel 
     * time and whole trip
     */

    moveElevator(elevator) {

      //
    }


    /**
     * if destination is basement
     */

     helper_destinationBasement(query) {

        query.callLasting = this.
          helper_countCallDistanceSpecial(
          this.elevator[0], query);
        query = this.helper_countTravelAndTotal(query);

        this.queryLasting.push(query.totalTime);
        this.elevatorToUse.push(this.elevator[0]);
     }


    /**
     * if destination is appartment
     */

     helper_destinationAppartment(query) {

        query.callLasting = this.
          helper_countCallDistanceSpecial(
          this.elevator[1], query);
        query = this.helper_countTravelAndTotal(query);

        this.queryLasting.push(query.totalTime);
        this.elevatorToUse.push(this.elevator[1]);
     }


    /**
     * counts distance, when goes from/ to basement or
     * appartment
     */

    helper_countCallDistanceSpecial(
      currentElevator, query) {
console.log('240: A or B? currentElevator = ', currentElevator.type);

      let callDistance = Math.abs( currentElevator.destination -
        currentElevator.location );
      console.log('244: callDistance = ', callDistance);
        if ((currentElevator.location === 0 || -1) || 
            (currentElevator.destination === 0 || -1)) {
              callDistance += 1;
        }

      return callDistance;
    }


    /**
     * counts distance to travel to floor if elevatorA
     * or elevatorB are not prefered (going to basement
     * or to apartment)
     */

    helper_countCallDistance(query) {

      // get closest elevator
      const location1 = this.elevator[0].location;
      const location2 = this.elevator[1].location;
      const destination = query.destination;
      let callLasting = 0, index = 0, distance = 0;
console.log(`268: location1 = ${location1}, location2 = ${location2}, destination = ${destination},`);
        // which elevator is closer. is it elevatorA?
        if ((Math.abs(location1 - destination)) > 
            (Math.abs(location2 - destination))) {

          callLasting = Math.abs(location1 - destination);
        } else {

            // ..or elevatorB?
            callLasting = Math.abs(location2 - destination);
            index = 1;
          }

        // adds 1 if elevator goes from/ to basement or ground
        if ((-1 || 0 === location1) || (-1 || 0 === location2)  
        ||  (-1 || 0 === destination)) { callLasting += 1; }

      query.callLasting = callLasting;
      this.elevatorToUse = this.elevator[index];

      return distance;
    }


    /** 
     * counts travel time and total query time
     */

    helper_countTravelAndTotal(query) {

      // when elevator is on floor and is moving to destination
      // count travel time and total time

      let total = Math.abs( query.destination - query.currentFloor );

        if ((-1 || 0 === query.destination) || 
            (-1 || 0 === query.currentFloor)) { total += 1; }

      query.transportLasting = total;
      total = (query.queryLasting + query.transportLasting);

      return query;
    }


    /**
     * log elevator movements
     */

    elevatorLogger(chosenElevator, query) {

      // logging elevator was called
      chosenElevator.logCall(chosenElevator, query);

      // logging elevator arrival
      setTimeout(chosenElevator.logArival(
        chosenElevator, query), query.callLasting );

      // log reaching destination
      setTimeout(chosenElevator.logDestination(
        chosenElevator, query), query.transportLasting);
    }
  }



  /** 
   * Elevator class
   * 
   */

  class Elevator {
    constructor(type, basement, apartment, 
                location = 0) {
      this.type = type;
      this.basementFloor = basement;
      this.apartmentFloor = apartment;
      this.location = location;
      this.floorSpeed = 1;
      this.emergency = false;
    }

    logCall(elevator, query) {
      console.log(`${elevator} move to ${query.currentFloor}.`);
    }

    logArival(elevator, query) {
      console.log(`${elevator} arrived at ${query.currentFloor} .`);
      setTimeout( console.log(`${elevator} opens doors.`), 3000);
      setTimeout( console.log(`${elevator} closes doors.`), 5000);
    }

    logDestination(elevator, query) {
      console.log(`${elevator} reached destination.`);
      console.log(`current floor: ${query.destination}.`);
    }
  }



  /**
   * UserQuery class
   *
   */

  class UserQuery {
    constructor(currentFloor, 
                destination) {
      // this.directions = Object.freeze({ "UP": 1, "DOWN": -1 });
      this.currentFloor = currentFloor;
      this.destination = destination;
      this.callLasting = 0;
      this.transportLasting = 0;
      this.totalTime = 0;
    }
    //wheretogo
  }



const elevatorA = new Elevator('elevatorA', true, false);
const elevatorB = new Elevator('elevatorB', false, true);

const building = new Building();
const elevatorsController = new ElevatorsController(
  elevatorA, elevatorB
);
console.log('453: ', elevatorsController.elevator[0])
building.setFloorOptions();
console.log('395: floors = ', building.floors);

elevatorsController.generateQueries();
console.log('398: generated queries = ', elevatorsController.userQueries);

elevatorsController.callElevators();




//EZEBUIRO UCHECHUKWU VINCENT