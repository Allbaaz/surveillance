CameraA
class CameraA {
 constructor(location) {
    this.location = location;
 } // location = nom de la pièce
 detect() {
    return `Intrusion détectée par la caméra: ${this.location}`;
 } // Déclenche un message d’alerte (string)
}
