export class ChangePasswordResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.code = data['code'];
        this.text = data['text'];
        this.parameters = data['parameters'];
    }

    public code: string;
    public text: string;
    public parameters: Array<string>;
}
