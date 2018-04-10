import { ILanguage } from './../interface/ilanguage';
namespace Viacar.eGov.Localization {
    export class De implements ILanguage {
        br1_Category = `eVn`;
        br1_Description = `Für das einzulösende FZ muss ein eVn vorhanden sein. Die Gültigkeit und Inahlte des eVn
        werden in zusätzlichen Regeln geprüft.`;
        br1_Titel = `eVn vorhanden`;
        br100_Category = `eVn`;
        br100_Description = `Fahrzeugwechsel für Fahrzeuge mit Gefahrengut nicht erlaubt.`;
        br100_Titel = `Gefahrengut in eVn`;
        br101_Category = `eVn`;
        br101_Description = `Der eVn muss mindestens noch 7 Tage lang gültig sein. (Berechnung Gültigkeitsdatum: Gültig ab + 30 Tage)`;
        br101_Titel = `Gültigkeitsdauer eVn > 7 Tage`;
        br102_Category = `eVn`;
        br102_Description = `Der eVn muss mindestens noch 14 Tage lang gültig sein. (Berechnung Gültigkeitsdatum: Gültig ab + 30 Tage)`;
        br102_Titel = `Gültigkeitsdauer eVn > 14 Tage`;
        br103_Category = `eVn`;
        br103_Description = `Der eVn muss mindestens noch 21 Tage lang gültig sein. (Berechnung Gültigkeitsdatum: Gültig ab + 30 Tage)`;
        br103_Titel = `Gültigkeitsdauer eVn > 21 Tage`;
        br104_Category = `eVn`;
        br104_Description = `Der eVn muss mindestens noch 28 Tage lang gültig sein. (Berechnung Gültigkeitsdatum: Gültig ab + 30 Tage)`;
        br104_Titel = `Gültigkeitsdauer eVn > 28 Tage`;
        br105_Category = `eVn`;
        br105_Description = `Das gültig ab Datum des eVn darf nicht in der Zukunft liegen`;
        br105_Titel = `Gültig ab Datum eVn in der Zukunft`;
        br106_Category = `Fahrzeug`;
        br106_Description = `Fahrzeugwechsel dürfen für Kleinbusse nicht nicht durchgeführt werden.{KB}`;
        br106_Titel = `Fahrzeugart Kleinbus`;
        br109_Category = `eCode178`;
        br109_Description = `Fahrzeugwechsel darf für eCode178 Status F und Folgestatus A nicht durchgeführt werden.`;
        br109_Titel = `eCode178 eintrag mit Status F und Folgestatus A`;
        br11_Category = `Fahrzeug`;
        br11_Description = `Wenn die angefragte Stammnummer nicht mit dem erhaltenen Fahrzeug übereinstimmt
        ist der Wechsel nicht erlaubt. (Schnittstellenfehler)`;
        br11_Titel = `Falsches Fahrzeug geliefert (Stammnummer)`;
        br119_Category = `eVn`;
        br119_Description = `Wenn ein Befristungugsdatum ersichtlich ist. Abbruch erfoderlich`;
        br119_Titel = `Befristungsdatum`;
        br123_Category = `eVn`;
        br123_Description = `Wenn die Platzzahl über 9 Plätzen überschreitet. Abbruch erfoderlich`;
        br123_Titel = `Platzzahl`;
        br124_Category = `eCode178`;
        br124_Description = `Fahrzeugwechsel darf für eCode178 Status A nicht durchgeführt werden.`;
        br124_Titel = `eCode178 eingetragen Status A`;
        br126_Category = `eVn`;
        br126_Description = `Ist ein Stanort-/Lenkereintrag vorhanden. Abbruch erfoderlich`;
        br126_Titel = `Standort- / Lenkereintrag`;
        br13_Category = `Halter`;
        br13_Description = `Wenn der Halter Minderjährig ist, ist ein Fahrzeugwechsel nicht möglich.`;
        br13_Titel = `Halter ist Minderjährig`;
        br131_Category = `Fahrzeug`;
        br131_Description = `Wenn ein besonderer Verwendungszweck ersichlich ist, darf der Wechsel nicht durchgeführt werden.`;
        br131_Titel = `Besonderer Verwendungszweck`;
        br140_Category = `Fahrzeug`;
        br140_Description = `Fahrzeuge mit kantonalen Stammumern dürfen nicht umgeschrieben werden. (900, 901,
            902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921,
            922, 923, 924, 925, 926, 930, 931, 932, 933)`;
        br140_Titel = `Kantonale Stammnummern (9xx.xxx.xxx)`;
        br142_Category = `Fahrzeug`;
        br142_Description = `Hat das Fahrzeug eine der nachfolgenden Verfügungen, darf der Wechsel nicht
        durchgeführt werden.117 = Überfallwarnung bewilligt / 153 = Halterwechsel ohne vorgängige Zollveranllagung
        verboten / 154 = Halterwechsel bis zum… ohne vorgängige Zollveranllagung verboten / 172 = Halterwechsel
        und/oder ordentliche Zulassung…. / 173 = Halterwechsel nur wenn Vorschriften über Geräusche.... /
            178 = Halterwechsel verboten / 179 = Halterwechsel innerhalb 12 Monaten sei.... / 186 = Für den Export
            bestimmt / 351 = Fahrzeug für Bedienung ohne Einsatz des linken Arms / 352 = Fahrzeug für Bedienung
            ohne Einsatz des rechten Arms / 353 = Fahrzeug für Bedienung ohne Einsatz des linken Beins / 354 =
            Fahrzeug für Bedienung ohne Einsatz des rechten Beins / 355 = Fahrzeug für Bedienung ohne Beineinsatz
                / 400 = offener Text / 500 = offener Text`;
        br142_Titel = `Fahrzeug hat eine der in dieser Regel definierten Verfügungen`;
        br143_Category = `Kontrollschild`;
        br143_Description = `Wenn das AV Fahrzeug ein Kontrollschild 1N hat, muss das IV Fahrzeug eine der folgenden
        Fahrzeugarten entsprechen:CA,GM,KB,KL,KM,LW,MK,ML,MW,PS,PW,SM,SS,TR`;
        br143_Titel = `Erlaubte Fahrzeugarten für Kontrollschild 1N einschränken`;
        br144_Category = `Kontrollschild`;
        br144_Description = `Wenn das AV Fahrzeug ein Kontrollschild 7N hat, muss das IV Fahrzeug eine der folgenden
        Fahrzeugarten entsprechen:DF,KF,RD,RM,RO`;
        br144_Titel = `Erlaubte Fahrzeugarten für Kontrollschild 7N einschränken`;
        br145_Category = `Kontrollschild`;
        br145_Description = `Wenn das AV Fahrzeug ein Kontrollschild 8N hat, muss das IV Fahrzeug eine der folgenden
        Fahrzeugarten entsprechen:FL,RK,RL`;
        br145_Titel = `Erlaubte Fahrzeugarten für Kontrollschild 8N einschränken`;
        br19_Category = `Fahrzeug`;
        br19_Description = `Wenn das Fahrzeug in Viacar / Mofis nicht gefunden wurde, ist der Fahrzeugwechsel nicht möglich.`;
        br19_Titel = `Fahrzeug nicht gefunden`;
        br20_Category = `Halter`;
        br20_Description = `Wenn der Halter spezielle Vermerke besitzt, ist ein Fahrzeugwechsel nicht möglich. (Status X)`;
        br20_Titel = `Halter hat spezielle Vermerke`;
        br21_Category = `Kontrollschild`;
        br21_Description = `Wird ein Fahrzeug mit Wechselschild umgeschrieben, ist kein Versicherungswechsel möglich. `;
        br21_Titel = `Kein Versicherungswechsel möglich bei Wechselschilder`;
        br23_Category = `Fahrzeug`;
        br23_Description = `Für ein Fahrzeugwechsel dürfen die Fahrzeuge keine Sperren enthalten. (Versicherungssperre,
            Kantonsperre, Ripolsperre, Kontrollschild ausgeschrieben)`;
        br23_Titel = `Fahrzeug gesperrt`;
        br24_Category = `Halter`;
        br24_Description = `Wenn kein Halter zum Fahrzeug gefunden wird, ist ein Fahrzeugwechsel nicht möglich.`;
        br24_Titel = `Halter nicht gefunden`;
        br25_Category = `Kontrollschild`;
        br25_Description = `Wenn kein Kontrollschild gefunden wird, ist ein Fahrzeugwechsel nicht möglich.`;
        br25_Titel = `Kontrollschild nicht gefunden`;
        br42_Category = `eVn`;
        br42_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 51 darf nicht durchgeführt werden `;
        br42_Titel = `eVN Inverkehrsetzungsgrund 51`;
        br43_Category = `Kontrollschild`;
        br43_Description = `Wenn es sich um ein Wechselschild handelt, darf der Fahrzeugwechsel nur dann durchgeführt
        werden, wenn die bestehende Versicherung mit der im eVn enthaltenen Versicherung übereinstimmt.`;
        br43_Titel = `Versicherungsvergleich bei Wechselschild`;
        br44_Category = `eVn`;
        br44_Description = `Die Fahrzeugart im eVn muss mit dem Fahrzeugart des zu in Verkehr setzenden Fahrzeuges übereinstimmen.`;
        br44_Titel = `Übereinstimmung Fahrzeugart`;
        br45_Category = `Fahrzeug`;
        br45_Description = `Fahrzeugwechsel dürfen für Anhänger nicht durchgeführt werden. (AA,AG,AL,AM,AN,AP,AR,AS,AT,AU,AV,AW,AX)`;
        br45_Titel = `Fahrzeugart Anhänger`;
        br47_Category = `Fahrzeug`;
        br47_Description = `Fahrzeugwechsel dürfen für Schwere Fz nicht durchgeführt werden. (CA,GM,LW,MW,PS,SM,SS)`;
        br47_Titel = `Fahrzeugart Schwere Fz`;
        br48_Category = `Fahrzeug`;
        br48_Description = `Fahrzeugwechsel dürfen für Motorräder und dreirädige Motor Fz nicht durchgeführt werden.
        (DF,FL,KF,RD,RF,RK,RL,RM,RO,RS)`;
        br48_Titel = `Fahrzeugart Motorräder und dreirädige Motor Fz`;
        br50_Category = `Fahrzeug`;
        br50_Description = `Fahrzeugwechsel dürfen für Landw. - und Arbeitsmotor Fz nicht durchgeführt werden. (KA,
            KM, LA, LE, LK, LM, LT, MA, ME, MK, TR)`;
        br50_Titel = `Fahrzeugart Landw. - und Arbeitsmotor Fz`;
        br51_Category = `Fahrzeug`;
        br51_Description = `Fahrzeugwechsel dürfen für Leichte Fz nicht durchgeführt werden. (KL, ML, PW)`;
        br51_Titel = `Fahrzeugart Leichte Fz`;
        br52_Category = `Kontrollschild`;
        br52_Description = `Fahrzeugwechsel darf für die Schildart 1 nicht durchgeführt werden`;
        br52_Titel = `Schildart 1 nicht erlaubt`;
        br53_Category = `Kontrollschild`;
        br53_Description = `Fahrzeugwechsel darf für die Schildart 2 nicht durchgeführt werden`;
        br53_Titel = `Schildart 2 nicht erlaubt`;
        br54_Category = `Kontrollschild`;
        br54_Description = `Fahrzeugwechsel darf für die Schildart 3 nicht durchgeführt werden`;
        br54_Titel = `Schildart 3 nicht erlaubt`;
        br55_Category = `Kontrollschild`;
        br55_Description = `Fahrzeugwechsel darf für die Schildart 4 nicht durchgeführt werden`;
        br55_Titel = `Schildart 4 nicht erlaubt`;
        br56_Category = `Kontrollschild`;
        br56_Description = `Fahrzeugwechsel darf für die Schildart 5 nicht durchgeführt werden`;
        br56_Titel = `Schildart 5 nicht erlaubt`;
        br57_Category = `Kontrollschild`;
        br57_Description = `Fahrzeugwechsel darf für die Schildart 6 nicht durchgeführt werden`;
        br57_Titel = `Schildart 6 nicht erlaubt`;
        br58_Category = `Kontrollschild`;
        br58_Description = `Fahrzeugwechsel darf für die Schildart 7 nicht durchgeführt werden`;
        br58_Titel = `Schildart 7 nicht erlaubt`;
        br59_Category = `Kontrollschild`;
        br59_Description = `Fahrzeugwechsel darf für die Schildart 8 nicht durchgeführt werden`;
        br59_Titel = `Schildart 8 nicht erlaubt`;
        br6_Category = `Halter`;
        br6_Description = `Falls der Halter inaktiv ist, ist ein Fahrzeugwechsel nicht möglich. Inaktive Stati: (A, B, C, E, G, K, U, Z)`;
        br6_Titel = `Halter inaktiv`;
        br60_Category = `Kontrollschild`;
        br60_Description = `Fahrzeugwechsel darf für die Schildart 9 nicht durchgeführt werden`;
        br60_Titel = `Schildart 9 nicht erlaubt`;
        br61_Category = `Kontrollschild`;
        br61_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (A)`;
        br61_Titel = `Schilderkennung (A) nicht erlaubt`;
        br62_Category = `Kontrollschild`;
        br62_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (AT)`;
        br62_Titel = `Schilderkennung (AT) nicht erlaubt`;
        br63_Category = `Kontrollschild`;
        br63_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (B)`;
        br63_Titel = `Schilderkennung (B) nicht erlaubt`;
        br64_Category = `Kontrollschild`;
        br64_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (CC)`;
        br64_Titel = `Schilderkennung (CC) nicht erlaubt`;
        br65_Category = `Kontrollschild`;
        br65_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (CD)`;
        br65_Titel = `Schilderkennung (CD) nicht erlaubt`;
        br66_Category = `Kontrollschild`;
        br66_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (H)`;
        br66_Titel = `Schilderkennung (H) nicht erlaubt`;
        br67_Category = `Kontrollschild`;
        br67_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (M)`;
        br67_Titel = `Schilderkennung (M) nicht erlaubt`;
        br68_Category = `Kontrollschild`;
        br68_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (N)`;
        br68_Titel = `Schilderkennung (N) nicht erlaubt`;
        br69_Category = `Kontrollschild`;
        br69_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (T)`;
        br69_Titel = `Schilderkennung (T) nicht erlaubt`;
        br7_Category = `eVn`;
        br7_Description = `Die Halterdaten zum Kontrollschild müssen mit den Halterdaten im eVn zu 100% übereinstimmen.
        (Nachname, Name, Geburtsdatum)`;
        br7_Titel = `Falsche Halterdaten in eVn`;
        br70_Category = `Kontrollschild`;
        br70_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (TA)`;
        br70_Titel = `Schilderkennung (TA) nicht erlaubt`;
        br71_Category = `Kontrollschild`;
        br71_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (U0)`;
        br71_Titel = `Schilderkennung (U0) nicht erlaubt`;
        br72_Category = `Kontrollschild`;
        br72_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (UN)`;
        br72_Titel = `Schilderkennung (UN) nicht erlaubt`;
        br73_Category = `Kontrollschild`;
        br73_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (Z)`;
        br73_Titel = `Schilderkennung (Z) nicht erlaubt`;
        br74_Category = `Kontrollschild`;
        br74_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (LA)`;
        br74_Titel = `Schilderkennung (LA) nicht erlaubt`;
        br75_Category = `Kontrollschild`;
        br75_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (FN)`;
        br75_Titel = `Schilderkennung (FN) nicht erlaubt`;
        br76_Category = `Kontrollschild`;
        br76_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (MB)`;
        br76_Titel = `Schilderkennung (MB) nicht erlaubt`;
        br77_Category = `Kontrollschild`;
        br77_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (MN)`;
        br77_Titel = `Schilderkennung (MN) nicht erlaubt`;
        br78_Category = `Kontrollschild`;
        br78_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (MZ)`;
        br78_Titel = `Schilderkennung (MZ) nicht erlaubt`;
        br79_Category = `Kontrollschild`;
        br79_Description = `Fahrzeugwechsel darf für diese Schilderkennung nicht durchgeführt werden. (W)`;
        br79_Titel = `Schilderkennung (W) nicht erlaubt`;
        br8_Category = `Halter`;
        br8_Description = `Wenn der Halter den Vermerk Barzahler hat ist der Fahrzeugwechsel nicht möglich.`;
        br8_Titel = `Halter ist Barzahler`;
        br80_Category = `Kontrollschild`;
        br80_Description = `Ein Fahrzeugwechsel darf nicht durchgeführt werden, wenn es sich um ein
        Wechselschild handelt.`;
        br80_Titel = `Fahrzeugwechsel für Wechselschilder nicht erlaubt`;
        br81_Category = `eCode178`;
        br81_Description = `Fahrzeugwechsel darf für eCode178 Status G nicht durchgeführt werden.`;
        br81_Titel = `eCode178 eingetragen, Status G`;
        br82_Category = `eCode178`;
        br82_Description = `Fahrzeugwechsel darf für eCode178 Status E nicht durchgeführt werden.`;
        br82_Titel = `eCode 178 eingetragen, Status E`;
        br83_Category = `eCode178`;
        br83_Description = `Fahrzeugwechsel darf für eCode178 Status H nicht durchgeführt werden.`;
        br83_Titel = `eCode178, eingetragen, Status H`;
        br84_Category = `eCode178`;
        br84_Description = `Fahrzeugwechsel darf für eCode178 Status F nicht durchgeführt werden.`;
        br84_Titel = `eCode178, eingetragen, Status F`;
        br85_Category = `eVn`;
        br85_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 52 darf nicht durchgeführt werden.`;
        br85_Titel = `eVN Inverkehrsetzungsgrund 52`;
        br86_Category = `eVn`;
        br86_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 53 darf nicht durchgeführt werden `;
        br86_Titel = `eVN Inverkehrsetzungsgrund 53`;
        br87_Category = `eVn`;
        br87_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 54 darf nicht durchgeführt werden `;
        br87_Titel = `eVN Inverkehrsetzungsgrund 54`;
        br88_Category = `eVn`;
        br88_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 55 darf nicht durchgeführt werden `;
        br88_Titel = `eVN Inverkehrsetzungsgrund 55`;
        br89_Category = `eVn`;
        br89_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 56 darf nicht durchgeführt werden `;
        br89_Titel = `eVN Inverkehrsetzungsgrund 56 `;
        br90_Category = `eVn`;
        br90_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 57 darf nicht durchgeführt werden `;
        br90_Titel = `eVN Inverkehrsetzungsgrund 57`;
        br91_Category = `eVn`;
        br91_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 58 darf nicht durchgeführt werden `;
        br91_Titel = `eVN Inverkehrsetzungsgrund 58`;
        br92_Category = `eVn`;
        br92_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 59 darf nicht durchgeführt werden `;
        br92_Titel = `eVN Inverkehrsetzungsgrund 59`;
        br93_Category = `eVn`;
        br93_Description = `Ein Fahrzeugwechsel mit IV Grund im eVn = 50 darf nicht durchgeführt werden `;
        br93_Titel = `eVN Inverkehrsetzungsgrund 50`;
        br94_Category = `eVn`;
        br94_Description = `Falls die Stammnummer aus Viacar nicht mit der eVn übereinstimmt, darf der Fahrzeugwechsel
        nicht durchgeführt werden`;
        br94_Titel = `eVn Stammnummer nicht korrekt`;
        br95_Category = `Sucheingabe`;
        br95_Description = `Falls die Fahrgestellnummer aus Viacar nicht mit der eVn übereinstimmt, darf der
        Fahrzeugwechsel nicht durchgeführt werden`;
        br95_Titel = `eVn Fahrgestellnummer nicht korrekt`;
        br98_Category = `eVn`;
        br98_Description = `Bei einer Firma darf im eVn kein Geb. - Datum erfasst sein. Abbruch erfoderlich`;
        br98_Titel = `Firmen / Geb-Datum in eVn`;
        br99_Category = `eCode178`;
        br99_Description = `Fahrzeugwechsel darf für eCode178 Status N nicht durchgeführt werden.`;
        br99_Titel = `eCode178, eingetragen, Status N`;
        BusinessRuleConfiguration_Filter_Categories = `Kategorie`;
        BusinessRuleConfiguration_Filter_Status = `Status`;
        BusinessRuleConfiguration_OptionTitle = `Business Regel`;
        BusinessRuleConfiguration_Page_First = `<<`;
        BusinessRuleConfiguration_Page_Last = `>>`;
        BusinessRuleConfiguration_Page_Next = `>`;
        BusinessRuleConfiguration_Page_Previous = `<`;
        BusinessRuleConfiguration_Search = `Suchen`;
        BusinessRuleConfiguration_TableHeader_BusinessRuleId = `BR ID`;
        BusinessRuleConfiguration_TableHeader_Category = `Kategorie`;
        BusinessRuleConfiguration_TableHeader_Description = `Beschreibung`;
        BusinessRuleConfiguration_TableHeader_Mandatory = `Obligatorisch`;
        BusinessRuleConfiguration_TableHeader_Status = `Deaktiviert / Aktiviert`;
        BusinessRuleConfiguration_TableHeader_Title = `Titel`;
        BusinessRuleConfiguration_Title = `Business Regel Konfiguration`;
        Button_AddNewCompany = `Garage hinzufügen`;
        Button_AddNewUser = `Benutzer hinzufügen`;
        Button_AddUser = `Benutzer hinzufügen`;
        Button_BackToOverview = `Zurück`;
        Button_Confirm = `Bestätigen`;
        Button_Confirmed = `Bestätigt`;
        Button_GoBack = `Zurück`;
        Button_NewVehicleChange = `Fahrzeugwechsel durchführen`;
        Button_Print = `Drucken`;
        Button_Save = `Speichern`;
        Button_SaveAsDraft = `Entwurf speichern`;
        Button_Search = `Suchen`;
        Button_Submit = `Senden`;
        Button_Submitted = `Übermittelt`;
        ConfigurationSummary_Attachments = `Anhang`;
        ConfigurationSummary_Comment_field = `Kommentar`;
        ConfigurationSummary_Digital_Workflow = `Digitaler Workflow`;
        ConfigurationSummary_OptionTitle = `Fahrzeugwechsel`;
        ConfigurationSummary_Send_new_vehicle_registration_paper_to = `Neuen Ausweis senden an`;
        ConfigurationSummary_Send_old_vehicle_registration_paper_to = `Annulierten Ausweis an`;
        ConfigurationSummary_Title = `Konfiguration Fahrzeugwechsel`;
        Data_Error = `Fehler`;
        Data_IntoCirculationPossible = `Fahrzeugwechsel möglich`;
        Data_OutOfCirculationPossible = `Fahrzeugwechsel möglich`;
        Data_Warning = `Warnung`;
        DataTable_Label_EmptyTable = `Keine Daten gefunden`;
        DataTable_Label_Info = `_START_ bis _END_ von _TOTAL_ Einträgen`;
        DataTable_Label_InfoEmpty = `0 bis 0 von 0 Einträgen`;
        DataTable_Label_InfoFiltered = `(gefiltert von _MAX_ Einträgen)`;
        DataTable_Label_LengthMenu = `_MENU_ Einträge anzeigen`;
        DataTable_Label_LoadingRecords = `Wird geladen...`;
        DataTable_Label_Processing = `Bitte warten...`;
        DataTable_Label_Search = `Suchen`;
        DataTable_Label_ZeroRecords = `Keine Einträge vorhanden.`;
        Error_400 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        Error_401 = `Der aktuelle Benutzer ist nicht autorisiert diese Aktion auszuführen.`;
        Error_403 = `Der aktuelle Benutzer hat unzureichende Berechtigungen, um diese Aktion auszuführen.`;
        Error_404 = `Zu den angegebenen Daten konnte kein Fahrzeug gefunden werden. Bitte überprüfen Sie die Daten und suchen Sie erneut.`;
        Error_405 = `Das Fahrzeug wurde bereits in einem bestehenden Fall verwendet und darf nicht erneut gesendet werden.`;
        Error_409 = `Bei der Änderung der Business Regel ist ein technischer Fehler aufgetaucht. Bitte wiederholen Sie den Vorgang erneut.`;
        Error_500 = `Der Applikationsserver konnte aktuell nicht erreicht werden. Bitte versuchen Sie es später erneut.`;
        Error_502 = `Der Applikationsserver konnte aktuell nicht erreicht werden. Bitte versuchen Sie es später erneut.`;
        Error_503 = `Der Applikationsserver konnte aktuell nicht erreicht werden. Bitte versuchen Sie es später erneut.`;
        Error_Attachment_Warning = `Der Upload der Anhänge konnte nicht durchgeführt werden. Bitte versuchen Sie es
        erneut oder entfernen Sie den Anhang um den Fall zu speichern/abzuschliessen. (Wichtig: Nachdem der Fall
            übermittelt wurde können keine weiteren Anhänge hinzugefügt werden.)`;
        Error_ChangePassword_Match = `Die zwei neuen Passwörter stimmen nicht überein.`;
        Error_ChangePassword_MatchNewUser = `Die neuen Passwörter stimmen nicht überein.`;
        Error_Delete_404 = `Der angefragte Fahrzeugwechsel wurde nicht gefunden.`;
        Error_Delete_409 = `Der angeforderte Fahrzeugwechsel kann nicht gelöscht werden. (falscher Fahrzeugwechsel-Fallstatus)`;
        Error_Delete_500 = `Interner Schnittstellenfehler: Der Fahrzeugwechsel-Fall konnte nicht gelöscht werden.
        Bitte wenden Sie sich an den Systemadministrator.`;
        Error_Print_404 = `Der angefragte Fahrzeugwechsel wurde nicht gefunden.`;
        Error_Print_409 = `Die vorläufige Inverkehrssetzungserlaubnis kann nur gedruckt werden, wenn der
         Fall erfolgreich übermittelt wurde.`;
        Error_Print_500 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Print, 500)`;
        Error_Revalidation = `Der Fall konnte nicht übermittelt werden, da die Fahrzeugdaten zwischenzeitlich geändert
        wurden und die erneute Validierung der Suchresultate fehlgeschlagen ist. `;
        Error_Submit = `Der angefragte Service steht aktuell nicht zur Verfügung. Bitte versuchen Sie es später erneut.`;
        ErrorCode_ActiveDirectoryChangePasswordInvalidInputModel = `Beim Ändern des Passworte ist ein technischer
        Fehler aufgetreten. (PasswordInvalidInputModel)`;
        ErrorCode_ActiveDirectoryChangePasswordIsNotAcceptable = `Das Passwort für einen StVA Benutzer darf nicht geändert werden`;
        ErrorCode_ActiveDirectoryCurrentAndNewPasswordsAreIdentical = `Das alte und das neue Passwort dürfen nicht übereinstimmen`;
        ErrorCode_ActiveDirectoryDealerAlreadyExists = `Die Garage exisitiert bereits in der Datenbank. `;
        ErrorCode_ActiveDirectoryDealerIsFromAnotherCanton = `Der angegebene Benutzer ist einem anderen Kanton
        zugeordnet und kann für diesen Kanton nicht gespeichert werden.`;
        ErrorCode_ActiveDirectoryDealerNotFound = `Der Benutzer wurde nicht gefunden.`;
        ErrorCode_ActiveDirectoryNewDealerInvalidInputModel = `Der neue Benutzer konnte nicht gespeichert werden.
        Bitte wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin bestehen bleibt. `;
        ErrorCode_ActiveDirectoryNewDealerWasNotCreated = `Die neue Garage konnte nicht erstellt werden. Bitte
        wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin bestehen bleibt.`;
        ErrorCode_ActiveDirectoryNewPasswordIsNotAcceptable = `Das neue Passwort entspricht nicht den
        Sicherheitsbestimmungen. (7 Zeichen, Klein- und Grossschreibung, Alphanumerisch)`;
        ErrorCode_ActiveDirectoryNewPasswordsNotIdentical = `Die zwei neuen Passwörter stimmen nicht überein.`;
        ErrorCode_ActiveDirectoryNewUserInvalidInputModel = `Beim erstellen des Benutzers ist ein technischer Fehler aufgetreten.`;
        ErrorCode_ActiveDirectoryNewUserIsNotAcceptable = `Sie verfügen nicht über die benötigte Berechtigung um neue Benutzer anzulegen`;
        ErrorCode_ActiveDirectoryNewUserWasNotCreated = `Der neue Benutzer konnte nicht gespeichert werden.
        Bitte wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin bestehen bleibt. `;
        ErrorCode_ActiveDirectoryPasswordWasNotChanged = `Das Passwort konnte nicht geändert werden. Bitte überprüfen
        Sie die Angaben und versuchen Sie es erneut.`;
        ErrorCode_ActiveDirectoryUserAlreadyExists = `Die verwendete Email-Adresse wird in der Benutzerverwaltung
        bereits verwendet und kann nicht erneut verwendet werden.`;
        ErrorCode_ActiveDirectoryUserNotFound = `Der Benutzer wurde nicht gefunden.`;
        ErrorCode_Attachment_400 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Attachment, 400)`;
        ErrorCode_Attachment_409 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Attachment 409)`;
        ErrorCode_AttachmentCannotBeDeleted = `Der Benutzer kann nicht gelöscht werden.`;
        ErrorCode_AttachmentCannotBeDeletedWrongDealer = `Dieser Benutzer darf den Anhang nicht löschen, da er
        von einem anderen Benutzer hochgeladen wurde.`;
        ErrorCode_AttachmentNotFound = `Der Anhang wurde in der Datenbank nicht gefunden.`;
        ErrorCode_AttachmentTypeNotAllowed = `Das Dateiformat für diesen Anhang wird nicht unterstützt.`;
        ErrorCode_br1 = `Es wurde kein elektronischer Versicherungsnachweis (eVn) gefunden. Bitte kontaktieren Sie
        die Versicherungsgesellschaft und lassen sich ein eVn austellen.`;
        ErrorCode_br100 = `Der Wechsel eines Fahrzeuges mit Gefahrengut ist nicht online möglich. Bitte wenden Sie
        sich an das Strassenverkehrsamt.`;
        ErrorCode_br101 = `Die Güligkeit des eVn muss mindestens 7 Tage betragen. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und lassen sie sich einen neuen eVn ausstellen. `;
        ErrorCode_br102 = `Die Güligkeit des eVn muss mindestens 14 Tage betragen. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und lassen sie sich einen neuen eVn ausstellen.`;
        ErrorCode_br103 = `Die Güligkeit des eVn muss mindestens 21 Tage betragen. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und lassen sie sich einen neuen eVn ausstellen.`;
        ErrorCode_br104 = `Die Güligkeit des eVn muss mindestens 28 Tage betragen. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und lassen sie sich einen neuen eVn ausstellen.`;
        ErrorCode_br105 = `Das Gültig ab Datum des eVn liegt in der Zukunft. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und lassen sie einen für heute gültigen eVn austellen.`;
        ErrorCode_br106 = `Fahrzeugwechsel dürfen für Kleinbusse nicht nicht durchgeführt werden.{KB}`;
        ErrorCode_br107 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br108 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br109 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br11 = `Die angefragte Stamm-Nr. stimmt nicht mit der erhaltenen überein. Wiederholen Sie den
        Vorgang. Bleibt die Meldung bestehen, melden Sie den Fehler dem StVA.`;
        ErrorCode_br110 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br116 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br117 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br119 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich, da der elektronische
        Versicherungsnachweis ein Befristungsdatum enthält`;
        ErrorCode_br12 = `Die angefragte Fahrgestell-Nr. stimmt nicht mit der erhaltenen überein. Wiederholen
        Sie den Vorgang. Bleibt die Meldung bestehen, melden Sie den Fehler dem StVA.`;
        ErrorCode_br123 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich (Platzzahl > 9).
        Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br124 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br126 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich (Standort-/Lenkereintrag).
        Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br120 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br121 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br13 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br131 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br132 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br135 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br137 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br140 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugtyp nicht online durchgeführt werden.
        Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br141 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br142 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_br143 = `Das Kontrollschild (1N) darf für diese Fahrzeugart nicht verwendet werden.`;
        ErrorCode_br144 = `Das Kontrollschild (7N) darf für diese Fahrzeugart nicht verwendet werden.`;
        ErrorCode_br145 = `Das Kontrollschild (8N) darf für diese Fahrzeugart nicht verwendet werden. `;
        ErrorCode_br19 = `Zu den angegebenen Daten konnte kein Fahrzeug gefunden werden. Bitte überprüfen Sie
         die Daten und suchen Sie erneut.`;
        ErrorCode_br20 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br21 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br23 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br24 = `Für das angefragte Fahrzeug wurde kein Halter gefunden. Bitte kontaktieren Sie das StVA.`;
        ErrorCode_br25 = `Für das angefragte Fahrzeug wurde kein Kontrollschild gefunden. Bitte kontaktieren Sie das StVA`;
        ErrorCode_br42 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br43 = `Der Fahrzeugwechsel für Wechselschilder kann nur durchgeführt werden, wenn die Vesicherung im
        eVn mit der \"alten\" Versicherungsgesellschaft übereinstimmt. Bitte kontaktieren Sie die
        Versicherungsgesellschaft und versuchen Sie es später erneut. `;
        ErrorCode_br44 = `Die Fahrzeugart im eVn stimmt nicht mit dem gesuchten Fahrzeug überein. Bitte kontaktieren
        Sie die Versicherungsgesellschaft und versuchen Sie es später erneut. `;
        ErrorCode_br45 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br46 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br47 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br48 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br50 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br51 = `Ein Fahrzeugwechsel darf für diesen Fahrzeugart nicht online durchgeführt werden.
         Bitte wenden Sie sich an das StVa.`;
        ErrorCode_br52 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br53 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br54 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br55 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br56 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br57 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br58 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br59 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br6 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br60 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br61 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br62 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br63 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br64 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br65 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br66 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br67 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br68 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br69 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br7 = `Die Halterangaben zum Kontrollschild stimmen nicht mit den Angaben im eVn überein.
        Bitte überprüfen Sie die Angaben mit der Versicherungsgesellschaft und versuchen Sie es erneut.`;
        ErrorCode_br70 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br71 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br72 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br73 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br74 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br75 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br76 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br77 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br78 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br79 = `Ein Fahrzeugwechsel darf für diese Kontrollschildart nicht online durchgeführt werden.
        Bitte wenden Sie sich das StVA.`;
        ErrorCode_br8 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br80 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br81 = `Der im eVn eingetragene IV Grund ist für einen online Fahrzeugwechsel nicht erlaubt.
        Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den Grund überprüfen.`;
        ErrorCode_br82 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das StVA.`;
        ErrorCode_br83 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br84 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br85 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br86 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br87 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br88 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br89 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br90 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br91 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br92 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br93 = `Der im eVn eingetragene Inverkehrssetzungsgrund Grund ist für einen online Fahrzeugwechsel
        nicht erlaubt. Bitte kontaktieren Sie die Versicherungsgesellschaft und lassen Sie den IV Grund überprüfen.`;
        ErrorCode_br94 = `Die angefragte Stamm-Nr. stimmt nicht mit der erhaltenen Nummer überein. Wiederholen Sie
        den Vorgang. Bleibt die Meldung bestehen, melden Sie den Fehler dem StVA.`;
        ErrorCode_br95 = `Die angefragte Fahrgestell-Nr. stimmt nicht mit der erhaltenen Nummber überein. Bitte
        wiederholen Sie den Vorgang. Bleibt die Meldung bestehen, melden Sie den Fehler dem StVA.`;
        ErrorCode_br98 = `Der eVn für eine Unternehmung darf kein Geburtstag enthalten. Bitte kontaktieren Sie
        die Versicherungsgesellschaft und lassen Sie sich einen neuen eVn ausstellen.`;
        ErrorCode_br99 = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt. `;
        ErrorCode_BusinessRule_400 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (BusinessRule, 400)`;
        ErrorCode_BusinessRule_404 = `Die gesuchte Business Regel wurde nicht gefunden.`;
        ErrorCode_BusinessRule_409 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Business Rule, 409)`;
        ErrorCode_BusinessRule_500 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (BusinessRule, 500)`;
        ErrorCode_BusinessRuleError = `Bei der Suche der Business Regel ist ein technischer Fehler aufgetaucht.
        Bitte wiederholen Sie den Vorgang erneut.`;
        ErrorCode_BusinessRuleSettingsNotFound = `Die Business Regel Einstellung konnte nicht gefunden werden.`;
        ErrorCode_BusinessRuleSettingsWrongCanton = `Die Business Regeln können nicht geändert werden, da
         sie zu einem anderen Kanton gehören.`;
        ErrorCode_ChangePassword_500 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich
         an das StVA. (Change Password, 500)`;
        ErrorCode_EmptyField = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (EmptyField)`;
        ErrorCode_FileTooBig = `Die angehängte Datei hat die maximale Grösse überschritten (5MB)`;
        ErrorCode_Generic = `Der Wechsel dieses Fahrzeuges ist nicht online möglich. Bitte wenden Sie sich an das Strassenverkehrsamt.`;
        ErrorCode_RegistrationCertificateCannotBeShown = `Das PDF für diesen Fall kann nicht angezeigt werden (technischer Error)`;
        ErrorCode_SecurityRequirementsNotFulfilled = `Das neue Passwort entspricht nicht den Sicherheitsbestimmungen.
        (7 Zeichen, Klein- und Grossschreibung, Alphanumerisch)`;
        ErrorCode_SecurityRequirementsNotFulfilledNewUser = `Das neue Passwort entspricht nicht den
        Sicherheitsbestimmungen. (7 Zeichen, Klein- und Grossschreibung, Alphanumerisch)`;
        ErrorCode_TextTooLong = `Der eingetragene Kommentar ist zu lang. Bitte kürzen Sie den Text und versuchen Sie es erneut`;
        ErrorCode_TooManyAttachments = `Die maximale Anzahl der Anhänge (5) wurde überschritten.`;
        ErrorCode_Unauthorized = `Der Zugriff auf das Viacar System wurde nicht authorisiert.`;
        ErrorCode_V09ResponseDataError = `Die Anfrage an das Viacar System hat falsche Daten zurückgeliefert. (Viacar-Error)`;
        ErrorCode_V09ResponseDataValidationError = `Die Fahrzeugdaten der erhaltenen Antwort vom Viacar System sind nicht korrekt.`;
        ErrorCode_V09ServiceError = `Das angefragte System hat einen Fehler zurückgeliefert (V09 - 500 Internal Server Error)`;
        ErrorCode_V09ServiceNotAvailable = `Die Viacar Schnittstelle steht aktuell nicht zur Verfügung. `;
        ErrorCode_VehicleChangeCaseCannotBeDeleted = `Der Fahrzeugwechsel kann nicht gelöscht werden.`;
        ErrorCode_VehicleChangeCaseCannotBeDeletedWrongDealer = `Der Anhang eines anderen Benutzers darf nicht gelöscht werden.`;
        ErrorCode_VehicleChangeCaseCannotBeEditedWrongDealer = `Der Fahrzeugwechsel darf aufgrund fehlender Berechtigung
        nicht editiert werden.`;
        ErrorCode_VehicleChangeCaseConfiguration_400 = `Bei der Konfiguration der Fahrzeugwechsel ist ein technischer
        Fehler aufgetreten (CaseConfigurationInvalidInputModel)`;
        ErrorCode_VehicleChangeCaseConfiguration_404 = `Die Konfigurationeinstellungen konnten nicht gefunden werden.`;
        ErrorCode_VehicleChangeCaseConfiguration_409 = `Diese Einstellungen können mit diesem Benutzer
         nicht geändert werden (falscher Kanton)`;
        ErrorCode_VehicleChangeCaseConfiguration_500 = `Es ist ein technischer Fehler aufgetreten, bitte wenden Sie
        sich an das StVA. (CaseConfiguration, 500)`;
        ErrorCode_VehicleChangeCaseConfigurationInvalidInputModel = `Bei der Konfiguration der
        Fahrzeugwechsel-Einstellungen ist ein technischer Fehler aufgetreten. (CaseConfigurationInvalidInputModel)`;
        ErrorCode_VehicleChangeCaseConfigurationNotFound = `Die Konfigurationeinstellungen konnten nicht gefunden
        werden.`;
        ErrorCode_VehicleChangeCaseConfigurationWrongCanton = `Diese Einstellungen können mit diesem Benutzer nicht
        geändert werden (falscher Kanton)`;
        ErrorCode_VehicleChangeCaseHasWrongStatus = `Der Fahrzeugwechselfall hat einen falschen Status. Die Aktion
        kann nicht ausgeführt werden.`;
        ErrorCode_VehicleChangeCaseNotFound = `Der Fahrzeugwechselfall konnte nicht gefunden werden.`;
        ErrorCode_VehicleIntoCirculationAlreadyInAnotherSubmittedCase = `Das ausser zu Verkehr setzende
        Fahrzeug wurde bereits in einem anderen Fall verwendet.`;
        ErrorCode_VehicleOutOfCirculationAlreadyInAnotherSubmittedCase = `Das ausser zu Verkehr setzende
        Fahrzeug wurde bereits in einem anderen Fall verwendet.`;
        Info_InputChanged = `Die Stamm-Nr. oder Fahrgestell-Nr. für das Fahrzeug (0) wurde geändert.
        Bitte klicken Sie auf \"Suchen\", um nach dem neuen Fahrzeug zu suchen. Andernfalls wird die
        ursprünglich gesuchte Stamm-Nr. und Fahrgestell-Nr. verwendet.`;
        Info_InputChanged_Vehicle1 = `Stamm- oder Fahrgestell-Nr. für das ausser Verkehr zu setzende
        Fahrzeug wurde geändert. Bitte klicken Sie auf \"Suchen\", um die Fahrzeugdaten zu aktualisieren.
        Andernfalls werden die ursprünglich gesuchten Stamm- und Fahrgestell-Nr. für die Umschreibung verwendet.`;
        Info_InputChanged_Vehicle2 = `Stamm- oder Fahrgestell-Nr. für das in zu Verkehr zu setzende
        Fahrzeug wurde geändert. Bitte klicken Sie auf \"Suchen\", um die Fahrzeugdaten zu aktualisieren.
        Andernfalls werden die ursprünglich gesuchten Stamm- und Fahrgestell-Nr. für die Umschreibung verwendet.`;
        Label_Activated = `Aktiviert`;
        Label_Attachment = `Anhang`;
        Label_BusinessServices = `Geschäftsservices`;
        Label_CancelRegistrationPaperTo = `Annulierten Ausweis an`;
        Label_CaseSummary = `Zusammenfassung`;
        Label_ChangePassword = `Passwort ändern`;
        Label_ChassisNumber = `Fahrgestell-Nr.`;
        Label_City = `Stadt`;
        Label_Comment = `Kommentar`;
        Label_Company = `Garage`;
        Label_CompanyName = `Name Garage`;
        Label_Completion = `Abschluss`;
        Label_ConfigurationSummary = `Konfiguration Fahrzeugwechsel`;
        Label_ConfirmNewPassword = `Neues Passwort bestätigen`;
        Label_ConfirmPassword = `Passwort bestätigen`;
        Label_Deactivated = `Deaktiviert`;
        Label_ElectInsuranceValidTo = `eVn gültig bis`;
        Label_Email = `Email (Benutzer)`;
        Label_English = `English`;
        Label_ExistingPassword = `Bestehende Passwort`;
        Label_FirstName = `Vorname`;
        Label_French = `Français`;
        Label_German = `Deutsch`;
        Label_LastName = `Nachname`;
        Label_Logout = `Logout`;
        Label_ManageCompanies = `Garage verwalten`;
        Label_ManageUser = `Benutzer verwalten`;
        Label_MatriculationNumber = `Stamm-Nr.`;
        Label_Menu = `Menü`;
        Label_NewPassword = `Neues Passwort`;
        Label_NewRegistrationPaperTo = `Neuen Ausweis an`;
        Label_NewVehicleChange = `Fahrzeugwechsel durchführen`;
        Label_NumberPlate = `Kontrollschild`;
        Label_OverviewVehicleChangeCases = `Übersicht Fahrzeugwechsel`;
        Label_Owner = `Fahrzeughalter`;
        Label_Password = `Passwort`;
        Label_Phone = `Telefon`;
        Label_PutIntoCirculation = `Fahrzeug in Verkehr setzen`;
        Label_PutOutOfCirculation = `Fahrzeug ausser Verkehr setzen`;
        Label_ResetPassword = `Passwort zurücksetzen`;
        Label_RtdLocation = `StVA Standort`;
        Label_Status = `Status`;
        Label_Street = `Strasse`;
        Label_TypeHere = `Hier eingeben`;
        Label_Upload = `Hochladen`;
        Label_User = `Benutzer`;
        Label_UserManagement_Company = `Benutzerverwaltung - Garagen`;
        Label_UserManagement_NewCompany = `Benutzerverwaltung - Neue Garage`;
        Label_UserManagement_NewUser = `Benutzerverwaltung - Neuer Benutzer`;
        Label_UserManagement_ChangeUser = `User Management – Benutzer ändern`;
        Label_UserManagement_Users = `Benutzerverwaltung`;
        Label_Username = `Benutzer`;
        Label_Vehicle = `Fahrzeug`;
        Label_ZipCode = `PLZ`;
        Message_ChangePassword_Successful = `Passwort erfolgreich geändert`;
        Message_Confirm_Cancel = `Abbrechen`;
        Message_Confirm_Ok = `Ok`;
        Message_DeleteCase = `Sind Sie sicher, dass Sie den ausgewählten Fall löschen möchten?`;
        Message_DeleteUser = `Sind Sie sicher, dass Sie den aktuellen Benutzer löschen möchten?`;
        Message_Logout = `Sind Sie sicher, dass Sie sich abmelden möchten?`;
        Message_NavigateAway = `Sie haben noch ungespeicherte Daten. Sind Sie sicher, dass Sie die Seite verlassen möchten?`;
        Message_ReloadPage = `Sind Sie sicher, dass Sie die Seite aktualisieren möchten? Die Änderungen gehen dabei verloren.`;
        Message_Saved = `Die Änderungen wurden erfolgreich gespeichert.`;
        Object_Eic_DateOfBirth = `eVn - Geburtsdatum`;
        Object_Eic_InsuranceId = `eVn - VersicherungsId`;
        Object_Eic_OwnerFirstname = `eVn - Vorname`;
        Object_Eic_OwnerName = `eVn - Name`;
        Object_Eic_VehicleType = `eVn - Fahrzeugart`;
        Object_NumberPlate_InsuranceId = `Kontrollschild - VersicherungsId`;
        Object_Owner_DateOfBirth = `Fahrzeughalter - Geburtsdatum`;
        Object_Owner_Firstname = `Fahrzeughalter - Vorname`;
        Object_Owner_Name = `Fahrzeughalter - Name`;
        Object_Vehicle_VehicleType = `Fahrzeug – Fahrzeugart`;
        Option_Customer = `Kunde`;
        Option_Garage = `Garage`;
        Page_First = `<<`;
        Page_Last = `>>`;
        Page_Next = `>`;
        Page_Previous = `<`;
        Placeholder_LastFourCharacters = `letzten 4 Ziffern`;
        Placeholder_ListOfCompanies = `Garage..`;
        Placeholder_ListOfServices = `Geschäftsservices..`;
        Status_Cancelled = `Zurückgewiesen`;
        Status_Completed = `Abgeschlossen`;
        Status_InProgress = `In Bearbeitung`;
        Status_New = `Neu`;
        Status_Rejected = `Abgelehnt`;
        Status_RTD_Completed = `Durchgeführt`;
        Status_RTD_InProgress = `In Bearbeitung`;
        Status_RTD_Open = `Neu`;
        Status_RTD_Rejected = `Zurückgewiesen`;
        Status_Submitted = `Gesendet`;
        Text_ConfirmedMessage = `Angaben bestätigt`;
        Text_ConfirmMessage = `Bitte bestätigen Sie die Korrektheit der Daten.`;
        Text_SubmitMessage = `Fahrzeugwechsel an das StVA senden.`;
        Text_SuccessfullySubmitted = `Falldaten erfolgreich übermittelt`;
        Text_UserCanAdd = `Garagen Admin: Kann neue Benutzer hinzufügen.`;
        Title_Action = `Ausblenden / Einblenden`;
        Title_Attachments = `Anhang`;
        Title_DefaultValue = `Standard-Wert`;
        Title_InternalStatus = `Interner Status`;
        Title_MatriculationNumber1 = `Stamm-Nr. 1`;
        Title_MatriculationNumber2 = `Stamm-Nr. 2`;
        Title_NumberPlate = `Kontrollschild`;
        Title_Owner = `Fahrzeughalter`;
        Title_Setting = `Eingabefeld`;
        Title_StatusRTD = `Status StVA`;
        Warning_SameMatriculation = `Das selbe Fahrzeug darf nicht ausser und wieder in Verkehr gesetzt werden.
        Bitte ändern Sie eines der beiden Fahrzeuge und suchen Sie erneut.`;
        languageCode = `de`;
        languageName = this.Label_German;
    }
}
