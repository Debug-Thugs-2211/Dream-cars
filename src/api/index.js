import Axios from "axios";

export const registerUser = async (username, password, firstName, lastName) => {
  try {
    const response = await Axios.post("/api/users/register", {
      username,
      password,
      firstName,
      lastName,
    });
    console.log(response);
    const results = response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("Error registering user: ", error);
  }
};

registerUser("abed", 1234, "abed", "jamous");
