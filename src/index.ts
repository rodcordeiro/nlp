import manager from './nlp/manager';
import { trainChatModel } from './nlp/tranings/chat';
import { trainCommandsModel } from './nlp/tranings/commands';

(async () => {
  await trainCommandsModel(manager);
  await trainChatModel(manager);
  let response: any;
  const messages = [
    'Goodbye',
    'Good Morning?',
    "I'm very excited",
    'Who are you?',
    'this is a test',
    'here I am again',
    'en',
    'Send an email to Bizzi',
    'Send a message to Sweetie',
    'Envia um email para o Bizzi',
    'Manda uma messagem para Sweetie',
    'Bom dia',
    'Testando',
    'Abobrinha',
  ];
  for await (const message of messages) {
    response = await manager.process(message);
    console.log(`Q: ${message}-> A: ${response.answer}`);
    if (response.intent.split('.')[0] === 'command') {
      console.log(`> Executing command: ${response.intent.split('.')[1]}`);
    }
  }
})();
