class ApiResponse{
    constructor(status,message="Success",data,success){
        this.statusCode = status;
        this.message = message;
        this.data = data;
        this.success = success<400;

    }
}

export default ApiResponse;