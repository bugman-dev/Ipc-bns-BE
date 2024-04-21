const express = require("express");
const logger = require("../../middleWare/logger");

const router = express.Router();
router.use(logger);

/**
 * @typedef {Object} UserPrompt
 * @property {string} prompt - The user's prompt string.
 */

/**
 * POST / - Endpoint to pass prompts to get response.
 * @param {UserPrompt} req.body - The request body containing user's data and format.
 * @param {import('express').Response} res - The response object.
 */
router.post("/", (req, res) => {
  const requestBody = req.body;
  res.status(200).json({ message: "*Processed Response*" });
});

module.exports = router;
