export class UserDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.name = data['name'];
        this.canton = data['canton'];
        this.source = data['source'];
        this.roles = data['roles'];
    }

    public name: string;
    public canton: string;
    public source: string;
    public roles: Array<string>;
}
