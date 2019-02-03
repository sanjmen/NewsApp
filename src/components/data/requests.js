class Requests {
  async get(url) {
    try {
      const response = await fetch(url);
      console.log("Got status: ", response.status);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log("Fetch failed. Error: ", err);
      return err;
    }
  }
}

export default new Requests();
