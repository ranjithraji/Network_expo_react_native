const path = "http://192.168.43.213:2000/v1";

export async function SignUp(body) {
  console.log(body);
  try {
    const response = await fetch(`${path}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    console.log(await response.json(), "aaaa");
    if (response) {
      if (response.status === 200) {
        return response;
      }
    }
  } catch (e) {
    throw e;
  }
}

export async function Login(body) {
  try {
    const response = await fetch(`${path}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    if (response) {
      if (response.status === 200) {
        return response;
      }
    }
  } catch (e) {
    throw e;
  }
}

export async function Verify(body, token) {
  try {
    const response = await fetch(`${path}/user/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: body,
    });
    if (response) {
      if (response.status === 200) {
        return response;
      }
    }
  } catch (e) {
    throw e;
  }
}

export async function Profile(token) {
  try {
    const response = await fetch(`${path}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response) {
      if (response.status === 200) {
        return response;
      }
    }
  } catch (e) {
    throw e;
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
    await console.log(response, 'response');
    if (response) {
      return response.json();
    }
  } catch (error) {
    throw error;
  }
}
