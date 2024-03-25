const express = require('express');
const router = express.Router();

module.exports = (models) => {
  const { Bedtime } = models;

  // Get all bedtimes
  router.get('/', async (req, res) => {
    try {
      const entries = await Bedtime.findAll();
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get a single bedtime by ID
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const entry = await Bedtime.findByPk(id);
      if (entry) {
        res.json(entry);
      } else {
        res.status(404).json({ error: 'Bedtime entry not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Create a new bedtime
  router.post('/', async (req, res) => {
    try {
      const { childId, sleepStart, sleepEnd, success, isNap } = req.body;
      const bedtime = await Bedtime.create({
        childId,
        sleepStart,
        sleepEnd,
        success,
        isNap,
      });
      res.status(201).json(bedtime);
    } catch (error) {
      console.error('Error creating bedtime:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};
