const formValidation = {
    // 手机号码验证
    mobile: (rule, value, callback) => {
        const reg = /^1(3|4|5|7|8)\d{9}$/;
        if (!reg.test(value)) {
            callback("请输入正确的手机号")
        } else {
            callback();
        }
    },
    password: (rule, value, callback) => {
        const reg = /^[^\s]*$/;
        if (!reg.test(value)) {
            callback("不能有特殊字符")
        } else {
            callback()
        }
    }
}

export default formValidation