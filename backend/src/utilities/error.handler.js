export const catchError= (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((error)=>next(error))
    }
}

export class AppError extends Error{
    constructor(message ,statusCode,status){
        super(message)
        this.statusCode = statusCode
        this.status = status
    }
}
