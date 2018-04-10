export class ChangePasswordDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.currentPassword = data['currentPassword'];
        this.newPassword = data['newPassword'];
        this.newPasswordConfirm = data['newPasswordConfirm'];
    }

    public currentPassword: string;
    public newPassword: string;
    public newPasswordConfirm: string;
}
