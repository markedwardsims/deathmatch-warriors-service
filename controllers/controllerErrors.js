import restify from 'restify';

// class ValidationError extends restify.BadRequestError{
//     constructor(serviceValidationError){
//         super({message: serviceValidationError.message});
//
//         this.body.code = 'InvalidInput';
//         this.body.details = serviceValidationError.details;
//
//         Error.captureStackTrace(this, ValidationError);
//     }
// }

export class BadRequestError extends restify.BadRequestError{
    constructor(message){
        super({message: message});

        this.body.code = 'InvalidInput';

        Error.captureStackTrace(this, BadRequestError);
    }
}

// class ResourceNotFoundError extends restify.ResourceNotFoundError{
//     constructor(){
//         super({message: 'Resource not found'});
//
//         this.body.code = 'ResourceNotFound';
//
//         Error.captureStackTrace(this, ResourceNotFoundError);
//     }
// }

// class UnauthorizedError extends restify.UnauthorizedError {
//     constructor() {
//         super({message: 'You are not authorized to perform this function'});
//
//         this.body.code = 'UnauthorizedError';
//
//         Error.captureStackTrace(this, UnauthorizedError);
//     }
// }
