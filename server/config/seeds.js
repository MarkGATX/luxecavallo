const db = require('./connection');
const { Accessory, Houseware, Mens, Womens } = require('../models');

const accessoryData = require('../seeds/accessoryData.json');
const housewareData = require('../seeds/housewareData.json');
const menData = require('../seeds/menData.json');
const womenData = require('../seeds/womenData.json');

db.once('open', async () => {
  // clean database
  await Accessory.deleteMany({});
  await Houseware.deleteMany({});
  await Mens.deleteMany({});
  await Womens.deleteMany({});

  // bulk create each model
  try {
    const accessories = await Accessory.insertMany(accessoryData);
  } catch (error) {
    console.error(error.message);
  }
  const housewares = await Houseware.insertMany(housewareData);
  const mens = await Mens.insertMany(menData);
  const womens = await Womens.insertMany(womenData);

  console.log('all done!');
  process.exit(0);
});