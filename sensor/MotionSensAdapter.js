import { MotionSensorA} from './MotionSensA.js';

export class MotionSensAdapter {
    constructor(location) {
        this.motionSensor = new MotionSensorA(location);
    }

    detect() {
        return this.motionSensor.detect();
    }
}