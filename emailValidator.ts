export class EmailValidator{

    public emailValid(email:string): boolean {

        if(email.includes(" ")) {
            return false;
        }

     const atIndex = email.indexOf("@");
        if (atIndex === -1) {
     return false;
     }

     


        return true;


    }

}