class ApiError extends Error{
    constructor(status,
        message="Something Went Wrong",
        errors=[],
        stack="",

    ){
        super();
        this.statusCode = status;
        this.message = message;
        this.errors = errors;
        this.success = false;
        this.data=null;
        if(stack){
            this.stack = stack;}
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;