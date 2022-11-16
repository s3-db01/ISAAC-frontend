import fs from 'fs';
import { startOfWeek, endOfWeek } from 'date-fns';


let sensors = [];
const NR_OF_SENSORS = 17;
const MIN_Y = 1;
const MAX_Y = 14;
const MIN_X = 1;
const MAX_X = 32;
const MIN_TEMPERATURE = 22;
const MAX_TEMPERATURE = 24;
const MIN_HUMIDITY = 45;
const MAX_HUMIDITY = 60;

const firstDay = startOfWeek(Date.now(), { weekStartsOn: 1 });
const lastDay = endOfWeek(Date.now(), { weekStartsOn: 1 });

function getRandomArbitrary(min, max) {
    max++;
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    max++;

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

const position = [];

for (let sensorIndex = 0; sensorIndex < NR_OF_SENSORS; sensorIndex++) {
    position.push({
        x: getRandomInt(MIN_X, MAX_X),
        y: getRandomInt(MIN_Y, MAX_Y),
    })
}

for (let index = firstDay.getDate(); index <= lastDay.getDate(); index++) {
    for (let sensorIndex = 0; sensorIndex < NR_OF_SENSORS; sensorIndex++) {
        sensors.push({
            x: position[sensorIndex].x,
            y: position[sensorIndex].y,
            temperature: getRandomArbitrary(MIN_TEMPERATURE, MAX_TEMPERATURE),
            humidity: getRandomArbitrary(MIN_HUMIDITY, MAX_HUMIDITY),
            updatedAt: new Date().setDate(index),
        })
    }
}

fs.writeFile('./db.json', JSON.stringify({ entries: sensors }), err => {
    if (err) {
        console.log('err');
    }
    else {
        console.log(sensors.length);
    }
})