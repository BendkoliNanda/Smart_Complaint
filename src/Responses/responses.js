// Responses

const STATUS_CODES = {
    OK: 200,
    CREATED: 201,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,

    INTERNAL_SERVER_ERROR: 500
};
// 1.success Response
const successResponse = (res, message, statusCode = 200, data = null) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    })

}

// 2.error Response
const errorResponse = (res, message, statusCode = 400, data = null) => {
    return res.status(statusCode).json({
        success: false,
        message,
        data,
    })
}

export default {
    STATUS_CODES,
    successResponse,
    errorResponse
}