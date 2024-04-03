import request from "supertest";
import app from "../server";

describe("GET /books/:id", () => {
  it("should return the specified book", async () => {
    const responseCreate = await request(app).post("/books/999").send({
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      published_date: 2021,
    });

    const bookId = responseCreate.body._id;

    const responseGet = await request(app).get(`/books/${bookId}`);

    expect(responseGet.status).toBe(200);
    expect(responseGet.body.title).toBe("Test Book");
    expect(responseGet.body.author).toBe("Test Author");
  });
});
