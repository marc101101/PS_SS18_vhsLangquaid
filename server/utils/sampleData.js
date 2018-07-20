if (process.env.NODE_ENV === 'test') {
 exports.categories = () => [
  {
    rub_name: "Allgemeines",
    rub_titel: "Allgemeines",
    rub_text: "Sammelplatz für allgemeine Kurse und Veranstaltungen",
    eingegeben_von_user: 0,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00"
  },
  {
    rub_name: "Kunst und Musik",
    rub_titel: "Kunst und Musik",
    rub_text: "Sammelplatz für Kunst und Musik",
    eingegeben_von_user: 0,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00"
  },
  {
    rub_name: "Technik",
    rub_titel: "Technik",
    rub_text: "Sammelplatz für technische Kurse",
    eingegeben_von_user: 0,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00"
  },
  {
    rub_name: "Sport",
    rub_titel: "Sport",
    rub_text: "Sammelplatz für sportliche Kurse",
    eingegeben_von_user: 0,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00"
  }
]
}

exports.coursesForCategory = (category_id) => [
  {
    kurs_name: "Allgemeinder Kurs",
    kurs_beschreibung: "Ein Kurs wie jeder andere",
    kurs_mitzubringen: "",
    kurs_zeit: 0,
    kurs_referent_sondervereinb_tx: 0,
    kurs_notizen: "Notizen zu diesem Kurs",
    kurs_abendkasse: 0,
    kurs_referent_sonderhonorar_tx: 0,
    kurs_status_min: 0,
    kurs_status_statt: 0,
    kurs_status_abgesagt: 0,
    kurs_honorar_final: 0.42,
    kurs_fertig_ueberw: 0,
    kurs_datum_ueberw: "2018-01-01",
    eingegeben_von_user: 1,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00",
    datenhistory: "Daten History",
    kurs_rub_id: category_id,
  },
  {
    kurs_name: "Datenbank Kurs",
    kurs_beschreibung: "Datenbank können auch Freunde sein",
    kurs_mitzubringen: "",
    kurs_zeit: 0,
    kurs_referent_sondervereinb_tx: 0,
    kurs_notizen: "Notizen zu diesem Kurs",
    kurs_abendkasse: 0,
    kurs_referent_sonderhonorar_tx: 0,
    kurs_status_min: 0,
    kurs_status_statt: 0,
    kurs_status_abgesagt: 0,
    kurs_honorar_final: 0.42,
    kurs_fertig_ueberw: 0,
    kurs_datum_ueberw: "2018-01-01",
    eingegeben_von_user: 1,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00",
    datenhistory: "Daten History",
    kurs_rub_id: category_id,
  },
  {
    kurs_name: "Schuhebinden Kurs",
    kurs_beschreibung: "Schuhebinden leicht gemacht",
    kurs_mitzubringen: "",
    kurs_zeit: 0,
    kurs_referent_sondervereinb_tx: 0,
    kurs_notizen: "Notizen zu diesem Kurs",
    kurs_abendkasse: 0,
    kurs_referent_sonderhonorar_tx: 0,
    kurs_status_min: 0,
    kurs_status_statt: 0,
    kurs_status_abgesagt: 0,
    kurs_honorar_final: 0.42,
    kurs_fertig_ueberw: 0,
    kurs_datum_ueberw: "2018-01-01",
    eingegeben_von_user: 1,
    eingegeben_am_datum: "2018-01-01",
    eingegeben_am_zeit: "00:00:00",
    datenhistory: "Daten History",
    kurs_rub_id: category_id,
  }
]