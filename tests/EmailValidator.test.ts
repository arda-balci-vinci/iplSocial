import { EmailValidator } from "../emailValidator";

describe("emailValidator", ()=> {
           let emailValidator= new EmailValidator();


    describe("Validated email", ()=> {
        it("Should return a valid email",()=> {
            let actual = emailValidator.emailValid("test@example.com");

            expect(actual).toBe(true);
        })
    })

    describe("Email without @ ", ()=> {
        it("Should return false without @ ",()=> {
            let actual = emailValidator.emailValid("testexample.com");

            expect(actual).toBe(false);
        })
    })


     describe("Email with space  ", ()=> {
        it("Should return false with space  ",()=> {
            let actual = emailValidator.emailValid("test @example.com");

            expect(actual).toBe(false);
        })

        
    })

    describe("Email witouth word before @  ", ()=> {
        it("Should return false when  Email witouth word before @  ",()=> {
            let actual = emailValidator.emailValid("@example.com");

            expect(actual).toBe(false);
        })

        
    })

    describe("Email witouth word after @  ", ()=> {
        it("Should return false when  Email witouth word after @  ",()=> {
            let actual = emailValidator.emailValid("test@");

            expect(actual).toBe(false);
        })

        
    })

    
    


    
})