const serverAPI = {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },

  async post(url, method, body, headers) {
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    const data = await response.json();
    return data;
  },
};

export default serverAPI;
