export class AttachmentDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.vehicleChangeCaseId = data['vehicleChangeCaseId'];
        this.name = data['name'];
        this.data = data['data'];
    }

    public vehicleChangeCaseId: number;
    public name: string;
    public data: string;
}
