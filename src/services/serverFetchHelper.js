export const loadIotLocalFilters = (data, iotFilter, setIotFilter) => {
	const newIotFilter = iotFilter;
	for (let i = 0; i < data.length; i++) {
		const currentValue = data[i];
		if (localStorage.getItem(`${currentValue.x}-${currentValue.y}`)) {
			newIotFilter.add(`${currentValue.x}-${currentValue.y}`);
		}
	}
	setIotFilter(iotFilter);
};

export const getAllAvailableIot = (data, iotFilter) => {
	return  data.filter((obj) => !iotFilter.has(`${obj.x}-${obj.y}`));
};