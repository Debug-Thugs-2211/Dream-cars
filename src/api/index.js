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

export const createPost = async (
  token,
  make,
  model,
  price,
  year,
  color,
  mileage,
  imageUrl,
  condition
) => {
  try {
    const response = await fetch("http://localhost:4000/api/cars/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        make: make,
        model: model,
        price: price,
        year: year,
        color: color,
        mileage: mileage,
        imageUrl: imageUrl,
        condition: condition,
      }),
    });
    const results = await response.json();
    console.log("CreatePOST: ", results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

// createPost(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJhYmVkaiIsImlhdCI6MTY4MzE0MDM2N30.b9xPPEWohdTFpTQpaPRpaWNFGcSiyV9gt8YWlGUI64E",
//   "toyota",
//   "corola",
//   2000,
//   2018,
//   "black",
//   12000,
//   "yes.png",
//   "used"
// );
