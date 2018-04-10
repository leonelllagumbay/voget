import { NewVehicleSearchResultDto } from './new-vehicle-search-result-dto';
import { OldVehicleSearchResultDto } from './old-vehicle-search-result-dto';
import { VehicleChangeCaseDto } from './vehicle-change-case-dto';
export class VehicleChangeCaseSubmitResultDto {
    constructor(data ?: any) {
        if (data === undefined) {
            data = {};
        }
        this.vehicleChangeCase = new VehicleChangeCaseDto();
        this.vehicleChangeCase = data['vehicleChangeCase'];
        this.vehicleOutOfCirculation = new OldVehicleSearchResultDto();
        this.vehicleOutOfCirculation = data['vehicleOutOfCirculation'];
        this.vehicleInToCirculation = new NewVehicleSearchResultDto();
        this.vehicleInToCirculation = data['vehicleInToCirculation'];
    }

    public vehicleChangeCase: VehicleChangeCaseDto;
    public vehicleOutOfCirculation: OldVehicleSearchResultDto;
    public vehicleInToCirculation: NewVehicleSearchResultDto;
}
