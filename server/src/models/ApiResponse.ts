export class ApiResponse<T>{
    public data:T;
    public success:boolean;
    public error:string;


    constructor(data: T, success: boolean, error:string = null) {
        this.data = data;
        this.success = success;
        this.error = error;
    }
}
