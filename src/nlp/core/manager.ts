import fs from 'fs';
import { NlpManager } from 'node-nlp';

const manager = new NlpManager({
  languages: ['en', 'pt'],
  forceNER: true,
  nlu: { log: true },
  ner: {
    locale: 'pt',
  },
});

(async () => {
  for (const file of fs.readdirSync('./src/nlp/models')) {
    if (file.endsWith('corpus.json')) {
      manager.addCorpus(`./src/nlp/models/${file}`);
    }
  }
  if (!fs.existsSync('./model.nlp')) await manager.train();
  await manager.load();
})();

// manager.addAction(
//   'whatTimeIsIt',
//   'handleWhatsTimeAction',
//   ['en-US', 'parameter 2'],
//   async (data, locale, param2) => {
//     // Inject a new entitiy into context used for answer generation
//     data.context.time = new Date().toLocaleTimeString(locale);
//     return data;
//   },
// );

export default manager;
