import {startOfWeek, endOfWeek} from 'date-fns';
import {
	Measurement, nextMeasurement,
} from '../components/helper/MeasurementEnum';

export function getMeasurementArray(date, data, measurement) {
	const firstDay = startOfWeek(date, {weekStartsOn: 1});
	const lastDay = endOfWeek(date, {weekStartsOn: 1});

	// get an array with entries of current week
	const currentWeekEntries = data.filter((obj) =>
		obj.dateTime >= firstDay && obj.dateTime <= lastDay);
	// used so Monday is first day of the week not Sunday
	function getDayExtended(date) {
		let day = date.getDay();
		if (day == 0) {
			return 6;
		}
		return --day;
	}

	// create array that stores mininmum value, maximum and the average
	const entries = [];
	for (let index = 0; index < 7; index++) {
		// entries[index] = {
		// 	minimum: Number.MAX_SAFE_INTEGER,
		// 	maximum: 0,
		// 	average: 0,
		// };
		entries[index] = {
			minimum: Number.MAX_SAFE_INTEGER,
			maximum: null,
			average: null,
		};
	}
	const counter = [0, 0, 0, 0, 0, 0, 0];

	if (measurement === Measurement.TEMPERATURE) {
		currentWeekEntries.forEach((element) => {
			if (element != 0) {
				const arrayIndex = getDayExtended(element.dateTime);
				entries[arrayIndex].average += element.temperature;
				counter[arrayIndex]++;

				if (element.temperature > entries[arrayIndex].maximum) {
					entries[arrayIndex].maximum = element.temperature;
				}
				if (element.temperature < entries[arrayIndex].minimum) {
					entries[arrayIndex].minimum = element.temperature;
				}
			}
		});
	} else if (measurement === Measurement.HUMIDITY) {
		currentWeekEntries.forEach((element) => {
			if (element != 0) {
				const arrayIndex = getDayExtended(element.dateTime);
				entries[arrayIndex].average += element.humidity;
				counter[arrayIndex]++;

				if (element.humidity > entries[arrayIndex].maximum) {
					entries[arrayIndex].maximum = element.humidity;
				}
				if (element.humidity < entries[arrayIndex].minimum) {
					entries[arrayIndex].minimum = element.humidity;
				}
			}
		});
	}
	// calculate average
	for (let index = 0; index < 7; index++) {
		entries[index].average /= counter[index];
		entries[index].average = entries[index].average.toPrecision(3);
	}
	return entries.map((obj) => {
		if(obj.minimum === Number.MAX_SAFE_INTEGER)
			obj.minimum = null;
		return obj;
	});
}