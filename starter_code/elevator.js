/*jshint esversion: 6*/

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction  = 'up';
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.startElevator = setInterval( () => {
      this.update();
      this.floorUp();
      this._passengersLeave();
      this._passengersEnter();
    }, 1000);
  }
  stop() {
    setTimeout( () => { clearInterval(this.startElevator); });
  }
  update() {
    this.log();
  }

  _passengersEnter() {
    this.waitingList.forEach( (e) => {
      if(e.originFloor === this.floor){
        console.log(`${e.name} has enter the elevator`);
        this.requests.push(e.destinationFloor);
        this.passengers.push(e);
      }
    });
    this.waitingList = this.waitingList.filter( (element) => element.originFloor !== this.floor);
  }

  _passengersLeave() {
    this.passengers.forEach( (e) => {
      if(e.destinationFloor === this.floor){
        console.log(`${e.name} has left the elevator`);
      }
    });
    this.passengers = this.passengers.filter( (element) => element.destinationFloor !== this.floor);
  }

  floorUp() {
    this.direction = 'up';
    return (this.floor < this.MAXFLOOR) ? this.floor += 1 : this.stop();
  }

  floorDown() {
    this.direction = 'down';
    return (this.floor > 0) ? this.floor -= 1 : this.stop();
  }

  call( person ) {
    this.waitingList.push( person );
    this.requests.push( person.originFloor );
    console.log( `${person.name} call the elevator` );
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }

}

module.exports = Elevator;
