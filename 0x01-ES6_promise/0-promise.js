function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const response = "True";
			resolve(response);
		}, 1000);
	});
}
export default getResponseFromAPI;
