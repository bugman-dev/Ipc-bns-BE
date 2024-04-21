const express = require("express");
const logger = require("../../middleWare/logger");

const router = express.Router();
router.use(logger);

/**
 * @typedef {Object} UserData
 * @property {string} data - The user's data.
 * @property {string} format - The format of the user's data (e.g., "txt", "pdf", "plain").
 */

/**
 * GET / - Endpoint to retrieve all embeddings.
 * @param {UserData} req.body - The request body containing user's data and format.
 * @param {import('express').Response} res - The response object.
 */
router.get("/", (req, res) => {
  res.send("Get all embeddings");
});

/**
 * POST / - Endpoint to append data to existing records.
 * @param {UserData} req.body - The request body containing user's data and format.
 * @param {import('express').Response} res - The response object.
 */
router.post("/", (req, res) => {
  const { data, format } = req.body;
  // Process the data and append it to existing records
  res.status(200).json({ message: "Data appended successfully." });
});

/**
 * PUT / - Endpoint to completely replace the existing dataset.
 * @param {UserData} req.body - The request body containing user's data and format.
 * @param {import('express').Response} res - The response object.
 */
router.put("/", (req, res) => {
  const { data, format } = req.body;
  // Replace the entire dataset with the new data
  res.status(200).json({ message: "Dataset replaced successfully." });
});

module.exports = router;
