import { EmailValidator } from "../emailValidator";

describe("emailValidator", ()=> {
           let emailValidator= new EmailValidator();


    describe("Validated email", ()=> {
        it("Should return a valid email",()=> {
            let actual = emailValidator.emailValid("test@example.com");

            expect(actual).toBe(true);
        })
    })

    
})