TemperatureSensorA
class TemperatureSensorA {
 constructor(location, threshold) {
    this.location = location;
    this.threshold = threshold;
 } // location = nom de la pièce, threshold = température de déclenchement
 detect(currentTemp) {
    if (currentTemp >= this.threshold) {
    return `Température élevée détectée par le senseur: ${this.location}`;
 } // Déclenche un message d’alerte (string)
 return 'température normale';
}
}