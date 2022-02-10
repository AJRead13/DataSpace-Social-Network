const connection = require('../config/connection');
const { Thoughts, User } = require('../models');
const { getRandomName, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

 
  await Thoughts.deleteMany({});

 
  await User.deleteMany({});

 
  const users = [];

  
  const reactions = getRandomReactions(20);

  
  for (let i = 0; i < 75; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      first,
      last,
      github,
      reactions,
    });
  }

 
  await User.collection.insertMany(users);

 
  await Thoughts.collection.insertOne({
    thoughtName: 'StarFleet',
    inPerson: false,
    users: [...users],
  });

 
  console.table(users);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
