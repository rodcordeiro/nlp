import fs from 'fs';

export async function trainCommandsModel(manager: any) {
  if (fs.existsSync('./src/nlp/models/commands.nlp')) {
    console.log('Command Model already exists, skipping training...');
    manager.load('./src/nlp/models/commands.nlp');
    return;
  }
  console.log('Training models...');

  manager.addDocument('en', 'Send an email to', 'command.sendemail');
  manager.addDocument('pt', 'Envia um email para', 'command.sendemail');
  manager.addDocument('pt', 'Envia um email pra', 'command.sendemail');

  manager.addDocument('en', 'Send a message to', 'command.sendmessage');
  manager.addDocument('pt', 'Manda uma mensagem para', 'command.sendmessage');
  manager.addDocument('pt', 'Envia uma messagem para', 'command.sendmessage');

  // say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  // say('Trained!');

  manager.addAnswer(
    'en',
    'command.sendemail',
    'OK, email will be sent when I learn to do it',
  );
  manager.addAnswer('pt', 'command.sendemail', 'OK, quando eu aprender :)');
  manager.addAnswer(
    'en',
    'command.sendmessage',
    "I don't like to talk that much, but I'll do my best, I guess...",
  );
  manager.addAnswer(
    'pt',
    'command.sendmessage',
    'Podexa, assim que eu aprender...',
  );

  manager.addAnswer('en', 'None', "Sorry, I don't understand");
  manager.addAnswer('pt', 'None', 'É o que?');
  manager.save('./src/nlp/models/commands.nlp');
}
