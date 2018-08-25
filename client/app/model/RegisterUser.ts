
export class RegisterUser {
    constructor(
        teil_vorname: string,
        teil_nachname: string,
        teil_email: string,
        teil_notizen: string,
        eingegeben_von_user: number,
        eingegeben_am_datum: string,
        eingegeben_am_zeit: string,
        datenhistory: string
    ) {
        this.teil_vorname = teil_vorname;
        this.teil_nachname = teil_nachname;
        this.teil_email = teil_email;
        this.teil_notizen = teil_notizen;
        this.eingegeben_von_user = eingegeben_von_user;
        this.eingegeben_am_datum = eingegeben_am_datum;
        this.eingegeben_am_zeit = eingegeben_am_zeit;
        this.datenhistory = datenhistory;
    }

    teil_vorname: string;
    teil_nachname: string;
    teil_email: string;
    teil_notizen: string;
    eingegeben_von_user: number;
    eingegeben_am_datum: string;
    eingegeben_am_zeit: string;
    datenhistory: string;
}