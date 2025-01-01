const { processEvent } = require("../utils/temporalClientUtil");
const _ = require("lodash");

const createUser = (req, res) => {
    console.log("Request recieved with params : " + req);
    const user = req?.body?.user;
    let args = {
        user: user
    }
    const result = processEvent(args, "hospital1", "preCreateUser");
    result.then(resp => {
        if(_.has(resp, "error")) {
            res.send({
                error: resp.error,
                code: 300
            })
        } else {
            res.send({
                message: resp,
                code: 201
            });
        }
    })
    .catch(err => {
        res.send({
            message: result,
            code: 201,
            error: err
        });
    })


}

module.exports = {
    createUser: createUser
}