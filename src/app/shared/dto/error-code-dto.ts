export class ErrorCodeDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.fe_code = data['fe_code'];
        this.fe_message = data['fe_message'];
        this.fe_params = data['fe_params'];
    }

    public fe_code: string;
    public fe_message: string;
    public fe_params?: string;
}
