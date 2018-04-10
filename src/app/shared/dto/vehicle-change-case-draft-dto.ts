export class VehicleChangeCaseDraftDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.statusRtd = data['statusRtd'];
        this.status = data['status'];
        this.ownerFirstName = data['ownerFirstName'];
        this.ownerLastName = data['ownerLastName'];
        this.plateCanton = data['plateCanton'];
        this.plateNumber = data['plateNumber'];
        this.matriculationNr1 = data['matriculationNr1'];
        this.matriculationNr2 = data['matriculationNr2'];
        this.chassisNr1 = data['chassisNr1'];
        this.chassisNr2 = data['chassisNr2'];
        this.rtdLocationId = data['rtdLocationId'];
        this.comment = data['comment'];
        this.oldPaperValueId = data['oldPaperValueId'];
        this.newPaperValueId = data['newPaperValueId'];
        this.oldPaper = data['oldPaper'];
        this.newPaper = data['newPaper'];
    }

    public id: number;
    public statusRtd: number;
    public status: number;
    public ownerFirstName: string;
    public ownerLastName: string;
    public plateCanton: string;
    public plateNumber: number;
    public matriculationNr1: number;
    public matriculationNr2: number;
    public chassisNr1: string;
    public chassisNr2: string;
    public rtdLocationId: number;
    public comment: string;
    public oldPaperValueId: number;
    public newPaperValueId: number;
    public oldPaper: string;
    public newPaper: string;
}
