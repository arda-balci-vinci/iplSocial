export class EmailValidator{

    public emailValid(email:string): boolean {

        if(email.includes(" ")) {
            return false;
        }
        return true;
    }

}