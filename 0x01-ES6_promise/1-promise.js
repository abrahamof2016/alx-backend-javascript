function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      setTimeout(() => {
        const response = {
          status: 200,
          body: 'Success',
        };
        resolve(response);
      }, 1000);
    } else {
      reject('The fake API is not working currently');
    }
  });
}

export default getFullResponseFromAPI;
