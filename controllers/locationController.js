const Location = require('../models/location')

// Get all locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single location by ID
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new location
exports.createLocation = async (req, res) => {
  const location = new Location({
    name: req.body.name,
    coordinates: req.body.coordinates,
    photo: req.body.photo,
    description: req.body.description
  });
  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update location by ID
exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });

    location.name = req.body.name || location.name;
    location.coordinates = req.body.coordinates || location.coordinates;
    location.photo = req.body.photo || location.photo;
    location.description = req.body.description || location.description;

    const updatedLocation = await location.save();
    res.json(updatedLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete location by ID
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });

    await location.remove();
    res.json({ message: 'Location deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
