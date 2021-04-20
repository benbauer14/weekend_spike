const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET chat messages
    const user = req.query.user
    console.log(user)
    const queryText = `SELECT * FROM chat WHERE "toUser"=$1 OR "fromUser"=$1`
    pool.query(queryText, [user]).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(500)
        console.log(err)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
