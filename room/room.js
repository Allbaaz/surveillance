export class Room {
    constructor(name) {
        this.name = name;
        this.sensors = [];
        this.observers = [];
    }

    addSensor(sensorAdapter) {
        this.sensors.push(sensorAdapter);
    }
    
  addObserver(observer) {
    this.observers.push(observer);
  }

  checkSensors() {
    this.sensors.forEach(sensor => {
      const alert = sensor.detect();
      if (alert) {
        this.notifyObservers(`[${this.name}] ${alert}`);
      }
    });
  }

  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}
