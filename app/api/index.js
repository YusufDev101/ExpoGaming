// Auth.
import authStorage from "../auth/authStorage";

const serverUrl = "https://dev.tontrac.co.za:3443/mobile/fst_v1";

const Games = [
  {
    Platforms: "https://api.rawg.io/api/platforms",
    Games:
      "https://api.rawg.io/api/games?dates=2020-08-20%2C2020-08-20&ordering=-added&page=1&page_size=50",
    PlatformGames:
      "https://api.rawg.io/api/games?platforms=4&dates=2020-11-20%2C2020-11-20&ordering=-added&page=1&page_size=50",
    FilterGame:
      "https://api.rawg.io/api/games?key=6b83d0d04c194744b2865843be48d3e8search=",
    PlatformGamesDates: "https://api.rawg.io/api/games?dates=",
    //&ordering=-rating&page=1&page_size=10
  },
];

const token = authStorage.getToken();

async function svc(serviceKey, params, token) {
  try {
    // Set server url and append endpoint.
    const url = serverUrl + "/fst_svc";

    // Setup configuration setting for post request.
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "bearer " + token,
      },
    };

    // Append the serviceKey to the existing params object (ES6).
    params = {
      ...params,
      serviceKey,
    };

    // Attempt to execute the endpoint.
    const json = await serverAjax(url, JSON.stringify(params), config);

    return json;
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
}

async function login(params) {
  try {
    // Concatenate url and add login endpoint.
    const url = serverUrl + "/fst_login";

    // Setup configuration setting for post request.
    const config = {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    // Add params that can be passed to request.
    const Params = {
      ...params,
      servicekey: "api_mobile_v1_fst_Login",
    };

    // Attempt to execute the endpoint.
    const json = await serverAjax(url, JSON.stringify(Params), config);

    return json;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function serverAjax(url, params, config) {
  try {
    // Attempt to execute the endpoint.
    const response = await fetch(url, { ...config, body: params });
    const json = await response;

    if (response.status === 200) {
      return json.json();
    } else if (response.status === 401) {
      let res = await json.json();
      throw Error(res.message);
    } else {
      let res = await json.json();

      // another status code
      throw Error(res.message);
    }
  } catch (err) {
    throw Error(err.message);
  }
}

const platforms = async () => {
  try {
    try {
      //console.log("url", Games[0].Platforms);
      // Attempt to execute the endpoint.
      const response = await fetch(Games[0].Platforms);
      const json = await response;

      if (response.status === 200) {
        return json.json();
      } else if (response.status === 401) {
        let res = await json.json();
        throw Error(res.message);
      } else {
        let res = await json.json();

        // another status code
        throw Error(res.message);
      }
    } catch (err) {
      throw Error(err.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

const games = async () => {
  try {
    try {
      //console.log("url", Games[0].Platforms);
      // Attempt to execute the endpoint.
      const response = await fetch(Games[0].Games);
      const json = await response;

      if (response.status === 200) {
        return json.json();
      } else if (response.status === 401) {
        let res = await json.json();
        throw Error(res.message);
      } else {
        let res = await json.json();

        // another status code
        throw Error(res.message);
      }
    } catch (err) {
      throw Error(err.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

const gameSearch = async (filter) => {
  try {
    try {
      // Attempt to execute the endpoint.
      const response = await fetch(Games[0].FilterGame + filter);
      const json = await response;
      if (response.status === 200) {
        return json.json();
      } else if (response.status === 401) {
        let res = await json.json();
        throw Error(res.message);
      } else {
        let res = await json.json();

        // another status code
        throw Error(res.message);
      }
    } catch (err) {
      throw Error(err.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

const gameToday = async () => {
  try {
    try {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var CurrentDate = year + "-" + month + "-" + date;
      var newDate = new Date();
      newDate.setDate(newDate.getDate() - 6);
      newDate.setFullYear(newDate.getFullYear() - 1);
      var previousdate =
        newDate.getFullYear() +
        "-" +
        newDate.getMonth() +
        "-" +
        newDate.getDate();

      // Attempt to execute the endpoint.
      const response = await fetch(
        Games[0].PlatformGamesDates +
          previousdate +
          "%" +
          CurrentDate +
          "&ordering=-relevance&page_size=50"
      );
      const json = await response;
      if (response.status === 200) {
        return json.json();
      } else if (response.status === 401) {
        let res = await json.json();
        throw Error(res.message);
      } else {
        let res = await json.json();

        // another status code
        throw Error(res.message);
      }
    } catch (err) {
      throw Error(err.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

export default {
  login,
  svc,
  platforms,
  games,
  gameSearch,
  gameToday,
};
