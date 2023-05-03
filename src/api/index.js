export const registerUser = async (username, password, firstName, lastName) => {
  try {
    const response = await fetch("http://localhost:4000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    });
    const results = await response.json();
    console.log("FROM REGISTER API: ", results);
    return results;
  } catch (error) {
    console.log("error registering user");
  }
};

// registerUser("abedj", "ax123498", "abed", "jamous");

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:4000/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const results = await response.json();
    console.log("FROM LOGIN API: ", results);
    return results;
  } catch (error) {
    console.log("error logging in");
  }
};

const getAllCars = async () => {
  const response = await fetch("http://localhost:4000/api/cars");
  const results = await response.json();
  console.log("CARS: ", results);
  return results;
};

getAllCars();
