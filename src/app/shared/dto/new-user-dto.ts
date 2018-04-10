export class NewUserDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.email = data['email'];
        this.firstName = data['firstName'];
        this.lastName = data['lastName'];
        this.phone = data['phone'];
        this.garageId = data['garageId'];
        this.password = data['password'];
        this.isDealerAdmin = data['isDealerAdmin'];
    }

    public email: string;
    public firstName: string;
    public lastName: string;
    public phone: string;
    public garageId: string;
    public password: string;
    public isDealerAdmin: boolean;
}
