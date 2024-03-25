const express = require('express');
const router = express.Router();

module.exports = (models) => {
  const { Child } = models;

  // Get all children
  router.get('/', async (req, res) => {
    try {
      const entries = await Child.findAll();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get a single child by ID
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const entry = await Child.findByPk(id);
      if (entry) {
        res.json(entry);
      } else {
        res.status(404).json({ error: 'Child entry not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Create a new child
  router.post('/', async (req, res) => {
    try {
      const { name } = req.body;
      const child = await Child.create({
        name,
      });
      res.status(201).json(child);
    } catch (error) {
      console.error('Error creating child:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};
