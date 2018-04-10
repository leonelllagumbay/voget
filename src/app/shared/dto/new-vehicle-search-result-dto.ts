import { VehicleDto } from './vehicle-dto';
import { ValidationResultDto } from './validation-result-dto';
import { EicDto } from './eic-dto';

export class NewVehicleSearchResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.validationResult = data['validationResult'];
        this.vehicle = data['vehicle'];
        this.eic = data['eic'];
    }

    public validationResult: ValidationResultDto;
    public vehicle: VehicleDto;
    public eic: EicDto;
}
