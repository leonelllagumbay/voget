export class AttachmentResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.name = data['name'];
        this.vehicleChangeCaseId = data['vehicleChangeCaseId'];
    }

    public id: number;
    public name: string;
    public vehicleChangeCaseId: number;
}
