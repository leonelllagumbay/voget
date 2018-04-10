import { RtdLocationDto } from './rtd-location-dto';

export class VehicleChangeCaseDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.statusRtd = data['statusRtd'];
        this.status = data['status'];
        this.createDate = data['createDate'];
        this.userFirstName = data['userFirstName'];
        this.userLastName = data['userLastName'];
        this.userEmail = data['userEmail'];
        this.userPhone = data['userPhone'];
        this.ownerFirstName = data['ownerFirstName'];
        this.ownerLastName = data['ownerLastName'];
        this.plateCanton = data['plateCanton'];
        this.plateNumber = data['plateNumber'];
        this.matriculationNr1 = data['matriculationNr1'];
        this.matriculationNr2 = data['matriculationNr2'];
        this.chassisNr1 = data['chassisNr1'];
        this.chassisNr2 = data['chassisNr2'];
        this.comment = data['comment'];
        this.rtdLocation = new RtdLocationDto();
        this.rtdLocation = data['rtdLocation'];
        this.oldPaperValueId = data['oldPaperValueId'];
        this.newPaperValueId = data['newPaperValueId'];
        this.attachmentsCount = data['attachmentsCount'];
    }

    public id: string;
    public statusRtd: number;
    public status: number;
    public createDate: Date;
    public userFirstName: string;
    public userLastName: string;
    public userEmail: string;
    public userPhone: string;
    public ownerFirstName: string;
    public ownerLastName: string;
    public plateCanton: string;
    public plateNumber: number;
    public matriculationNr1: number;
    public matriculationNr2: number;
    public chassisNr1: string;
    public chassisNr2: string;
    public comment: string;
    public rtdLocation: RtdLocationDto;
    public oldPaperValueId: number;
    public newPaperValueId: number;
    public attachmentsCount: number;
}
