
const Games = [
  {
    Platforms: "https://api.rawg.io/api/platforms?key=539bca224e7e4cffbe3233e4a46e4d6b",
    Games:
      "https://api.rawg.io/api/games?dates=2020-08-20%2C2020-08-20&ordering=-added&page=1&page_size=50",
    PlatformGames:
      "https://api.rawg.io/api/games?key=539bca224e7e4cffbe3233e4a46e4d6b&platforms=4&dates=2020-11-20%2C2020-11-20&ordering=-added&page=1&page_size=50",
    FilterGame:
      "https://api.rawg.io/api/games?key=539bca224e7e4cffbe3233e4a46e4d6b&search=",
    PlatformGamesDates: "https://api.rawg.io/api/games?key=539bca224e7e4cffbe3233e4a46e4d6b&dates=",
    //&ordering=-rating&page=1&page_size=10
  },
];

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
  platforms,
  games,
  gameSearch,
  gameToday,
};
