const express = require('express');
const router = express.Router();
const fs = require('fs');
const debug = require('debug')('login');

router.post('/login', async (req, res, next) => {
		try {
				let getData = await  JSON.parse(req.body);
				console.log(getData);
				next();
		} catch (err) {
				debug(err);
				next('/123请求失败,失败');
		}
});