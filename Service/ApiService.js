const path = "http://a31422be2792.ngrok.io/v1";

import AsyncStorage from "@react-native-async-storage/async-storage";

const token = AsyncStorage.getItem("token");

export async function SignUp(body) {
  let response;
  try {
    response = await fetch(`${path}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function Login(body) {
  let response;
  try {
    response = await fetch(`${path}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function Verify(body, token) {
  let response;
  try {
    response = await fetch(`${path}/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function Profile(token) {
  let response;
  try {
    response = await fetch(`${path}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function getAllFacIssues(token) {
  let response;
  try {
    response = await fetch(`${path}/issues/faculty`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return response.json();
  } catch (error) {
    throw error;
  }
}

export async function getOneFacIssues(token, id) {
  let response;
  try {
    response = await fetch(`${path}/issue/faculty/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function getAllDepartMent() {
  let response;
  try {
    response = await fetch(`${path}/departments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function getAllLocations() {
  let response;
  try {
    response = await fetch(`${path}/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

export async function createIssue(token, body) {
  let response;
  try {
    response = await fetch(`${path}/issue/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}

// const URL = 'http://192.168.43.207:2000'
export const getIssuesNotified = async () => {
  let response;
  try {
    response = await fetch(`${path}/v1/user/get/notifications`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status == 200) {
      return await response.json();
    }
    if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    if (response.status == 401) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    {
      return response;
    }
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
