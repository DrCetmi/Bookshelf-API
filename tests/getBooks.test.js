import request from "supertest";
import app from "../server";

describe("GET /books", () => {
  it("should return all books", async () => {
    const response = await request(app).get("/books");
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.length).toBeGreaterThan(0);
  });
});
