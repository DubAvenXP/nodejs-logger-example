import { emailTemplate } from "../../src/js-foundation/01-template";

describe("01-template.ts", () => {
    it("emailTemplate should contain 'Hi, {{name}}'", () => {
        expect(emailTemplate).toContain("Hi, {{name}}");
    });

    it('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    });
});
