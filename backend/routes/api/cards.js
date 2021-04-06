const express = require('express');
const asyncHandler = require('express-async-handler')
const Sequelize = require('sequelize');

const {Card} = require('../../db/models')

const router = express.Router();


router.get('/random', asyncHandler(async (req,res) => {
  const {id} =req.body;
  console.log(id)
  const response = await Card.findByPk(id)
  console.log(response)
  // const url = await response.json()

  return response;
}))


module.exports = router
