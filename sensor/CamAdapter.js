import { CameraA } from "./CamA.js";

export class CameraAAdapter {
  constructor(location) {
    this.sensor = new CameraA(location);
  }

  detect() {
    return this.sensor.detect();
  }
}