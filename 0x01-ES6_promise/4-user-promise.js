export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const response = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    };
    resolve(response);
  });
}
