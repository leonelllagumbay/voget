export class NewVehicleDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.Matriculation1 = data['Matriculation1'];
        this.Matriculation2 = data['Matriculation2'];
        this.Matriculation3 = data['Matriculation3'];
        this.Chassis = data['Chassis'];
    }

    public Matriculation1: string;
    public Matriculation2: string;
    public Matriculation3: string;
    public Chassis: string;
}
