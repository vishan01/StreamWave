
const AsyncHandler=(RequestHandler)=>{
    return async (req,res,next)=>{
        try{
            await RequestHandler(req,res,next);
        }catch(err){
            next(err);
        }
    }
}

export default AsyncHandler;