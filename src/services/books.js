import serverAPI from "./serverAPI";

const bookService = {
  async getBooks(url) {
    const data = await serverAPI.get(url);
    return data;
  },
};

export default bookService;
