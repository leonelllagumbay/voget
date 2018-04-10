export class CompanyDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.name = data['name'];
        this.street = data['street'];
        this.zip = data['zip'];
        this.city = data['city'];
    }

    public id: string;
    public name: string;
    public street: string;
    public zip: string;
    public city: string;
}
