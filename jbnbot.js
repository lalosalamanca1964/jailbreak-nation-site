require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const mongoose = require('mongoose');

const token = process.env.DISCORD_BOT_TOKEN;

// Check if the token is defined
if (!token) {
  console.error('Discord bot token is missing. Please check your .env file.');
  process.exit(1); // Exit the process if the token is missing
}

mongoose.connect(process.env.MONGODB_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoURI = process.env.MONGODB_SRV

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB at ${mongoURI}`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

const clientId = '1135713951364165674';
const guildId = '1112082895721480316'; 

const commands = [
  {
    name: 'updatevalue',
    description: 'Update the info for an item',
    options: [
      {
      name: 'item',
      description: 'Input the name of the vehicle or item you are changing',
      type: 3,
      required: true,
      },
      {
      name: 'value',
      description: 'Input new value of item/vehicle (no commas)',
      type: 3,
      required: true,
      },
      {
      name: 'dupedvalue',
      description: 'Input new duped value of item/vehicle (no commas)',
      type: 3,
      required: true,
      },
      {
      name: 'demand',
      description: 'Input demand (High, Medium, Low)',
      type: 3,
      required: true,
      },
      {
      name: 'status',
      description: 'Input status (example: Dropping)',
      type: 3,
      required: true,
      },
      {
      name: 'rarity',
      description: 'Input rarity (example: Rare)',
      type: 3,
      required: true,
      },
      {
        name: 'username',
        description: 'Your name',
        type: 3, 
        required: true,
      },
    ],
  },
  {
    name: 'test',
    description: 'bot owner use only',
    options: [
      {
        name: 'testitem',
        description: 'test item',
        type: 3,
        required: true,
      },
      {
        name: 'test',
        description: 'test value',
        type: 3,
        required: true,
      },
    ],
  }
  
];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'updatevalue') {

      // Check if the user has the required roles
      const allowedRoles = ['Value Team', 'Administrator', 'Server Manager', 'Owner']; // Replace with your role names or IDs

      // Get member object to access roles
      const member = interaction.guild.members.cache.get(interaction.user.id);

      // Check if the user has any of the allowed roles
      const hasAllowedRole = member.roles.cache.some(role => allowedRoles.includes(role.name));

      if (!hasAllowedRole) {
        interaction.reply({ content: 'You do not have the required roles to use this command.', ephemeral: true });
        return;
      }
      // Retrieve the user's name from the options
      const username = interaction.options.getString('username');

      // Retrieve other inputs into strings
      const item = interaction.options.getString('item');
      const itemValue = interaction.options.getString('value');
      const dupedValue = interaction.options.getString('dupedvalue');
      const demand = interaction.options.getString('demand');
      const status = interaction.options.getString('status');
      const rarity = interaction.options.getString('rarity');

      // User-inputted strings into an object
      const responseData = {
        [item]: {
          value: itemValue,
          dupedValue: dupedValue,
          demand: demand,
          status: status,
          rarity: rarity,
        },
      };

      const output = JSON.stringify(responseData, undefined, 4);

      // User being DM'd with additional username info
      const targetUserId = '788899474319212575';

      // Send the DM with username
      const targetUser = await client.users.fetch(targetUserId);
      targetUser.send(`Username: ${username}\n${output}`);

      // Command response to the user
      interaction.reply('Value Submission Processed!');
    }
  } catch (error) {
    console.error(error);
    interaction.reply({ content: 'There was an error while processing your command.', ephemeral: true });
  }
});

const submissionModel =
mongoose.model('testModel', {
  test: String,
}, 'items');

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'test') {

      // Check if the user has the required roles
      const allowedRoles = ['"therapist"']; // Replace with your role names or IDs

      // Get member object to access roles
      const member = interaction.guild.members.cache.get(interaction.user.id);

      // Check if the user has any of the allowed roles
      const hasAllowedRole = member.roles.cache.some(role => allowedRoles.includes(role.name));

      if (!hasAllowedRole) {
        interaction.reply({ content: 'You do not have the required roles to use this command.', ephemeral: true });
        return;
      }

      const test = Number(interaction.options.getString('test'));
      const testItem = interaction.options.getString('testitem');
      const itemsCollection = db.collection('items');
      const { ObjectId } = require('mongoose').Types;
      const itemsDocId = new ObjectId('65ad96c30726a1ac40c1bf15');

      const filter = { _id: itemsDocId };
      const update = { $set: { [`items.${testItem}.value`]: test } };

      const result = await itemsCollection.updateOne(filter, update);

      console.log('Filter:', filter);
      console.log('Update:', update);

      if (result.modifiedCount > 0) {
        console.log('Update successful!');
        interaction.reply('Update successful!');
      } else {
        console.log('No document matched the filter or the document was not modified.');
        interaction.reply('No document matched the filter or the document was not modified.');
      }

      /* mongoose.connection.close()
        .then(() => console.log('Database connection closed!'), interaction.reply('Database connection closed!'))
        .catch(err => console.log('Error closing database connection: ', err), interaction.reply('Error closing database connection: ', err)); */
      
    }
  } catch (error) {
    console.error(error);
    interaction.reply({ content: 'There was an error while processing your command.', ephemeral: true });
  }

});

client.login(token);
