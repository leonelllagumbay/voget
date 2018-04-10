export class VehicleDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.brand = data['brand'];
        this.type = data['type'];
        this.color1 = data['color1'];
    }

    public brand: string;
    public type: string;
    public color1: string;
}
