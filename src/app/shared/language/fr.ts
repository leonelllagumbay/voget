import { ILanguage } from '../interface/ilanguage';

namespace Viacar.eGov.Localization {
    export class Fr implements ILanguage {
        br1_Category = `eVn`;
        br1_Description = `L\'attestation d\'assurance doit être disponible pour le véhicule à mettre en circulation.
        La validité et le contenu de cette attestation seront contrôlés par des règles de gestion complémentaires.`;
        br1_Titel = `eVn disponible`;
        br100_Category = `eVn`;
        br100_Description = `Le changement de véhicule est bloqué pour les véhicules transportant des marchandises dangereuses.`;
        br100_Titel = `Marchandises dangereuses dans eVn`;
        br101_Category = `eVn`;
        br101_Description = `L\'attestation d\'assurance doit être encore valable 7 jours après la demande de
        prestation. Sa validité est calculée depuis la date d\'émission + 29 jours`;
        br101_Titel = `Durée de validité de l\'eVn > 7 jours`;
        br102_Category = `eVn`;
        br102_Description = `L\'attestation d\'assurance doit être encore valable 14 jours après la demande de
        prestation. Sa validité est calculée depuis la date d\'émission + 29 jours`;
        br102_Titel = `Durée de validité de l\'eVn > 14 jours`;
        br103_Category = `eVn`;
        br103_Description = `L\'attestation d\'assurance doit être encore valable 21 jours après la demande de
        prestation. Sa validité est calculée depuis la date d\'émission + 29 jours`;
        br103_Titel = `Durée de validité de l\'eVn > 21 jours`;
        br104_Category = `eVn`;
        br104_Description = `L\'attestation d\'assurance doit être encore valable 28 jours après la demande de
        prestation. Sa validité est calculée depuis la date d\'émission + 29 jours`;
        br104_Titel = `Durée de validité de l\'eVn > 28 jours`;
        br105_Category = `eVn`;
        br105_Description = `L\'attestation d\'assurance doit être datée au jour de la demande de prestation ou
        antérieurement, mais ne peut pas être datée ultérieurement.`;
        br105_Titel = `eVn daté ultérieurement`;
        br106_Category = `Véhicule`;
        br106_Description = `Le changement de véhicule est bloqué pour les véhicules minibus.`;
        br106_Titel = `Genre de véhicules - minibus`;
        br109_Category = `eCode178`;
        br109_Description = `[FR] Fahrzeugwechsel darf für eCode178 Status F und Folgestatus A nicht durchgeführt werden.`;
        br109_Titel = `[FR] eCode178 eintrag mit Status F und Folgestatus A`;
        br11_Category = `Véhicule`;
        br11_Description = `Le changement de véhicule est bloqué si le numéro de matricule demandé ne correspond pas
        au véhicule (erreur d\'interface).`;
        br11_Titel = `Mauvais véhicule livré (n° de matricule)`;
        br119_Category = `eVn`;
        br119_Description = `[FR] Wenn ein Befristungugsdatum ersichtlich ist. Abbruch erfoderlich`;
        br119_Titel = `[FR] Befristungsdatum`;
        br123_Category = `eVn`;
        br123_Description = `Ce changement de véhicule n'est pas possible en ligne (nombre de places >9).
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        br123_Titel = `[FR] Platzzahl`;
        br124_Category = `eCode178`;
        br124_Description = `Le changement de véhicule est bloqué lorsqu\'il y a un eCode 178 avec un statut A
        sur le véhicule à mettre en circulation.`;
        br124_Titel = `eCode 178 inscrit avec statut A`;
        br126_Category = `eVn`;
        br126_Description = `Le changement de véhicule n'est pas possible en ligne (mention d'un lieu de stationnement/de conducteur)`;
        br126_Titel = `Mention d'un lieu de stationnement/de conducteur`;
        br13_Category = `Détenteur`;
        br13_Description = `Le changement de véhicule est bloqué si le détenteur est mineur.`;
        br13_Titel = `Détenteur mineur`;
        br131_Category = `Véhicule`;
        br131_Description = `[FR] Wenn ein besonderer Verwendungszweck ersichlich ist, darf der Wechsel nicht durchgeführt werden.`;
        br131_Titel = `[FR] Besonderer Verwendungszweck`;
        br140_Category = `Véhicule`;
        br140_Description = `[FR] Fahrzeuge mit kantonalen Stammumern dürfen nicht umgeschrieben werden. (900,
            901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919,
            920, 921, 922, 923, 924, 925, 926, 930, 931, 932, 933)`;
        br140_Titel = `[FR] Kantonale Stammnummern (9xx.xxx.xxx)`;
        br142_Category = `Vehicule`;
        br142_Description = `[FR] Hat das Fahrzeug eine der nachfolgenden Verfügungen, darf der Wechsel nicht
        durchgeführt werden. 117Überfallwarnung bewilligt / 153 = Halterwechsel ohne vorgängige Zollveranllagung
        verboten / 154 = Halterwechsel bis zum… ohne vorgängige Zollveranllagung verboten / 172 = Halterwechsel
        und/oder ordentliche Zulassung…. / 173 = Halterwechsel nur wenn Vorschriften über Geräusche.... / 178 =
            Halterwechsel verboten / 179 = Halterwechsel innerhalb 12 Monaten sei.... / 186 = Für den Export bestimmt
            / 351 = Fahrzeug für Bedienung ohne Einsatz des linken Arms / 352 = Fahrzeug für Bedienung ohne Einsatz
            des rechten Arms / 353 = Fahrzeug für Bedienung ohne Einsatz des linken Beins / 354 = Fahrzeug für
            Bedienung ohne Einsatz des rechten Beins / 355 = Fahrzeug für Bedienung ohne Beineinsatz / 400 =
                offener Text / 500 = offener Text`;
        br142_Titel = `[FR] Fahrzeug hat eine der in dieser Regel definierten Verfügungen`;
        br143_Category = `Plaques`;
        br143_Description = `[FR] Für Kontrollschilder 1N dürfen nur nachfolgende Fahrzeugarten verwendet werden:
        CA,GM,KB,KL,KM,LW,MK,ML,MW,PS,PW,SM,SS,TR`;
        br143_Titel = `[FR] Fahrzeugarten für Kontrollschild 1N`;
        br144_Category = `Plaques`;
        br144_Description = `[FR] Für Kontrollschilder 7N dürfen nur nachfolgende Fahrzeugarten verwendet werden: DF,KF,RD,RM,RO`;
        br144_Titel = `[FR] Fahrzeugarten für Kontrollschild 7N`;
        br145_Category = `Plaques`;
        br145_Description = `[FR] Für Kontrollschilder 8N dürfen nur nachfolgende Fahrzeugarten verwendet werden: FL,RK,RL`;
        br145_Titel = `[FR] Fahrzeugarten für Kontrollschild 8N`;
        br19_Category = `Véhicule`;
        br19_Description = `Le changement de véhicule est bloqué si le véhicule n\'est pas trouvé dans Viacar et Mofis.`;
        br19_Titel = `Véhicule introuvable`;
        br20_Category = `Détenteur`;
        br20_Description = `Le changement de véhicule est bloqué si le détenteur a des remarques spéciales dans
        Viacar (Statut X dans info PE).`;
        br20_Titel = `Détenteur avec remarques spéciales`;
        br21_Category = `Plaques`;
        br21_Description = `Le changement de véhicule est autorisé avec une plaque interchangeable uniquement
        si le véhicule ne change pas d\'assurance.`;
        br21_Titel = `Assurance identique pour plaques interchangeables`;
        br23_Category = `Véhicule`;
        br23_Description = `[FR] Le changement de véhicule est bloqué si les véhicules ont un barrage cantonal,
        ripol ou assurance.-> DE Text angepasst`;
        br23_Titel = `Véhicule bloqué`;
        br24_Category = `Détenteur`;
        br24_Description = `Le changement de véhicule est bloqué si le détenteur est introuvable.`;
        br24_Titel = `Détenteur introuvable`;
        br25_Category = `Plaques`;
        br25_Description = `Le changement de véhicule est bloqué si le numéro de plaques est introuvable.`;
        br25_Titel = `Plaques introuvables`;
        br42_Category = `eVn`;
        br42_Description = `Le changement de véhicule est bloqué si le code EC est le 51. `;
        br42_Titel = `eVn - Motif EC code 51`;
        br43_Category = `Plaques`;
        br43_Description = `Le changement de véhicule est autorisé avec des plaques interchangeables uniquement
        si la compagnie d\'assurance mentionnée dans l\'attestation eVn est identique.`;
        br43_Titel = `Identification de la compagnie d\'assurance en cas de plaques interchangeables`;
        br44_Category = `eVn`;
        br44_Description = `Le genre de véhicule mentionné dans l\'attestation eVn doit correspondre au genre
        de véhicule qui sera mis en circulation.`;
        br44_Titel = `Comparaison des genres de véhicule`;
        br45_Category = `Véhicule`;
        br45_Description = `Le changement de véhicule est bloqué pour les remorques (AA,AG,AL,AM,AN,AP,AR,AS,AT,AU,AV,AW,AX).`;
        br45_Titel = `Genre de véhicules - remorques`;
        br47_Category = `Véhicule`;
        br47_Description = `Le changement de véhicule est bloqué pour les poids lourds (CA,GM,LW,MW,PS,SM,SS)`;
        br47_Titel = `Genre de véhicules - poids lourds`;
        br48_Category = `Véhicule`;
        br48_Description = `Le changement de véhicule est bloqué pour les motocycles et les tricycles à moteur.
        (DF,FL,KF,RD,RF,RK,RL,RM,RO,RS)`;
        br48_Titel = `Genre de véhicules - motocycles et tricycles à moteur`;
        br50_Category = `Véhicule`;
        br50_Description = `Le changement de véhicule est bloqué pour les véhicules agricoles et les véhicules de travail.`;
        br50_Titel = `Genre de véhicules - véhicules agricoles et de travail`;
        br51_Category = `Véhicule`;
        br51_Description = `Le changement de véhicule est bloqué pour les voitures automobiles légères (ML, PW, KL)`;
        br51_Titel = `Genre de véhicules - voitures automobiles légers`;
        br52_Category = `Plaques`;
        br52_Description = `Le changement de véhicule est bloqué pour le genre de plaques 1`;
        br52_Titel = `Genre de plaques 1 non autorisé.`;
        br53_Category = `Plaques`;
        br53_Description = `Le changement de véhicule est bloqué pour le genre de plaques 2`;
        br53_Titel = `Genre de plaques 2 non autorisé`;
        br54_Category = `Plaques`;
        br54_Description = `Le changement de véhicule est bloqué pour le genre de plaques 3`;
        br54_Titel = `Genre de plaques 3 non autorisé`;
        br55_Category = `Plaques`;
        br55_Description = `Le changement de véhicule est bloqué pour le genre de plaques 4`;
        br55_Titel = `Genre de plaques 4 non autorisé`;
        br56_Category = `Plaques`;
        br56_Description = `Le changement de véhicule est bloqué pour le genre de plaques 5`;
        br56_Titel = `Genre de plaques 5 non autorisé`;
        br57_Category = `Plaques`;
        br57_Description = `Le changement de véhicule est bloqué pour le genre de plaques 6`;
        br57_Titel = `Genre de plaques 6 non autorisé`;
        br58_Category = `Plaques`;
        br58_Description = `Le changement de véhicule est bloqué pour le genre de plaques 7`;
        br58_Titel = `Genre de plaques 7 non autorisé`;
        br59_Category = `Plaques`;
        br59_Description = `Le changement de véhicule est bloqué pour le genre de plaques 8`;
        br59_Titel = `Genre de plaques 8 non autorisé`;
        br6_Category = `Détenteur`;
        br6_Description = `Le changement de véhicule est bloqué pour un détenteur \"inactif\". Les statuts \"inactifs\"
        sont : A, B, C, E, G, K, U, Z`;
        br6_Titel = `Détenteur inactif`;
        br60_Category = `Plaques`;
        br60_Description = `Le changement de véhicule est bloqué pour le genre de plaques 9`;
        br60_Titel = `Genre de plaques 9 non autorisé`;
        br61_Category = `Plaques`;
        br61_Description = `Le changement de véhicule est bloqué pour le type de plaques (A)`;
        br61_Titel = `Type de plaques A non autorisé.`;
        br62_Category = `Plaques`;
        br62_Description = `Le changement de véhicule est bloqué pour le type de plaques (AT)`;
        br62_Titel = `Type de plaques AT non autorisé.`;
        br63_Category = `Plaques`;
        br63_Description = `Le changement de véhicule est bloqué pour le type de plaques (B)`;
        br63_Titel = `Type de plaques B non autorisé.`;
        br64_Category = `Plaques`;
        br64_Description = `Le changement de véhicule est bloqué pour le type de plaques (CC)`;
        br64_Titel = `Type de plaques CC non autorisé.`;
        br65_Category = `Plaques`;
        br65_Description = `Le changement de véhicule est bloqué pour le type de plaques (CD)`;
        br65_Titel = `Type de plaques CD non autorisé.`;
        br66_Category = `Plaques`;
        br66_Description = `Le changement de véhicule est bloqué pour le type de plaques (H)`;
        br66_Titel = `Type de plaques H non autorisé.`;
        br67_Category = `Plaques`;
        br67_Description = `Le changement de véhicule est bloqué pour le type de plaques (M)`;
        br67_Titel = `Type de plaques M non autorisé.`;
        br68_Category = `Plaques`;
        br68_Description = `Le changement de véhicule est bloqué pour le type de plaques(N)`;
        br68_Titel = `Type de plaques N non autorisé.`;
        br69_Category = `Plaques`;
        br69_Description = `Le changement de véhicule est bloqué pour le type de plaques (T)`;
        br69_Titel = `Type de plaques T non autorisé.`;
        br7_Category = `eVn`;
        br7_Description = `Les données du détenteur lors du contrôle des plaques doivent correspondre à 100% aux
        données mentionnées dans l\'attestation eVn (nom de famille, prénom, date de naissance)`;
        br7_Titel = `Données du détenteur dans eVn erronées`;
        br70_Category = `Plaques`;
        br70_Description = `Le changement de véhicule est bloqué pour le type de plaques (TA)`;
        br70_Titel = `Type de plaques TA non autorisé.`;
        br71_Category = `Plaques`;
        br71_Description = `Le changement de véhicule est bloqué pour le type de plaques (U0)`;
        br71_Titel = `Type de plaques U0 non autorisé.`;
        br72_Category = `Plaques`;
        br72_Description = `Le changement de véhicule est bloqué pour le type de plaques (UN)`;
        br72_Titel = `Type de plaques UN non autorisé.`;
        br73_Category = `Plaques`;
        br73_Description = `Le changement de véhicule est bloqué pour le type de plaques (Z)`;
        br73_Titel = `Type de plaques Z non autorisé.`;
        br74_Category = `Plaques`;
        br74_Description = `Le changement de véhicule est bloqué pour le type de plaques (LA)`;
        br74_Titel = `Type de plaques LA non autorisé.`;
        br75_Category = `Plaques`;
        br75_Description = `Le changement de véhicule est bloqué pour le type de plaques (FN)`;
        br75_Titel = `Type de plaques FN non autorisé.`;
        br76_Category = `Plaques`;
        br76_Description = `Le changement de véhicule est bloqué pour le type de plaques (MB)`;
        br76_Titel = `Type de plaques MB non autorisé.`;
        br77_Category = `Plaques`;
        br77_Description = `Le changement de véhicule est bloqué pour le type de plaques (AMN)`;
        br77_Titel = `Type de plaques MN non autorisé.`;
        br78_Category = `Plaques`;
        br78_Description = `Le changement de véhicule est bloqué pour le type de plaques (MZ)`;
        br78_Titel = `Type de plaques MZ non autorisé.`;
        br79_Category = `Plaques`;
        br79_Description = `Le changement de véhicule est bloqué pour le type de plaques (W)`;
        br79_Titel = `Type de plaques W non autorisé.`;
        br8_Category = `Détenteur`;
        br8_Description = `Le changement de véhicule est bloqué si le détenteur a une alerte \"paiement comptant\".`;
        br8_Titel = `Détenteur paiement comptant`;
        br80_Category = `Plaques`;
        br80_Description = `Le changement de véhicule est bloqué pour des plaques interchangeables (si autorisé, les
            données de l\'assurance sur l\'attestation eVn doivent correspondre - voir BR 21)`;
        br80_Titel = `Plaques interchangeables`;
        br81_Category = `eCode178`;
        br81_Description = `Le changement de véhicule est autorisé lorsqu\'il y a un eCode 178 avec un statut G sur le
        véhicule à mettre en circulation.`;
        br81_Titel = `eCode 178 inscrit avec statut G`;
        br82_Category = `eCode178`;
        br82_Description = `Le changement de véhicule est bloqué lorsqu\'il y a un eCode 178 avec un statut E sur le
        véhicule à mettre en circulation.`;
        br82_Titel = `eCode 178 inscrit avec statut E`;
        br83_Category = `eCode178`;
        br83_Description = `Le changement de véhicule est autorisé lorsqu\'il y a un eCode 178 avec un statut H sur
        le véhicule à mettre en circulation.`;
        br83_Titel = `eCode 178 inscrit avec statut H`;
        br84_Category = `eCode178`;
        br84_Description = `Le changement de véhicule est autorisé lorsqu\'il y a un eCode 178 avec un statut F sur
        le véhicule à mettre en circulation.`;
        br84_Titel = `eCode 178 inscrit avec statut F`;
        br85_Category = `eVn`;
        br85_Description = `Le changement de véhicule est bloqué si le motif de l\'EC Code est le 52 (selon le manuel
            eVn).`;
        br85_Titel = `eVn - Motif EC code 52`;
        br86_Category = `eVn`;
        br86_Description = `Le changement de véhicule est bloqué si le motif de l\'EC Code est le 53 (selon le manuel eVn).`;
        br86_Titel = `eVn - Motif EC code 53`;
        br87_Category = `eVn`;
        br87_Description = `Le changement de véhicule est bloqué si le motif de l\'EC Code est le 54 (selon le manuel eVn).`;
        br87_Titel = `eVn - Motif EC code 54`;
        br88_Category = `eVn`;
        br88_Description = `Le changement de véhicule est bloqué si le motif de l\'EC Code est le 55.`;
        br88_Titel = `eVn - Motif EC code 55 -> n\'existent pas`;
        br89_Category = `eVn`;
        br89_Description = `Le changement de véhicule est bloqué si le motif de l\'EC Code est le 56.`;
        br89_Titel = `eVn - Motif EC code 56 -> n\'existent pas`;
        br90_Category = `eVn`;
        br90_Description = `Le changement de véhicule est bloqué si le code EC est le 57. Remarque : le code EC 57
        est accepté pour le changement de véhicule. `;
        br90_Titel = `eVn - Motif EC code 57`;
        br91_Category = `eVn`;
        br91_Description = `Le changement de véhicule est bloqué si le code EC est le 58. Remarque : le code EC 58
        est accepté pour le changement de véhicule.`;
        br91_Titel = `eVn - Motif EC code 58`;
        br92_Category = `eVn`;
        br92_Description = `Le changement de véhicule est bloqué si le code EC est le 59. Remarque : le code EC 59
        est accepté pour le changement de véhicule. `;
        br92_Titel = `eVn - Motif EC code 59`;
        br93_Category = `eVn`;
        br93_Description = `Le changement de véhicule est bloqué si le code EC est le 50. Remarque : le code EC 50
        est accepté pour le changement de véhicule.`;
        br93_Titel = `eVn - Motif EC code 50`;
        br94_Category = `eVn`;
        br94_Description = `Si le numéro de matricule provenant de Viacar / MOFIS ne correspond pas à celui indiqué
        sur l\'attestation eVn, le changement de véhicule est bloqué.`;
        br94_Titel = `Le numéro de matricule sur l\'attestation d\'assurance est incorrect`;
        br95_Category = `[FR]_Sucheingabe`;
        br95_Description = `Si le numéro de châssis provenant de Viacar ne correspond pas à celui indiqué sur
        l\'attestation eVn, le changement de véhicule est bloqué.`;
        br95_Titel = `Le numéro du châssis sur l\'attestation d\'assurance est incorrect`;
        br98_Category = `eVn`;
        br98_Description = `Le changement de véhicule est bloqué si le champ \"date de naissance\" est renseigné
        pour une entreprise. `;
        br98_Titel = `Entreprises / date de naissance dans eVn`;
        br99_Category = `eCode178`;
        br99_Description = `Le changement de véhicule est bloqué lorsqu\'il y a un eCode 178 avec un statut N
        sur le véhicule à mettre en circulation.`;
        br99_Titel = `eCode 178 inscrit avec statut N`;
        BusinessRuleConfiguration_Filter_Categories = `Catégorie`;
        BusinessRuleConfiguration_Filter_Status = `Statut`;
        BusinessRuleConfiguration_OptionTitle = `Business rules `;
        BusinessRuleConfiguration_Page_First = `<<`;
        BusinessRuleConfiguration_Page_Last = `>>`;
        BusinessRuleConfiguration_Page_Next = `>`;
        BusinessRuleConfiguration_Page_Previous = `<`;
        BusinessRuleConfiguration_Search = `Rechercher`;
        BusinessRuleConfiguration_TableHeader_BusinessRuleId = `BR n° `;
        BusinessRuleConfiguration_TableHeader_Category = `Catégorie`;
        BusinessRuleConfiguration_TableHeader_Description = `Description`;
        BusinessRuleConfiguration_TableHeader_Mandatory = `Obligatoire`;
        BusinessRuleConfiguration_TableHeader_Status = `désactivé / activé`;
        BusinessRuleConfiguration_TableHeader_Title = `Titre`;
        BusinessRuleConfiguration_Title = `Configuration des business rules`;
        Button_AddNewCompany = `Nouveau garage`;
        Button_AddNewUser = `Nouveau utilisateur`;
        Button_AddUser = `Nouveau utilisateur`;
        Button_BackToOverview = `Retourner`;
        Button_Confirm = `Confirmer`;
        Button_Confirmed = `Confirmé`;
        Button_GoBack = `Retour `;
        Button_NewVehicleChange = `Effectuer un changement de véhicule`;
        Button_Print = `Imprimer`;
        Button_Save = `Enregistrer`;
        Button_SaveAsDraft = `Enregistrer brouillon`;
        Button_Search = `Rechercher`;
        Button_Submit = `Envoyer`;
        Button_Submitted = `Transmis`;
        ConfigurationSummary_Attachments = `Annexe`;
        ConfigurationSummary_Comment_field = `Commentaire`;
        ConfigurationSummary_Digital_Workflow = `Workflow numérisé`;
        ConfigurationSummary_OptionTitle = `Changement de véhicule`;
        ConfigurationSummary_Send_new_vehicle_registration_paper_to = `Envoyer le nouveau permis de circulation à`;
        ConfigurationSummary_Send_old_vehicle_registration_paper_to = `Envoyer le permis de circulation annulé à`;
        ConfigurationSummary_Title = `Configuration du changement de véhicule`;
        Data_Error = `Erreur`;
        Data_IntoCirculationPossible = `Changement de véhicule autorisé`;
        Data_OutOfCirculationPossible = `Changement de véhicule autorisé`;
        Data_Warning = `Avertissement`;
        DataTable_Label_EmptyTable = `Aucune donnée trouvée`;
        DataTable_Label_Info = `START_ à _END_ de _TOTAL_ entrées`;
        DataTable_Label_InfoEmpty = `0 à 0 sur 0 entrées`;
        DataTable_Label_InfoFiltered = `(Filtré par _MAX_ entrées)`;
        DataTable_Label_LengthMenu = `MENU_ Afficher les entrées`;
        DataTable_Label_LoadingRecords = `Sera téléchargé`;
        DataTable_Label_Processing = `Veuillez patienter...`;
        DataTable_Label_Search = `Rechercher`;
        DataTable_Label_ZeroRecords = `Aucun enregistrement ne correspond à votre recherche`;
        Error_400 = `Le changement de véhicule ne peut pas être effectué en ligne.Veuillez prendre contact avec
        le Service des Automobiles et de la Navigation.`;
        Error_401 = `[FR] Der aktuelle Benutzer hat unzureichende Berechtigungen, um diese Aktion auszuführen.`;
        Error_403 = `[FR] Der aktuelle Benutzer hat unzureichende Berechtigungen, um diese Aktion auszuführen.`;
        Error_404 = `Aucun véhicule n\'est enregistré avec ces données. Veuillez les vérifier et recommencer votre
        recherche. Merci de votre compréhension.`;
        Error_405 = `Le véhicule a déjà été utilisé dans un cas existant et ne peut plus être renvoyé.`;
        Error_409 = `[FR] Bei der Änderung der Business Regel ist ein technischer Fehler aufgetaucht. Bitte
        wiederholen Sie den Vorgang erneut.`;
        Error_500 = `Le serveur d\'application n\' a pas pu être atteint pour le moment. Veuillez réessayer plus tard.`;
        Error_502 = `Le serveur d\'application n\' a pas pu être atteint pour le moment. Veuillez réessayer plus tard.`;
        Error_503 = `Le serveur d\'application n\' a pas pu être atteint pour le moment. Veuillez réessayer plus tard.`;
        Error_Attachment_Warning = `[FR] Der Upload der Anhänge konnte nicht durchgeführt werden. Bitte versuchen
        Sie es erneut oder entfernen Sie den Anhang um den Fall zu speichern/abzuschliessen. (Wichtig: Nachdem der
            Fall übermittelt wurde können keine weiteren Anhänge hinzugefügt werden.)`;
        Error_ChangePassword_Match = `Les nouveaux mots de passe ne correspondent pas.`;
        Error_ChangePassword_MatchNewUser = `[FR] Die neuen Passwörter stimmen nicht überein.`;
        Error_Delete_404 = `Le changement de véhicule demandé est introuvable.`;
        Error_Delete_409 = `Le changement de véhicule demandé ne peut pas être effacé. (mauvais statut de changement de véhicule)`;
        Error_Delete_500 = `Erreur d\'interface interne: Le changement de véhicule n\'a pas pu être supprimé.
        Veuillez contacter l\'administrateur du système.`;
        Error_Print_404 = `Le changement de véhicule demandé est introuvable.`;
        Error_Print_409 = `[FR] Die vorläufige Inverkehrssetzungserlaubnis kann nur gedruckt werden, wenn der
        Fall erfolgreich übermittelt wurde.`;
        Error_Print_500 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Print, 500)`;
        Error_Revalidation = `Votre demande n\'a pas pu être transmise, car les données du véhicule ont changé
        entre-temps et la validation de la recherche a échoué. Veuillez les vérifier et recommencer votre recherche.
        Merci de votre compréhension.`;
        Error_Submit = `Le service demandé n\'est actuellement pas disponible. Veuillez réessayer plus tard.`;
        ErrorCode_ActiveDirectoryChangePasswordInvalidInputModel = `[FR] Beim Ändern des Passworte ist ein technischer
        Fehler aufgetreten. (PasswordInvalidInputModel)`;
        ErrorCode_ActiveDirectoryChangePasswordIsNotAcceptable = `Vous avez tenté de changer le mot de passe d\'un
        usager du SAN. Cette opération n\'est pas disponible dans eGov.`;
        ErrorCode_ActiveDirectoryCurrentAndNewPasswordsAreIdentical = `Le nouveau mot de passe ne doit pas
        correspondre à l\'ancien mot de passe.`;
        ErrorCode_ActiveDirectoryDealerAlreadyExists = `[FR] Die Garage exisitiert bereits in der Datenbank. `;
        ErrorCode_ActiveDirectoryDealerIsFromAnotherCanton = `[FR] Der angegebene Benutzer ist einem anderen
        Kanton zugeordnet und kann für diesen Kanton nicht gespeichert werden.`;
        ErrorCode_ActiveDirectoryDealerNotFound = `[FR] Der Benutzer wurde nicht gefunden.`;
        ErrorCode_ActiveDirectoryNewDealerInvalidInputModel = `[FR] Der neue Benutzer konnte nicht gespeichert
        werden. Bitte wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin
        bestehen bleibt. `;
        ErrorCode_ActiveDirectoryNewDealerWasNotCreated = `[FR] Die neue Garage konnte nicht erstellt werden.
        Bitte wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin bestehen bleibt.`;
        ErrorCode_ActiveDirectoryNewPasswordIsNotAcceptable = `Le nouveau mot de passe ne répond pas aux
        exigences de sécurité. (7 caractères majuscules et minuscules, alphanumériques)`;
        ErrorCode_ActiveDirectoryNewPasswordsNotIdentical = `Les nouveaux mots de passe ne correspondent pas.`;
        ErrorCode_ActiveDirectoryNewUserInvalidInputModel = `[FR] Beim erstellen des Benutzers ist ein technischer Fehler aufgetreten.`;
        ErrorCode_ActiveDirectoryNewUserIsNotAcceptable = `[FR] Sie verfügen nicht über die benötigte
         Berechtigung um neue Benutzer anzulegen`;
        ErrorCode_ActiveDirectoryNewUserWasNotCreated = `[FR] Der neue Benutzer konnte nicht gespeichert werden.
        Bitte wiederholen Sie den Vorgang und melden Sie sich beim StVA falls der Fehler weiterhin bestehen bleibt. `;
        ErrorCode_ActiveDirectoryPasswordWasNotChanged = `Le mot de passe n\' a pas pu être modifié. Veuillez
        vérifier les informations et réessayer.`;
        ErrorCode_ActiveDirectoryUserAlreadyExists = `[FR] Die verwendete Email-Adresse wird in der Benutzerverwaltung
        bereits verwendet und kann nicht erneut verwendet werden.`;
        ErrorCode_ActiveDirectoryUserNotFound = `[FR] Der Benutzer wurde nicht gefunden.`;
        ErrorCode_Attachment_400 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Attachment, 400)`;
        ErrorCode_Attachment_409 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (Attachment 409)`;
        ErrorCode_AttachmentCannotBeDeleted = `[FR] Der Benutzer kann nicht gelöscht werden.`;
        ErrorCode_AttachmentCannotBeDeletedWrongDealer = `[FR] Dieser Benutzer darf den Anhang nicht löschen,
        da er von einem anderen Benutzer hochgeladen wurde.`;
        ErrorCode_AttachmentNotFound = `[FR] Der Anhang wurde in der Datenbank nicht gefunden.`;
        ErrorCode_AttachmentTypeNotAllowed = `[FR] Das Dateiformat für diesen Anhang wird nicht unterstützt.`;
        ErrorCode_br1 = `L\'attestation d\'assurance électronique n\'est pas disponible. Veuillez contacter
        l\'assurance afin qu\'elle envoie l\'attestation requise pour effectuer l\'immatriculation.`;
        ErrorCode_br100 = `Le changement d\'un véhicule transportant des marchandises dangereuses ne peut pas
        être effectué en ligne. Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br101 = `L\'attestation d\'assurance doit être encore valable 7 jours après la transmission de
        votre demande. Nous vous prions de contacter l\'assurance et de demander une nouvelle attestation d\'assurance.`;
        ErrorCode_br102 = `L\'attestation d\'assurance doit être encore valable 14 jours après la transmission de
        votre demande. Nous vous prions de contacter l\'assurance et de demander une nouvelle attestation d\'assurance.`;
        ErrorCode_br103 = `L\'attestation d\'assurance doit être encore valable 21 jours après la transmission de
        votre demande. Nous vous prions de contacter l\'assurance et de demander une nouvelle attestation d\'assurance.`;
        ErrorCode_br104 = `L\'attestation d\'assurance doit être encore valable 28 jours après la transmission de
        votre demande. Nous vous prions de contacter l\'assurance et de demander une nouvelle attestation d\'assurance.`;
        ErrorCode_br105 = `La date d\'établissement de l\'attestation d\'assurance est ultérieure à votre demande.
        Nous vous prions de contacter l\'assurance et de demander une nouvelle attestation d\'assurance.`;
        ErrorCode_br106 = `Le changement de véhicule est bloqué pour les véhicules minibus.`;
        ErrorCode_br107 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br108 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br109 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br11 = `Le numéro de matricule demandé ne correspond pas à celui reçu. Veuillez répéter
        la procédure. Si le message persiste, veuillez signaler l\'erreur au SAN.`;
        ErrorCode_br110 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br116 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br117 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br119 = `[FR] Der Wechsel dieses Fahrzeuges ist nicht online möglich, da der elektronische
        Versicherungsnachweis ein Befristungsdatum enthält`;
        ErrorCode_br12 = `Le numéro de châssis demandé ne correspond pas à celui reçu. Veuillez répéter la
        procédure. Si le message persiste, veuillez signaler l\'erreur au SAN.`;
        ErrorCode_br123 = `Ce changement de véhicule n'est pas possible en ligne (nombre de places >9).
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br124 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br126 = `Le changement de véhicule n'est pas possible en ligne (mention d'un lieu de
        stationnement/de conducteur). Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br120 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br121 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br13 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br131 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br132 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br135 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br137 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br140 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br141 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br142 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation`;
        ErrorCode_br143 = `[FR] Das Kontrollschild (1N) darf für diese Fahrzeugart nicht verwendet werden.`;
        ErrorCode_br144 = `[FR] Das Kontrollschild (7N) darf für diese Fahrzeugart nicht verwendet werden.`;
        ErrorCode_br145 = `[FR] Das Kontrollschild (8N) darf für diese Fahrzeugart nicht verwendet werden. `;
        ErrorCode_br19 = `Aucun véhicule n\'est enregistré avec ces données. Veuillez les vérifier et recommencer
        la recherche. Merci de votre compréhension.`;
        ErrorCode_br20 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br21 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br23 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br24 = `Aucun détenteur de véhicule n\' a été trouvé pour le véhicule demandé. Veuillez vérifier
        vos données et recommencer la recherche. Merci de votre compréhension. `;
        ErrorCode_br25 = `Aucun numéro de plaques n\' a été trouvé pour le véhicule demandé. Veuillez le vérifier
        et recommencer la recherche. Merci de votre compréhension. `;
        ErrorCode_br42 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br43 = `Le changement d\'un véhicule immatriculé en interchangeable peut être effectué uniquement
        si l\'assurance du nouveau véhicule est identique à celle du premier véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br44 = `Le genre de véhicule ne correspond pas aux données mentionnées sur l\'attestation
        d\'assurance. Veuillez contacter l\'assurance.`;
        ErrorCode_br45 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br46 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br47 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br48 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br50 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br51 = `Le changement de véhicule ne peut pas être effectué pour ce genre de véhicule.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br52 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br53 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br54 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br55 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br56 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br57 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br58 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br59 = `Le changement de véhicule ne peut pas être effectué pour ce genre de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br6 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br60 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce genre de
        plaques. Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br61 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de
        plaques. Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br62 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br63 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br64 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br65 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br66 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br67 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br68 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br69 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br7 = `Les données du détenteur ne correspondent pas aux données mentionnées sur
        l\'attestation d\'assurance. Veuillez contacter l\'assurance.`;
        ErrorCode_br70 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br71 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br72 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br73 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br74 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br75 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br76 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br77 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br78 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br79 = `Le changement de véhicule ne peut pas être effectué en ligne pour ce type de plaques.
        Veuillez prendre contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br8 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br80 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br81 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br82 = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre contact
        avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_br83 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br84 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br85 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br86 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br87 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br88 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br89 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br90 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br91 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez contacter l\'assurance.`;
        ErrorCode_br92 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez demander à votre client de contacter sa compagnie d\'assurance pour vérification et modification.`;
        ErrorCode_br93 = `Le motif d\'immatriculation inscrit dans l\'attestation d\'assurance ne permet pas un
        changement de véhicule. Veuillez demander à votre client de contacter sa compagnie d\'assurance pour vérification et modification.`;
        ErrorCode_br94 = `Le numéro de matricule demandé ne correspond pas à celui mentionné dans
        l\'attestation d\'assurance. Veuillez répéter la procédure. Si le message persiste, signalez l\'erreur au SAN.`;
        ErrorCode_br95 = `Le numéro de matricule demandé ne correspond pas à celui mentionné dans
        l\'attestation d\'assurance. Veuillez répéter la procédure. Si le message persiste, signalez l\'erreur au SAN.`;
        ErrorCode_br98 = `L\'attestation d\'assurance mentionne une date de naissance, alors que votre
        client est une entreprise. Veuillez contacter l\'assurance.`;
        ErrorCode_br99 = `Le changement de véhicule ne peut pas être effectué en ligne.  Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_BusinessRule_400 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich
         an das StVA. (BusinessRule, 400)`;
        ErrorCode_BusinessRule_404 = `[FR] Die gesuchte Business Regel wurde nicht gefunden.`;
        ErrorCode_BusinessRule_409 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich
         an das StVA. (Business Rule, 409)`;
        ErrorCode_BusinessRule_500 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich
         an das StVA. (BusinessRule, 500)`;
        ErrorCode_BusinessRuleError = `[FR] Bei der Suche der Business Regel ist ein technischer Fehler
        aufgetaucht. Bitte wiederholen Sie den Vorgang erneut.`;
        ErrorCode_BusinessRuleSettingsNotFound = `[FR] Die Business Regel Einstellung konnte nicht gefunden werden.`;
        ErrorCode_BusinessRuleSettingsWrongCanton = `[FR] Die Business Regeln können nicht geändert werden,
        da sie zu einem anderen Kanton gehören.`;
        ErrorCode_ChangePassword_500 = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie
        sich an das StVA. (Change Password, 500)`;
        ErrorCode_EmptyField = `[FR] Es ist ein technischer Fehler aufgetreten, bitte wenden Sie sich an das StVA. (EmptyField)`;
        ErrorCode_FileTooBig = `[FR] Die angehängte Datei hat die maximale Grösse überschritten (5MB)`;
        ErrorCode_Generic = `Le changement de véhicule ne peut pas être effectué en ligne. Veuillez prendre
        contact avec le Service des Automobiles et de la Navigation.`;
        ErrorCode_RegistrationCertificateCannotBeShown = `[FR] Das PDF für diesen Fall kann nicht angezeigt werden (technischer Error)`;
        ErrorCode_SecurityRequirementsNotFulfilled = `Le nouveau mot de passe ne répond pas aux exigences
        de sécurité. (7 caractères majuscules et minuscules, alphanumériques)`;
        ErrorCode_SecurityRequirementsNotFulfilledNewUser = `Le nouveau mot de passe ne répond pas aux
        exigences de sécurité. (7 caractères majuscules et minuscules, alphanumériques)`;
        ErrorCode_TextTooLong = `[FR] Der eingetragene Kommentar ist zu lang. Bitte kürzen Sie den Text und versuchen Sie es erneut`;
        ErrorCode_TooManyAttachments = `[FR] Die maximale Anzahl der Anhänge (5) wurde überschritten.`;
        ErrorCode_Unauthorized = `[FR] Der Zugriff auf das Viacar System wurde nicht authorisiert.`;
        ErrorCode_V09ResponseDataError = `La demande auprès de l\'application Viacar a remonté des données erronées. (V09-Error)`;
        ErrorCode_V09ResponseDataValidationError = `Les données du véhicule remontées de l\'application V09 sont incorrectes.`;
        ErrorCode_V09ServiceError = `Le système demandé a renvoyé une erreur (V09 - 500 Internal Server Error - Erreur de serveur intern)`;
        ErrorCode_V09ServiceNotAvailable = `L\'interface avec l\'application V09 est momentanément indisponible.`;
        ErrorCode_VehicleChangeCaseCannotBeDeleted = `[FR] Der Fahrzeugwechsel kann nicht gelöscht werden.`;
        ErrorCode_VehicleChangeCaseCannotBeDeletedWrongDealer = `[FR] Der Anhang eines anderen Benutzers darf nicht gelöscht werden.`;
        ErrorCode_VehicleChangeCaseCannotBeEditedWrongDealer = `[FR] Der Fahrzeugwechsel darf aufgrund
        fehlender Berechtigung nicht editiert werden.`;
        ErrorCode_VehicleChangeCaseConfiguration_400 = `[FR] Bei der Konfiguration der Fahrzeugwechsel ist
        ein technischer Fehler aufgetreten (CaseConfigurationInvalidInputModel)`;
        ErrorCode_VehicleChangeCaseConfiguration_404 = `[FR] Die Konfigurationeinstellungen konnten nicht gefunden werden.`;
        ErrorCode_VehicleChangeCaseConfiguration_409 = `[FR] Diese Einstellungen können mit diesem Benutzer
        nicht geändert werden (falscher Kanton)`;
        ErrorCode_VehicleChangeCaseConfiguration_500 = `[FR] Es ist ein technischer Fehler aufgetreten,
        bitte wenden Sie sich an das StVA. (CaseConfiguration, 500)`;
        ErrorCode_VehicleChangeCaseConfigurationInvalidInputModel = `[FR] Bei der Konfiguration der
        Fahrzeugwechsel-Einstellungen ist ein technischer Fehler aufgetreten. (CaseConfigurationInvalidInputModel)`;
        ErrorCode_VehicleChangeCaseConfigurationNotFound = `[FR] Die Konfigurationeinstellungen konnten nicht gefunden werden.`;
        ErrorCode_VehicleChangeCaseConfigurationWrongCanton = `[FR] Diese Einstellungen können mit
        diesem Benutzer nicht geändert werden (falscher Kanton)`;
        ErrorCode_VehicleChangeCaseHasWrongStatus = `[FR] Der Fahrzeugwechselfall hat einen falschen
        Status. Die Aktion kann nicht ausgeführt werden.`;
        ErrorCode_VehicleChangeCaseNotFound = `[FR] Der Fahrzeugwechselfall konnte nicht gefunden werden.`;
        ErrorCode_VehicleIntoCirculationAlreadyInAnotherSubmittedCase = `[FR] Das ausser zu Verkehr
        setzende Fahrzeug wurde bereits in einem anderen Fall verwendet.`;
        ErrorCode_VehicleOutOfCirculationAlreadyInAnotherSubmittedCase = `[FR] Das ausser zu Verkehr
        setzende Fahrzeug wurde bereits in einem anderen Fall verwendet.`;
        Info_InputChanged = `Le numéro de matricule ou de châssis du véhicule à mettre en circulation
        a été modifié. Veuillez cliquer sur \"rechercher\" afin de réactualiser les données du véhicule.
        Sinon ce sont les données recherchées initialement qui seront utilisées.`;
        Info_InputChanged_Vehicle1 = `Le numéro de matricule ou de châssis du véhicule à mettre en
        circulation a été modifié. Veuillez cliquer sur \"rechercher\" afin de réactualiser les
        données du véhicule. Sinon ce sont les données recherchées initialement qui seront utilisées.`;
        Info_InputChanged_Vehicle2 = `Le numéro de matricule ou de châssis du véhicule à mettre en
        circulation a été modifié. Veuillez cliquer sur \"rechercher\" afin de réactualiser les
        données du véhicule. Sinon ce sont les données recherchées initialement qui seront utilisées.`;
        Label_Activated = `activé`;
        Label_Attachment = `Annexe`;
        Label_BusinessServices = `Services`;
        Label_CancelRegistrationPaperTo = `Envoyer le permis de circulation annulé à`;
        Label_CaseSummary = `Résumé`;
        Label_ChangePassword = `Changer le mot de passe`;
        Label_ChassisNumber = `Numéro de châssis`;
        Label_City = `Cité`;
        Label_Comment = `Commentaire`;
        Label_Company = `Garage`;
        Label_CompanyName = `Nombre Garage`;
        Label_Completion = `Réalisation`;
        Label_ConfigurationSummary = `Configuration du changement de véhicule`;
        Label_ConfirmNewPassword = `Confirmer le nouveau mot de passe`;
        Label_ConfirmPassword = `Confirmer le mot de passe`;
        Label_Deactivated = `désactivé`;
        Label_ElectInsuranceValidTo = `eVn valable jusqu\'à / au`;
        Label_Email = `Email (Utilisateur)`;
        Label_English = `Anglais`;
        Label_ExistingPassword = `Mot de passe existant`;
        Label_FirstName = `Prénom`;
        Label_French = `Français`;
        Label_German = `Allemand`;
        Label_LastName = `Nom de famille`;
        Label_Logout = `Déconnexion`;
        Label_ManageCompanies = `Gérer les garages`;
        Label_ManageUser = `Gérer les utilisateurs`;
        Label_MatriculationNumber = `Numéro de matricule`;
        Label_Menu = `Menu`;
        Label_NewPassword = `Nouveau mot de passe`;
        Label_NewRegistrationPaperTo = `Envoyer le nouveau permis de circulation chez`;
        Label_NewVehicleChange = `Changement de véhicule`;
        Label_NumberPlate = `Plaques`;
        Label_OverviewVehicleChangeCases = `List de changement de véhicule`;
        Label_Owner = `Détenteur du véhicule`;
        Label_Password = `Mot de passe`;
        Label_Phone = `Téléphone`;
        Label_PutIntoCirculation = `Véhicule à mettre en circulation (EC)`;
        Label_PutOutOfCirculation = `Véhicule à mettre hors circulation (HC)`;
        Label_ResetPassword = `[FR] Passwort zurücksetzen`;
        Label_RtdLocation = `Lieu du SAN`;
        Label_Status = `Statut`;
        Label_Street = `Rue`;
        Label_TypeHere = `Ecrire ici`;
        Label_Upload = `Télécharger`;
        Label_User = `Utilisateur`;
        Label_UserManagement_Company = `Gestion des utilisateurs - Société`;
        Label_UserManagement_NewCompany = `Gestion des utilisateurs - Nouvelle société`;
        Label_UserManagement_NewUser = `Gestion des utilisateurs - Nouvel utilisateur`;
        Label_UserManagement_ChangeUser = `[FR] User Management – Benutzer ändern`;
        Label_UserManagement_Users = `Gestion des utilisateurs`;
        Label_Username = `Utilisateur`;
        Label_Vehicle = `Véhicule`;
        Label_ZipCode = `Code postal`;
        Message_ChangePassword_Successful = `Votre mot de passe a été modifié avec succès.`;
        Message_Confirm_Cancel = `Interrompre`;
        Message_Confirm_Ok = `Ok`;
        Message_DeleteCase = `Êtes-vous sûr de vouloir supprimer le cas sélectionné?`;
        Message_DeleteUser = `[FR] Sind Sie sicher, dass Sie den aktuellen Benutzer löschen möchten?`;
        Message_Logout = `Etes-vous sûr de vouloir vous déconnecter ?`;
        Message_NavigateAway = `Vous avez des données non sauvegardées. Êtes-vous sûr de vouloir quitter la page en cours?`;
        Message_ReloadPage = `Etes-vous sûr de vouloir recharger la page? Les modifications effectuées ne seront pas sauvegardées.`;
        Message_Saved = `Les changements ont été sauvegardés avec succès.`;
        Object_Eic_DateOfBirth = `eVn - Date de naissance`;
        Object_Eic_InsuranceId = `eVn - Assurance ?`;
        Object_Eic_OwnerFirstname = `eVn - Prénom`;
        Object_Eic_OwnerName = `eVn - Non`;
        Object_Eic_VehicleType = `eVn - Genre de véhicule`;
        Object_NumberPlate_InsuranceId = `Plaques - Assurance`;
        Object_Owner_DateOfBirth = `Détenteur du véhicule - Date de naissance`;
        Object_Owner_Firstname = `Détenteur du véhicule - Prénom`;
        Object_Owner_Name = `Détenteur - Nom`;
        Object_Vehicle_VehicleType = `Véhicule - Genre de véhicule`;
        Option_Customer = `Client`;
        Option_Garage = `Garage`;
        Page_First = `<<`;
        Page_Last = `>>`;
        Page_Next = `>`;
        Page_Previous = `<`;
        Placeholder_LastFourCharacters = `dernier 4 chiffres`;
        Placeholder_ListOfCompanies = `Liste des entreprises`;
        Placeholder_ListOfServices = `Liste des services`;
        Status_Cancelled = `Rejeté`;
        Status_Completed = `Terminé`;
        Status_InProgress = `en traitement`;
        Status_New = `Nouveau `;
        Status_Rejected = `Rejeté`;
        Status_RTD_Completed = `Terminé`;
        Status_RTD_InProgress = `en traitement`;
        Status_RTD_Open = `Nouveau`;
        Status_RTD_Rejected = `Rejeté`;
        Status_Submitted = `envoyé`;
        Text_ConfirmedMessage = `Données confirmées`;
        Text_ConfirmMessage = `Je confirme que toutes les données sont correctes.`;
        Text_SubmitMessage = `Transmettez la prestation au SAN.`;
        Text_SuccessfullySubmitted = `Données soumises avec succès.`;
        Text_UserCanAdd = `Cet utilisateur peut ajouter de nouveaux utilisateurs à la entreprise`;
        Title_Action = `Cacher / Montrer`;
        Title_Attachments = `Annexe`;
        Title_DefaultValue = `Valeur par défaut`;
        Title_InternalStatus = `Statut interne`;
        Title_MatriculationNumber1 = `N° de matricule HC`;
        Title_MatriculationNumber2 = `N° de matricule EC`;
        Title_NumberPlate = `N° de Plaque`;
        Title_Owner = `Détenteur du véhicule`;
        Title_Setting = `Champ de saisie`;
        Title_StatusRTD = `Statut SAN`;
        Warning_SameMatriculation = `Le véhicule qui a été mis hors circulation ne peut pas être mis en circulation simultanément.`;
        languageCode = `fr`;
        languageName = this.Label_French;
    }
}
