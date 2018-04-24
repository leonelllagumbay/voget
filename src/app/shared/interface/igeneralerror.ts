export interface IGeneralError {
    errorMessage: string;
    errorCode: string;
    parameters: Array<{label: string, value: string}>;
}
