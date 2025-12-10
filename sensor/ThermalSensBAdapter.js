import { ThermalSensorB } from "./ThermalSensorB.js";

export class ThermalSensorBAdapter {
  constructor(position) {
    this.sensor = new ThermalSensorB(position);
  }

  detect() {
    return this.sensor.scanHeatSignature();
  }
}