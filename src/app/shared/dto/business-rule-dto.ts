export class BusinessRuleDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.id = data['id'];
        this.key = data['key'];
        this.isActivated = data['isActivated'];
        this.isMandatory = data['isMandatory'];
        this.mandatoryDisplay = data['mandatoryDisplay'];
        this.category = data['category'];
        this.categoryDisplay = data['categoryDisplay'];
        this.descriptionDisplay = data['descriptionDisplay'];
        this.titleDisplay = data['titleDisplay'];
    }

    public id: number;
    public key: number;
    public isActivated: boolean;
    public isMandatory: boolean;
    public mandatoryDisplay: string;
    public category: number;
    public categoryDisplay: string;
    public descriptionDisplay: string;
    public titleDisplay: string;
}
