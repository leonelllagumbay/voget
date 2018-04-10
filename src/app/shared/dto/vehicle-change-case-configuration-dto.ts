export class VehicleChangeCaseConfigurationDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.key = data['key'];
        this.isActivated = data['isActivated'];
        this.defaultValue = data['defaultValue'];
        this.uiFieldDisplay = data['uiFieldDisplay'];
        this.isShownDisplay = data['isShownDisplay'];
        this.defaultValueDisplay = data['defaultValueDisplay'];
    }

    public id: number;
    public key: string;
    public isActivated: boolean;
    public defaultValue: number;
    public uiFieldDisplay: string;
    public isShownDisplay: string;
    public defaultValueDisplay: string;
}
