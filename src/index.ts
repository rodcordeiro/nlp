import { manager } from './nlp';
import { NlpProcessResponse } from 'node-nlp';

(async () => {
  let response: NlpProcessResponse;
  const messages = [
    'Goodbye',
    'this is a test',
    'here I am again',
    'where am i',
    'Send an email to Bizzi',
    'Send a message to Sweetie',
    'Envia um email para o Bizzi',
    'Manda uma messagem para Sweetie',
    'Manda uma messagem para Yah',
    'Bom dia',
    'Testando',
    'Abobrinha',
    'sabe como eu posso testar a api de fotos no insomnia?',
    'Você pode enviar uma mensagem para yah sobre a lampada?',
    'Manda uma mensagem para o cliente informando sobre o novo produto.',
    'Pode me ajudar a enviar um e-mail para o gerente de vendas com os relatórios mensais?',
    'Quero mandar uma mensagem para o grupo sobre a reunião de amanhã.',
    'Como faço para enviar um e-mail com anexos pelo sistema de correio eletrônico?',
    'Mande uma mensagem formal para o cliente confirmando o agendamento.',
  ];
  for await (const message of messages) {
    response = await manager.process(message);
    // if (response.intent !== 'None')
    //   console.log(`Q: ${message}->[${response.intent}] A: ${response.answer}`);

    console.log(`Q: ${message}->[${response.intent}] ${response.answer}`);
    if (response.intent.includes('command')) {
      // console.log(response);
      // if (response.entities.some((entity) => entity.entity === 'user')) {
      //   console.log(
      //     response.entities.find((entity) => entity.entity === 'user')
      //       ?.sourceText,
      //   );
      // }
      // console.log(
      //   message,
      //   `> Executing command: ${response.intent.split('.')[1]}.\n`,
      //   response.entities,
      // );
    }
  }
})();
