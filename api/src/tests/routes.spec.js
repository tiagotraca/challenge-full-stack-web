const request = require("supertest");

const baseUrl = "http://localhost:4000";

describe("All students", () => {
  it("should return a 200 status code", async () => {
    const response = await request(baseUrl).get("/students");

    expect(response.statusCode).toBe(200);
  });
});
describe("Create Student", () => {
  it("should return a 201 status code", async () => {
    const response = await await request(baseUrl)
      .post("/students")
      .send("name=john&email=foo@bar.com&academicRegister=222&cpf=111");
    expect(response.statusCode).toBe(201);
  });
});
describe("Create Student", () => {
  it("should return a 500 status code", async () => {
    const response = await await request(baseUrl)
      .post("/students")
      .send("name=john&email=foo@bar.com&academicRegister=222&cpf=111");
    expect(response.statusCode).toBe(500);
  });
});
describe("update Student", () => {
  it("should return a 200 status code", async () => {
    const response = await await request(baseUrl)
      .put("/students/1")
      .send("name=john&email=foo@bar.com&academicRegister=11111&cpf=111");
    expect(response.statusCode).toBe(200);
  });
});
describe("delete Student", () => {
  it("should return a 200 status code", async () => {
    const response = await await request(baseUrl).delete("/students/1");
    expect(response.statusCode).toBe(200);
  });
});
