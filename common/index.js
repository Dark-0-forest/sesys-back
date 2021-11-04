
class Response {
    constructor(status, msg, data){
        this.status = status;
        this.msg = msg;
        this.data = data;
    }
}

exports.ResponseBody = {
    success: (data = null, msg="success") => {
        return new Response(200, msg, data);
    },

    error: (code, msg) => {
        return new Response(code, msg, null);
    },

    dbInterlError: () => {
        return new Response(420, "数据库内部错误", null);
    },

    supplierCodeDuplicateError: () => {
        return new Response(430, "供应商编号已存在", null);
    },

    supplierIsNotExist: () => {
        return new Response(431, "供应商不存在", null);
    },

    paramsError: () => {
        return new Response(440, "参数不符合要求", null);
    }
}

exports.getRank = (score) => {
    if(score >= 90 && score <= 100) return "优";
    else if(score >= 80 && score <= 89) return "良";
    else if(score >= 60 && score <= 79) return "合格";
    else if(score < 60) return "不合格";
    else return "错误";
}