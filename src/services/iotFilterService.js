export 	const iotFilterHandler = (iot, iotFilter, setIotFilter) => {
	let valueKey = `${iot.x}-${iot.y}`;
	const newIotFilter = new Set(iotFilter);
	if (iotFilter.has(valueKey) || localStorage.getItem(`${iot.x}-${iot.y}`)) {
		newIotFilter.delete(valueKey);
		localStorage.removeItem(`${iot.x}-${iot.y}`);
	} else {
		newIotFilter.add(`${iot.x}-${iot.y}`);
		localStorage.setItem(`${iot.x}-${iot.y}`, true);
	}
	setIotFilter(newIotFilter);
};