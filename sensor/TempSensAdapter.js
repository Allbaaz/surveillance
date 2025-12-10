import { TemperatureSensorA } from "./CamA.js";

export class TemperatureSensorAAdapter {
  constructor(location, threshold) {
    this.sensor = new TemperatureSensorA(location, threshold);
  }

  detect() {
    return this.sensor.detect();
  }
}