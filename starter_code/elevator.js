/*jshint esversion: 6*/

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction  = 0;
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
    for(let i=0; i<this.waitingList.length; i++){
      if(this.waitingList[i].originFloor === this.floor){
        this.passengers.push(this.waitingList[i]);
        console.log(`${this.waitingList[i].name} has entered in the elevator`);
        this.requests.push(this.waitingList[i].destinationFloor);
        this.waitingList.splice(i,1);
      }
    }
  }
  _passengersLeave() {
    for(let i=0; i<this.passengers.length; i++){
      if(this.passengers[i].destinationFloor === this.floor){
        console.log(`${this.passengers[i].name} has left in the elevator`);
        this.passengers.splice(i,1);
      }
    }
  }
  floorUp() {
    this.direction = 'up';
    if(this.floor < this.MAXFLOOR){
      this.floor += 1;
    }else{
      this.stop();
      console.log('You are in the last floor');
    }
  }
  floorDown() {
    this.direction = 'down';
    if ( this.floor > 0) {
      this.floor -= 1 ;
    }else{
      this.stop();
      console.log('You are in the first floor');
    }

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
