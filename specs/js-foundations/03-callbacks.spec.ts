import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks.ts", () => {
    describe("#getUserById", () => {
        it("should execute callback with error message when user is not found", (done) => {
            const id = 10;
            getUserById(id, (err, user) => {
                expect(err).toBe(`User with id: ${id} not found`);
                expect(user).toBeUndefined();

                done();
            });
        });

        it("should execute callback with user when user is found", (done) => {
            const id = 1;
            getUserById(id, (err, user) => {
                expect(err).toBeUndefined();
                expect(user).toEqual({ id: 1, name: "Alice" });

                done();
            });
        });
    });
});
