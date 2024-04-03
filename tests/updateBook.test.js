import request from "supertest";
import app from "../server";

describe("PUT /books/:id", () => {
  it("should update the specified book", async () => {
    const responseCreate = await request(app).post("/books/999").send({
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      published_date: 2021,
    });

    const bookId = responseCreate.body._id;

    const responseUpdate = await request(app)
      .put(`/books/${bookId}`)
      .send({ title: "Updated Test Book", author: "Updated Test Author" });

    expect(responseUpdate.status).toBe(200);
    expect(responseUpdate.body.title).toBe("Updated Test Book");
    expect(responseUpdate.body.author).toBe("Updated Test Author");
  });
});
