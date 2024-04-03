import request from "supertest";
import app from "../server";

describe("DELETE /books/:id", () => {
  it("should delete the specified book", async () => {
    const responseCreate = await request(app).post("/books/999").send({
      title: "Test Book",
      author: "Test Author",
      isbn: "1234567890",
      published_date: 2021,
    });

    const bookId = responseCreate.body._id;

    const responseDelete = await request(app).delete(`/books/${bookId}`);

    expect(responseDelete.status).toBe(200);
    expect(responseDelete.body).toMatchObject({
      message: "Book deleted successfully",
    });
  });
});
