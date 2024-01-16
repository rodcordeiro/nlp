import { NlpManager } from 'node-nlp';
import path from 'path';

const manager = new NlpManager({
  languages: ['en', 'pt'],
  forceNER: true,
  // nlu: { log: true },
  // ner: { log: true },
  // autoSave:true,
});

export default manager;
