import manager from './nlp/manager';

(async () => {
  await manager.train()
  manager.save('./nlp/models/model.nlp');
  let response = await manager.process('en', 'I should go now');
  console.log(response);
  response = await manager.process('pt', 'Até amanhã');
  console.log(response);
})();
