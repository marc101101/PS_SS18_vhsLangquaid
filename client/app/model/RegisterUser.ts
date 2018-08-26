
export class RegisterUser {
    constructor(
        teil_vorname: string,
        teil_nachname: string,
        teil_email: string,
        teil_notizen: string,
        eingegeben_von_user: number,
        eingegeben_am_datum: string,
        eingegeben_am_zeit: string,
        datenhistory: string,
        teil_ort: string,
        teil_plz: string,
        teil_blz: string,
        teil_iban: string,
        teil_anrede: string,
    ) {
        this.teil_vorname = teil_vorname;
        this.teil_nachname = teil_nachname;
        this.teil_email = teil_email;
        this.teil_notizen = teil_notizen;
        this.eingegeben_von_user = eingegeben_von_user;
        this.eingegeben_am_datum = eingegeben_am_datum;
        this.eingegeben_am_zeit = eingegeben_am_zeit;
        this.datenhistory = datenhistory;
        this.teil_ort = teil_ort;
        this.teil_plz = teil_plz;
        this.teil_blz = teil_blz;
        this.teil_iban = teil_iban;
        this.teil_anrede = teil_anrede;
    }

    teil_vorname: string;
    teil_nachname: string;
    teil_email: string;
    teil_notizen: string;
    eingegeben_von_user: number;
    eingegeben_am_datum: string;
    eingegeben_am_zeit: string;
    datenhistory: string;
    teil_ort: string;
    teil_plz: string;
    teil_blz: string;
    teil_iban: string;
    teil_anrede: string;
}