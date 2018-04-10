export class BusinessRuleLightDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.isActivated = data['isActivated'];
    }

    public id: number;
    public isActivated: boolean;
}
