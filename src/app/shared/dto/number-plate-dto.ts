export class NumberPlateDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.canton = data['canton'];
        this.number = data['number'];
    }

    public canton: string;
    public number: number;
}
