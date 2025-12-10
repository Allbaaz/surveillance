MotionSensorA
class MotionSensorA {
 constructor(location) {
    this.location = location;
 }
 detect() {
    return `Mouvement détécté par le senseur: ${this.location}`;
 } // Déclenche un message d’alerte (string)
}
export { MotionSensorA };