export class ParameterDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }
        this.name = data['name'];
        this.value = data['value'];
    }

    public name: string;
    public value: string;
}
