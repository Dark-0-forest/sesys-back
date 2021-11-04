class ResponseBody {
    constructor(status, msg, data){
        this.status = status;
        this.msg = msg;
        this.data = data;
    }
}

exports.success = (msg, data) => {
    return new ResponseBody(200, msg, data);
}

exports.error = (code, msg) => {
    return new ResponseBody(code, msg, null);
}