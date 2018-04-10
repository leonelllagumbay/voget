import { ParameterDto } from './parameter-dto';

export class ValidationResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.type = data['type'];
        this.errorCode = data['errorCode'];
        this.code = data['code'];
        this.message = data['message'];
        this.parameters = data['parameters'];
    }

    public type: string;
    public errorCode: string;
    public code: string;
    public message: string;
    public parameters: Array<ParameterDto>;
}
