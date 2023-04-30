const APIURL = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM";

export const registerUser = async (username, password, firstName, lastName) => {
  try {
    const response = await fetch("http://localhost:4000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
      }),
    });
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("error registering user");
  }
};

registerUser("abedj", "ax1234", "abed", "jamous");

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("error logging in");
  }
};

// loginUser("albert", "bertie99");
