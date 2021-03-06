const router = require('../../libs/router');

let users={};

router.on('/login', (req, res)=>{
    let {user, pass} = req.query;

    if (!users[user]) {
        res.send({code:1, msg:'用户名不存在'});
    } else if (users[user] !== pass) {
        res.send({code:1, msg:'用户名或者密码不对'});
    } else {
        res.send({code:0, msg:'登录成功'});
    }

    res.end();
});

router.on('/reg', (req, res)=>{
    console.log(req.query);
    let {user, pass} = req.query;

    if (users[user]) {
        res.send({'code':1, msg: '用户已存在'});
    } else {
        users[user] = pass;
        res.send({code: 0, msg: '注册成功'});
    }
    res.end();
});
