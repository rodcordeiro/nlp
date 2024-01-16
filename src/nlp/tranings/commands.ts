import manager from '../manager';

// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
manager.addDocument('pt', 'Bom dia', 'greetings.hello');
manager.addDocument('pt', 'E ai?', 'greetings.hello');
manager.addDocument('pt', 'Oi', 'greetings.hello');
manager.addDocument('pt', 'tchau', 'greetings.bye');
manager.addDocument('pt', 'Até', 'greetings.bye');
manager.addDocument('pt', 'Adeus', 'greetings.bye');

// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');
manager.addAnswer('pt', 'greetings.hello', 'Bom dia!');
manager.addAnswer('pt', 'greetings.hello', 'Tudo bem?');
manager.addAnswer('pt', 'greetings.bye', 'Flw');
manager.addAnswer('pt', 'greetings.bye', 'Vlw');
manager.addAnswer('pt', 'greetings.bye', 'Até');
