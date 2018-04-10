import { ValidationResultDto } from './validation-result-dto';
import { VehicleDto } from './vehicle-dto';
import { OldVehicleOwnerDto } from './old-vehicle-owner-dto';
import { NumberPlateDto } from './number-plate-dto';
export class OldVehicleSearchResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }

        this.validationResult = data['validationResult'];
        this.vehicle = data['vehicle'];
        this.vehicleOwner = data['vehicleOwner'];
        this.numberPlate = data['numberPlate'];
    }

    public validationResult: ValidationResultDto;
    public vehicle: VehicleDto;
    public vehicleOwner: OldVehicleOwnerDto;
    public numberPlate: NumberPlateDto;
}
