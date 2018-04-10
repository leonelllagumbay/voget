export class RtdLocationDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.code = data['code'];
        this.name = data['name'];
    }

    public id: number;
    public code: string;
    public name: string;
}
