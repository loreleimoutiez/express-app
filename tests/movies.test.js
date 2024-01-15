const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");
        console.log(response);

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe("GET /api/movies/1", () => {
    it("should return a movie based on its id", async () => {
        const response = await request(app).get("/api/movies/1");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    })
})

describe("GET /api/movies/0", () => {
    it("should return a 404", async () => {
        const response = await request(app).get("/api/movies/0");

        expect(response.headers["content-type"]).toMatch(/text/);
        expect(response.status).toEqual(404);
    });
});