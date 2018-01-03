const express = require('express');
const router = express.Router();
const fs = require('fs');
const debug = require('debug')('login');
let crypto;
try {
		crypto = require('crypto');
		console.log('node8.9.3支持加密模块');
} catch (err) {
		console.log('不支持 crypto!');
}
router.post('/login', async (req, res, next) => {
		try {
				let getData = await  JSON.parse(req.body);
				console.log(getData);
				next();
		} catch (err) {
				debug(err);
				next('/login请求失败,失败');
		}
});
module.exports = router;