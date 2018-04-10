export class UserOverviewDto {
    public id: string;
    public garageName: string;
    public firstName: string;
    public lastName: string;
    public phone: string;
    public userName: string;
    public garage = {
        name: '',
        street: '',
        city: ''
    };
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.garageName = data['garageName'];
        this.firstName = data['firstName'];
        this.lastName = data['lastName'];
        this.phone = data['phone'];
        this.userName = data['userName'];
    }
}
