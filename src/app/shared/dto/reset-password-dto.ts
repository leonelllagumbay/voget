export class ResetPasswordDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.newPassword = data['newPassword'];
        this.newPasswordConfirm = data['newPasswordConfirm'];
    }

    public id: string;
    public newPassword: string;
    public newPasswordConfirm: string;
}
