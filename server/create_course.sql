insert into vhslq_kurse (
  kurs_name, 
  kurs_beschreibung, 
  kurs_mitzubringen,
  kurs_zeit,
  KURS_REFERENT_SONDERVEREINB_TX,
  KURS_NOTIZEN,
  KURS_ABENDKASSE,
  KURS_REFERENT_SONDERHONORAR_TX,
  KURS_STATUS_MIN,
  KURS_STATUS_STATT,
  KURS_STATUS_ABGESAGT,
  KURS_HONORAR_FINAL,
  KURS_FERTIG_UEBERW,
  KURS_DATUM_UEBERW,
  EINGEGEBEN_VON_USER,
  EINGEGEBEN_AM_DATUM,
  EINGEGEBEN_AM_ZEIT,
  DATENHISTORY
  )
  values (
    "Automatisiertes Testen",
    "SQL-Statements selber schreiben ist nicht sehr spannend", 
    "Spiel, Spaß und Spannung",
    0,
    0,
    "Notizen zu diesem Kurs",
    0,
    0,
    0,
    0,
    0,
    10.50,
    0,
    "2018-01-01",
    1,
    "2018-01-01",
    "00:00:00",
    "Daten History"
  );