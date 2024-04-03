import request from "supertest";
import app from "../server";

describe("POST /books", () => {
  it("should create a new book", async () => {
    const newBook = {
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      published_date: 2021,
    };

    const response = await request(app)
      .post("/books")
      .send(newBook)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newBook);
  });
});
