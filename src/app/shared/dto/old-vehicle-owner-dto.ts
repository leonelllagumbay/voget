export class OldVehicleOwnerDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.name = data['name'];
        this.firstName = data['firstName'];
        this.address = data['address'];
        this.zip = data['zip'];
        this.place = data['place'];
    }

    public name: string;
    public firstName: string;
    public address: string;
    public zip: string;
    public place: string;
}
