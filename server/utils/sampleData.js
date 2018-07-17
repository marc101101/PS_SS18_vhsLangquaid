if (process.env.NODE_ENV === 'test') {
  exports.categories = () => [{
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

  exports.courses = () => [{
    KURS_NAME: "Automatisiertes Testen",
    KURS_BESCHREIBUNG: "SQL-Statements selber schreiben ist nicht sehr spannend",
    KURS_MITZUBRINGEN: "Spiel, Spaß und Spannung",
    KURS_PREIS: 0,
    KURS_NOTIZEN: "Notizen zu diesem Kurs",
    KURS_ANMFRIST: "0000-00-00",   
    KURS_DATUM_UEBERW: "2018-01-01",    
    EINGEGEBEN_AM_DATUM: "2018-01-01",
    EINGEGEBEN_AM_ZEIT: "00:00:00",
    ARCHIV_VON_USER: 0
  }]

}