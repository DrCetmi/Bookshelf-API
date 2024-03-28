import request from "supertest";
import app from "../server.js";

describe("POST /books", () => {
  it("should create a new book", async () => {
    const res = await request(app).post("/books").send({
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      published_date: "2021-01-01",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });
});
