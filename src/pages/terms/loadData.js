const loadData = () => {
	console.log('data load begins');
	return new Promise((res) => {
		setTimeout(() => {
			console.log('data load ends');
			res('loaded data');
		}, 250);
	})
}

export default loadData;
