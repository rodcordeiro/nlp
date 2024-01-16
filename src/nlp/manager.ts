import { NlpManager } from 'node-nlp';

const manager = new NlpManager({
  languages: ['en', 'pt'],
  forceNER: true,
  action: {
    'command.send_message': (params, ctx, result) => {
      console.log({ params, ctx, result });
      return result;
    },
  },
  // nlu: { log: true },
  // ner: { log: true },
  // autoSave:true,
});

// manager.registerActionFunction(
//   'command.send_message',
//   async (data: any, locale: string, param2: any) => {
//     console.log(data);
//     return data;
//   },
// );
export default manager;
