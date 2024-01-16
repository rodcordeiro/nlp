import { NlpManager } from 'node-nlp';

const manager = new NlpManager({
  languages: ['pt', 'en'],
  forceNER: true,
  log: true,
});

try{manager.load('./models/model.nlp')}catch(err){
  console.error(err)
}

export default manager;
