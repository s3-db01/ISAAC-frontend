export const Measurement = Object.freeze({
	TEMPERATURE: 'Temperature(°C)',
	HUMIDITY: 'Humidity(%RH)',
});

export function nextMeasurement(params) {
	if (params === Measurement.TEMPERATURE) {
		return Measurement.HUMIDITY;
	}
	if (params === Measurement.HUMIDITY) {
		return Measurement.TEMPERATURE;
	}
	return undefined;
}
