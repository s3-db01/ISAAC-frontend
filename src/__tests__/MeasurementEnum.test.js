import { Measurement } from '../components/helper/MeasurementEnum';
import { nextMeasurement } from '../components/helper/MeasurementEnum';

describe('measurementEnum returns the right value', () => {
	it('function returns temperature', () => {
		const humidity = Measurement.HUMIDITY;
		let value = nextMeasurement(humidity);

		expect(value).toBe(Measurement.TEMPERATURE);
	});

	it('function returns humidity', () => {
		const temperature = Measurement.TEMPERATURE;
		let value = nextMeasurement(temperature);

		expect(value).toBe(Measurement.HUMIDITY);
	});

	it('function returns undefined', () => {
		const value = nextMeasurement('random');

		expect(value).toBe(undefined);
	});
});