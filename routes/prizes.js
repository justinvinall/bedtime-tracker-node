const express = require('express');
const router = express.Router();

module.exports = (models) => {
  const { Prize } = models;

  // Get all prizes
  router.get('/', async (req, res) => {
    try {
      const entries = await Prize.findAll();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get a single prize by ID
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const entry = await Prize.findByPk(id);
      if (entry) {
        res.json(entry);
      } else {
        res.status(404).json({ error: 'Prize entry not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Create a new prize
  router.post('/', async (req, res) => {
    try {
      const { name, description, imageUrl, priority } = req.body;
      const prize = await Prize.create({
        name,
        description,
        imageUrl,
        priority,
      });
      res.status(201).json(prize);
    } catch (error) {
      console.error('Error creating prize:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};
