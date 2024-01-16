import { NlpManager } from 'node-nlp';

const manager = new NlpManager({
  languages: ['en', 'pt'],
  forceNER: true,
  // nlu: { log: true },
  // ner: { log: true },
  // autoSave:true,
});

export default manager;
