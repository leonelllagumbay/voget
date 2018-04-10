export class BusinessServicesDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.name = data['name'];
    }

    public id: number;
    public name: string;
}
