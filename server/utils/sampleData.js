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

 exports.courses = () => [{
    KURS_ID: "2018175",
    KURS_TESTKURS: 0,
    KURS_POS: 0,
    KURS_NAME: "Test course for testing purposes",
    KURS_SUBNAME: "",
    KURS_BESCHREIBUNG: "",
    KURS_INHALT_VORTEXT: "",
    KURS_INHALT_DETAILS: "",
    KURS_SONDERINFO: "",
    KURS_TEXTE_NOTIZEN: "",
    KURS_TEXTE_OKFBL: 0,
    KURS_TEXTE_OKTEXTER: 0,
    KURS_TEXTE_OKCO: 0,
    KURS_DATEN_OKFBL: 0,
    KURS_DATEN_OKDATEN: 0,
    KURS_DATEN_OKKALK: 0,
    KURS_FOTO_ALT: 0,
    KURS_FOTO_REFERENT: 0,
    KURS_FOTO_WEB: 0,
    KURS_FOTO_WOHER: 0,
    KURS_FOTO_OK: 0,
    KURS_TEXTE_OK: 0,
    KURS_BILDT: "",
    KURS_BILD: "",
    KURS_BILD_ID: 0,
    KURS_BILD_BREITE: "",
    KURS_BILD_OK: 0,
    KURS_BILD_DATUM: 0,
    KURS_MITZUBRINGEN: "",
    KURS_PREIS: 0,
    KURS_KALK_FERTIG: 0,
    KURS_MATERIALKOSTEN: 0,
    KURS_ORT_ID: 0,
    KURS_TREFFPUNKT: "",
    KURS_RUB_ID: 0,
    KURS_KINDERVHS: 0,
    KURS_FRAUENVHS: 0,
    KURS_SENIORENVHS: 0,
    KURS_GESUNDHEITVHS: 0,
    KURS_BEGINN: 0,
    KURS_BEGINN_UHRZEIT: 0,
    KURS_ENDE: 0,
    KURS_ENDE_UHRZEIT: 0,
    KURS_ZEIT: 0,
    KURZ_ZEIT: 0,
    KURS_TEIL_MIN: 0,
    KURS_TEIL_MAX: 0,
    KURS_ALTER_VON: 0,
    KURS_ALTER_BIS: 0,
    KURS_ANZAHLTERMINE: 0,
    KURS_REFERENT_ID: 0,
    KURS_REFERENT_HONORAR: 0.0,
    KURS_PRO_KILOMETER: 0,
    KURS_KILOMETER: 0,
    KURS_REFERENT_SONDERHONORAR: 0.0,
    KURS_REFERENT_SONDERVEREINB_TX: 0.0,
    KURS_REFERENT_SONDERVEREINB: 0.0,
    KURS_SONDERKOSTENART: "",
    KURS_REFERENT_FAHRKOSTEN: 0,
    KURS_BEARBEITER: 0,
    KURS_BEARBEITER_ERSTER: 0,
    KURS_AUFSCHLIESSER: "",
    KURS_BEGRUESSER: "",
    KURS_ABSCHLIESSER: "",
    KURS_NOTIZEN: "",
    CHECKSUM: "",
    GEAENDERT_VON_USER: 0,
    GEAENDERT_AM_DATUM: 0,
    GEAENDERT_AM_ZEIT: 0,
    KURS_GJ_ID: 0,
    KURS_DATUM_NICHT_ANZEIGEN: 0,
    KURS_MATERIALKOSTEN_TEXT: "",
    KURS_ABENDKASSE: 0,
    KURS_SONDERKOSTEN_KOSTEN: 0.0,
    KURS_BETREUER_TEIL_ID: 0,
    KURS_ABGERECHNET: 0,
    KURS_ABGERECHNET_DATUM: 0,
    KURS_REFHON_UEBERW: 0,
    KURS_REFHON_DATUM: 0,
    KURS_INFO: "",
    KURS_GES_ZPP: "",
    KURS_ZPP_TITEL: "",
    KURS_GES_ZPP_DATUM: 0,
    KURS_BONUSFAEHIG: 0,
    KURS_ZPP_Q: "",
    KURS_ZPP_ZQ: "",
    KURS_GES_SPORT: 0,
    KURS_GES_ERNAEHRUNG: 0,
    KURS_GES_STRESS: 0,
    KURS_GES_RAUCHEN: 0,
    KURS_GES_BEWEGUNG: 0,
    KURS_UEBERGEWICHT: 0,
    KURS_ENTSPANNUNG: 0,
    KURS_ALKOHOL: 0,
    KURS_SICHTBAR: 0,
    KURS_NICHTIMHEFT: 0,
    KURS_FERTIG:  0,
    KURS_EMAIL_INFO: 0,
    KURS_SCHLUESSEL: "",
    KURS_ANMFRIST: 0,
    KURS_ABMELDESCHLUSS: 0,
    KURS_VERANSTALTUNG: 0,
    KURS_VERANST_TEXT: "",
    KURS_NICHT_BUCHBAR: 0,
    KURS_BUCHBAR_GEMEINDE: 0,
    KURS_SONDERSTATUS: 0,
    KURS_REFERENT_SONDERHONORAR_TX: "",
    KURS_STATUS_MIN: 0,
    KURS_UNTERSCHRIFT: 0,
    KURS_UNTERSCHRIFT_DATUM: 0,
    KURS_STATUS_STATT: 0,
    KURS_STATUS_ABGESAGT: 0,
    KURS_HONORAR_FINAL: 0,
    KURS_EINZUG_DATUM: 0,
    KURS_FERTIG_UEBERW: 0,
    KURS_DATUM_UEBERW: 0,
    KURS_KURSSTAT_ID: 0,
    EINGEGEBEN_VON_USER: 0,
    EINGEGEBEN_AM_DATUM: 0,
    EINGEGEBEN_AM_ZEIT: 0,
    DATENHISTORY: "",
    GELOESCHT_FELD: 0,
    GELOESCHT_VON_USER: 0,
    GELOESCHT_AM_DATUM: 0,
    GELOESCHT_AM_ZEIT: 0,
    GESPERRT_FELD: 0,
    GESPERRT_VON_USER: 0,
    GESPERRT_AM_DATUM: 0,
    GESPERRT_AM_ZEIT: 0,
    ARCHIV_VON_USER: 0,
    ARCHIV_AM_DATUM: 0,
    ARCHIV_AM_ZEIT: 0
    },
    {
      KURS_ID: "2018174",
      KURS_TESTKURS: 0,
      KURS_POS: 0,
      KURS_NAME: "This is the last test",
      KURS_SUBNAME: "",
      KURS_BESCHREIBUNG: "",
      KURS_INHALT_VORTEXT: "",
      KURS_INHALT_DETAILS: "",
      KURS_SONDERINFO: "",
      KURS_TEXTE_NOTIZEN: "",
      KURS_TEXTE_OKFBL: 0,
      KURS_TEXTE_OKTEXTER: 0,
      KURS_TEXTE_OKCO: 0,
      KURS_DATEN_OKFBL: 0,
      KURS_DATEN_OKDATEN: 0,
      KURS_DATEN_OKKALK: 0,
      KURS_FOTO_ALT: 0,
      KURS_FOTO_REFERENT: 0,
      KURS_FOTO_WEB: 0,
      KURS_FOTO_WOHER: 0,
      KURS_FOTO_OK: 0,
      KURS_TEXTE_OK: 0,
      KURS_BILDT: "",
      KURS_BILD: "",
      KURS_BILD_ID: 0,
      KURS_BILD_BREITE: "",
      KURS_BILD_OK: 0,
      KURS_BILD_DATUM: 0,
      KURS_MITZUBRINGEN: "",
      KURS_PREIS: 0,
      KURS_KALK_FERTIG: 0,
      KURS_MATERIALKOSTEN: 0,
      KURS_ORT_ID: 0,
      KURS_TREFFPUNKT: "",
      KURS_RUB_ID: 0,
      KURS_KINDERVHS: 0,
      KURS_FRAUENVHS: 0,
      KURS_SENIORENVHS: 0,
      KURS_GESUNDHEITVHS: 0,
      KURS_BEGINN: 0,
      KURS_BEGINN_UHRZEIT: 0,
      KURS_ENDE: 0,
      KURS_ENDE_UHRZEIT: 0,
      KURS_ZEIT: 0,
      KURZ_ZEIT: 0,
      KURS_TEIL_MIN: 0,
      KURS_TEIL_MAX: 0,
      KURS_ALTER_VON: 0,
      KURS_ALTER_BIS: 0,
      KURS_ANZAHLTERMINE: 0,
      KURS_REFERENT_ID: 0,
      KURS_REFERENT_HONORAR: 0.0,
      KURS_PRO_KILOMETER: 0,
      KURS_KILOMETER: 0,
      KURS_REFERENT_SONDERHONORAR: 0.0,
      KURS_REFERENT_SONDERVEREINB_TX: 0.0,
      KURS_REFERENT_SONDERVEREINB: 0.0,
      KURS_SONDERKOSTENART: "",
      KURS_REFERENT_FAHRKOSTEN: 0,
      KURS_BEARBEITER: 0,
      KURS_BEARBEITER_ERSTER: 0,
      KURS_AUFSCHLIESSER: "",
      KURS_BEGRUESSER: "",
      KURS_ABSCHLIESSER: "",
      KURS_NOTIZEN: "",
      CHECKSUM: "",
      GEAENDERT_VON_USER: 0,
      GEAENDERT_AM_DATUM: 0,
      GEAENDERT_AM_ZEIT: 0,
      KURS_GJ_ID: 0,
      KURS_DATUM_NICHT_ANZEIGEN: 0,
      KURS_MATERIALKOSTEN_TEXT: "",
      KURS_ABENDKASSE: 0,
      KURS_SONDERKOSTEN_KOSTEN: 0.0,
      KURS_BETREUER_TEIL_ID: 0,
      KURS_ABGERECHNET: 0,
      KURS_ABGERECHNET_DATUM: 0,
      KURS_REFHON_UEBERW: 0,
      KURS_REFHON_DATUM: 0,
      KURS_INFO: "",
      KURS_GES_ZPP: "",
      KURS_ZPP_TITEL: "",
      KURS_GES_ZPP_DATUM: 0,
      KURS_BONUSFAEHIG: 0,
      KURS_ZPP_Q: "",
      KURS_ZPP_ZQ: "",
      KURS_GES_SPORT: 0,
      KURS_GES_ERNAEHRUNG: 0,
      KURS_GES_STRESS: 0,
      KURS_GES_RAUCHEN: 0,
      KURS_GES_BEWEGUNG: 0,
      KURS_UEBERGEWICHT: 0,
      KURS_ENTSPANNUNG: 0,
      KURS_ALKOHOL: 0,
      KURS_SICHTBAR: 0,
      KURS_NICHTIMHEFT: 0,
      KURS_FERTIG:  0,
      KURS_EMAIL_INFO: 0,
      KURS_SCHLUESSEL: "",
      KURS_ANMFRIST: 0,
      KURS_ABMELDESCHLUSS: 0,
      KURS_VERANSTALTUNG: 0,
      KURS_VERANST_TEXT: "",
      KURS_NICHT_BUCHBAR: 0,
      KURS_BUCHBAR_GEMEINDE: 0,
      KURS_SONDERSTATUS: 0,
      KURS_REFERENT_SONDERHONORAR_TX: "",
      KURS_STATUS_MIN: 0,
      KURS_UNTERSCHRIFT: 0,
      KURS_UNTERSCHRIFT_DATUM: 0,
      KURS_STATUS_STATT: 0,
      KURS_STATUS_ABGESAGT: 0,
      KURS_HONORAR_FINAL: 0,
      KURS_EINZUG_DATUM: 0,
      KURS_FERTIG_UEBERW: 0,
      KURS_DATUM_UEBERW: 0,
      KURS_KURSSTAT_ID: 0,
      EINGEGEBEN_VON_USER: 0,
      EINGEGEBEN_AM_DATUM: 0,
      EINGEGEBEN_AM_ZEIT: 0,
      DATENHISTORY: "",
      GELOESCHT_FELD: 0,
      GELOESCHT_VON_USER: 0,
      GELOESCHT_AM_DATUM: 0,
      GELOESCHT_AM_ZEIT: 0,
      GESPERRT_FELD: 0,
      GESPERRT_VON_USER: 0,
      GESPERRT_AM_DATUM: 0,
      GESPERRT_AM_ZEIT: 0,
      ARCHIV_VON_USER: 0,
      ARCHIV_AM_DATUM: 0,
      ARCHIV_AM_ZEIT: 0
      }]
}