import fs from 'fs';
import { NlpManager } from 'node-nlp';

export async function trainCommandsModel(manager: NlpManager) {
  if (fs.existsSync('./src/nlp/models/commands.nlp')) {
    console.log('Command Model already exists, skipping training...');
    manager.load('./src/nlp/models/commands.nlp');
    return;
  }
  console.log('Training models...');

  manager.addRegexEntity(
    'user',
    ['en', 'pt'],
    '/(Sweetie|Bizzi|Rodrigo|Gabriel|Yah|Yasmim|Leo|Watson|Chefe|cliente|grupo)/gi',
    // '/(?<=\\b(?:to|para|o|os|as|a)\\s)(\\w+)/gi',
    // [
    //   // Regex pattern for matching names or keywords related to recipients
    //   {
    //     pattern: 'to (Sweetie|Bizzi|Rodrigo|Gabriel|Yah|Yasmim|Leo|Watson|Chefe|cliente|grupo)',
    //     name: 'recipient',
    //   },
    //   // You can add more patterns based on your specific use case
    //   // For example, to match email addresses
    //   {
    //     pattern: '([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})',
    //     name: 'recipient_email',
    //   },
    // ]
  );

  // manager.addNamedEntityText(
  //   'user',
  //   'user',
  //   ['en', 'pt'],
  //   [
  //     'Sweetie',
  //     'Bizzi',
  //     'Rodrigo',
  //     'Gabriel',
  //     'Yah',
  //     'Yasmim',
  //     'Leo',
  //     'Watson',
  //     'Chefe',
  //     'cliente',
  //     'grupo',
  //   ],
  // );

  manager.addDocument('en', 'Send an email to', 'command.send_email');
  manager.addDocument('pt', 'Envia um email para', 'command.send_email');
  manager.addDocument('pt', 'Envia um email pra', 'command.send_email');
  manager.addDocument(
    'pt',
    'Envie um e-mail para João com os detalhes da reunião de amanhã.',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Gostaria de enviar um e-mail para Maria sobre o projeto atual.',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Como posso enviar um e-mail para o departamento de suporte técnico?',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Preciso que você envie um e-mail para o cliente informando sobre o atraso na entrega.',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Quero enviar um e-mail para a equipe com as últimas atualizações do projeto.',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Pode me ajudar a enviar um e-mail para o gerente de vendas com os relatórios mensais?',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Estou pensando em enviar um e-mail para a diretoria, você pode me dar algumas dicas?',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Como faço para enviar um e-mail com anexos pelo sistema de correio eletrônico?',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'Quero enviar um e-mail formal para a equipe de RH solicitando uma reunião.',
    'command.send_email',
  );
  manager.addDocument(
    'pt',
    'É possível enviar um e-mail automático para os clientes quando concluírem uma compra?',
    'command.send_email',
  );

  manager.addDocument('en', 'Send a message to', 'command.send_message');
  manager.addDocument('pt', 'Manda uma mensagem para', 'command.send_message');
  manager.addDocument('pt', 'Envia uma messagem para', 'command.send_message');
  manager.addDocument(
    'pt',
    'Manda uma mensagem para o cliente informando sobre o novo produto',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Preciso que você mande uma mensagem para o time de desenvolvimento',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Como posso mandar uma mensagem para o departamento financeiro?',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Quero mandar uma mensagem para o grupo sobre a reunião de amanhã',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Mande uma mensagem para o fornecedor solicitando orçamento',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Posso mandar uma mensagem para o suporte técnico sobre o problema?',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Gostaria de mandar uma mensagem para o chefe de projeto',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Manda uma mensagem formal para o cliente confirmando o agendamento',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'Estou pensando em mandar uma mensagem para a equipe, o que acha?',
    'command.send_message',
  );
  manager.addDocument(
    'pt',
    'É possível mandar uma mensagem automática para os novos inscritos?',
    'command.send_message',
  );

  // say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  // say('Trained!');

  manager.addAnswer(
    'en',
    'command.send_email',
    'OK, email will be sent when I learn to do it',
  );
  manager.addAnswer('pt', 'command.send_email', 'OK, quando eu aprender :)');

  manager.addAnswer(
    'en',
    'command.send_message',
    "I don't like to talk that much, but I'll do my best, I guess...",
  );
  manager.addAnswer(
    'pt',
    'command.send_message',
    'Podexa, assim que eu aprender...',
  );

  manager.addAnswer('en', 'None', "Sorry, I don't understand");
  manager.addAnswer('pt', 'None', 'É o que?');
  manager.save('./src/nlp/models/commands.nlp');
}
