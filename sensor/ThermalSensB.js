ThermalSensorB
class ThermalSensorB {
 constructor(position) {
    this.position = position;
 } // position {
 scanHeatSignature() {
    return { sensor: "ThermalSensorB",
        detection: "Thermal",
        date: new Date().toISOString(),
    };
 } // Déclenche une donnée complexe json, voir ci dessous

}
export { ThermalSensorB };