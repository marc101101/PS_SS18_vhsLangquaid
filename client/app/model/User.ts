
export class User {
    constructor(
        firstname: string,
        password: string,
        id: number,
        email: string,
        lastname: string) {

        this.email = email;
        this.password = password;
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
    }

    firstname: string;
    password: string;
    id: number;
    email: string;
    lastname: string;

}