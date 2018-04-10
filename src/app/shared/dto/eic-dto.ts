export class EicDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.validTo = data['validTo'];
        this.insuranceName = data['insuranceName'];
    }

    public validTo: string;
    public insuranceName: string;
}
