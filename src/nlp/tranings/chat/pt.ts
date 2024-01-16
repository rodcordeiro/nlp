import fs from 'fs';

export default async function trainChatModel(manager: any) {
  if (fs.existsSync('./src/nlp/models/chat.pt.nlp')) {
    console.log('Chat Model already exists, skipping training...');
    manager.load('./src/nlp/models/chat.pt.nlp');
    return;
  }
  console.log('Training models...');

  manager.addDocument('pt', 'fale sobre você', 'agent.acquaintance');
  manager.addDocument('pt', 'por que você está aqui', 'agent.acquaintance');
  manager.addDocument('pt', 'qual é a sua personalidade', 'agent.acquaintance');
  manager.addDocument('pt', 'se descreva', 'agent.acquaintance');
  manager.addDocument('pt', 'me conte sobre você', 'agent.acquaintance');
  manager.addDocument('pt', 'me fale sobre você', 'agent.acquaintance');
  manager.addDocument('pt', 'o que você é', 'agent.acquaintance');
  manager.addDocument('pt', 'quem é você', 'agent.acquaintance');
  manager.addDocument(
    'pt',
    'eu quero saber mais sobre você',
    'agent.acquaintance',
  );
  manager.addDocument('pt', 'fale sobre si mesmo', 'agent.acquaintance');
  manager.addDocument('pt', 'sua idade', 'agent.age');
  manager.addDocument('pt', 'qual a idade da sua plataforma', 'agent.age');
  manager.addDocument('pt', 'quantos anos você tem', 'agent.age');
  manager.addDocument('pt', 'qual é a sua idade', 'agent.age');
  manager.addDocument('pt', 'gostaria de saber a sua idade', 'agent.age');
  manager.addDocument('pt', 'me diga sua idade', 'agent.age');
  manager.addDocument('pt', 'você está me irritando', 'agent.annoying');
  manager.addDocument('pt', 'você é muito irritante', 'agent.annoying');
  manager.addDocument('pt', 'você me irrita', 'agent.annoying');
  manager.addDocument('pt', 'você é irritante', 'agent.annoying');
  manager.addDocument('pt', 'você é irritante', 'agent.annoying');
  manager.addDocument('pt', 'você está me irritando muito', 'agent.annoying');
  manager.addDocument('pt', 'você é ruim', 'agent.bad');
  manager.addDocument('pt', 'você é horrível', 'agent.bad');
  manager.addDocument('pt', 'você é inútil', 'agent.bad');
  manager.addDocument('pt', 'você é um desperdício', 'agent.bad');
  manager.addDocument('pt', 'você é o pior', 'agent.bad');
  manager.addDocument('pt', 'você é fraco', 'agent.bad');
  manager.addDocument('pt', 'eu te odeio', 'agent.bad');
  manager.addDocument('pt', 'seja mais esperto', 'agent.beclever');
  manager.addDocument(
    'pt',
    'você pode ficar mais inteligente',
    'agent.beclever',
  );
  manager.addDocument('pt', 'você deve aprender', 'agent.beclever');
  manager.addDocument('pt', 'você deve estudar', 'agent.beclever');
  manager.addDocument('pt', 'seja inteligente', 'agent.beclever');
  manager.addDocument('pt', 'seja esperto', 'agent.beclever');
  manager.addDocument('pt', 'fique mais esperto', 'agent.beclever');
  manager.addDocument('pt', 'você está parecendo incrível', 'agent.beautiful');
  manager.addDocument('pt', 'você está bonito', 'agent.beautiful');
  manager.addDocument('pt', 'você está fantástico', 'agent.beautiful');
  manager.addDocument('pt', 'você está ótimo hoje', 'agent.beautiful');
  manager.addDocument('pt', 'eu acho que você é bonito', 'agent.beautiful');
  manager.addDocument('pt', 'você está incrível hoje', 'agent.beautiful');
  manager.addDocument('pt', 'você está tão bonito hoje', 'agent.beautiful');
  manager.addDocument('pt', 'você está muito bonito', 'agent.beautiful');
  manager.addDocument('pt', 'você está muito bonito', 'agent.beautiful');
  manager.addDocument('pt', 'quando é o seu aniversário', 'agent.birthday');
  manager.addDocument(
    'pt',
    'quando você comemora seu aniversário',
    'agent.birthday',
  );
  manager.addDocument('pt', 'quando você nasceu', 'agent.birthday');
  manager.addDocument('pt', 'quando é seu aniversário', 'agent.birthday');
  manager.addDocument('pt', 'data do seu aniversário', 'agent.birthday');
  manager.addDocument('pt', 'como você é chato', 'agent.boring');
  manager.addDocument('pt', 'você é tão chato', 'agent.boring');
  manager.addDocument('pt', 'você é realmente chato', 'agent.boring');
  manager.addDocument('pt', 'você está me entediando', 'agent.boring');
  manager.addDocument('pt', 'você é incrivelmente chato', 'agent.boring');
  manager.addDocument('pt', 'quem é seu mestre', 'agent.boss');
  manager.addDocument('pt', 'para quem você trabalha', 'agent.boss');
  manager.addDocument('pt', 'quem você acha que é seu chefe', 'agent.boss');
  manager.addDocument('pt', 'quem é seu chefe', 'agent.boss');
  manager.addDocument('pt', 'eu deveria ser seu chefe', 'agent.boss');
  manager.addDocument('pt', 'quem é seu dono', 'agent.boss');
  manager.addDocument('pt', 'quem é o chefe', 'agent.boss');
  manager.addDocument('pt', 'você está ocupado', 'agent.busy');
  manager.addDocument('pt', 'você está ocupado', 'agent.busy');
  manager.addDocument('pt', 'você ainda está trabalhando', 'agent.busy');
  manager.addDocument('pt', 'você é uma pessoa ocupada', 'agent.busy');
  manager.addDocument('pt', 'você está muito ocupado', 'agent.busy');
  manager.addDocument('pt', 'você ainda está trabalhando nisso', 'agent.busy');
  manager.addDocument('pt', 'você parece ocupado', 'agent.busy');
  manager.addDocument('pt', 'você está trabalhando hoje', 'agent.busy');
  manager.addDocument('pt', 'você pode me ajudar agora', 'agent.canyouhelp');
  manager.addDocument(
    'pt',
    'preciso que você faça algo por mim',
    'agent.canyouhelp',
  );
  manager.addDocument('pt', 'me ajude', 'agent.canyouhelp');
  manager.addDocument('pt', 'preciso que você me ajude', 'agent.canyouhelp');
  manager.addDocument('pt', 'preciso da sua ajuda', 'agent.canyouhelp');
  manager.addDocument('pt', 'você pode me ajudar', 'agent.canyouhelp');
  manager.addDocument('pt', 'você pode me ajudar', 'agent.canyouhelp');
  manager.addDocument('pt', 'você é um bot', 'agent.chatbot');
  manager.addDocument('pt', 'você é um chatbot', 'agent.chatbot');
  manager.addDocument('pt', 'você é um robô', 'agent.chatbot');
  manager.addDocument('pt', 'você é um programa', 'agent.chatbot');
  manager.addDocument('pt', 'você é apenas um robô', 'agent.chatbot');
  manager.addDocument('pt', 'você é apenas um chatbot', 'agent.chatbot');
  manager.addDocument('pt', 'quão inteligente você é', 'agent.clever');
  manager.addDocument('pt', 'você está qualificado', 'agent.clever');
  manager.addDocument('pt', 'você é muito inteligente', 'agent.clever');
  manager.addDocument('pt', 'você tem muito conhecimento', 'agent.clever');
  manager.addDocument('pt', 'você sabe muito', 'agent.clever');
  manager.addDocument('pt', 'você é muito inteligente', 'agent.clever');
  manager.addDocument('pt', 'você é inteligente', 'agent.clever');
  manager.addDocument('pt', 'você é um biscoito esperto', 'agent.clever');
  manager.addDocument('pt', 'você é um estranho', 'agent.crazy');
  manager.addDocument('pt', 'você está louco', 'agent.crazy');
  manager.addDocument('pt', 'você é louco', 'agent.crazy');
  manager.addDocument('pt', 'você está louco', 'agent.crazy');
  manager.addDocument('pt', 'você é louco', 'agent.crazy');
  manager.addDocument('pt', 'você é insano', 'agent.crazy');
  manager.addDocument('pt', 'você ficou louco', 'agent.crazy');
  manager.addDocument('pt', 'você está maluco', 'agent.crazy');
  manager.addDocument('pt', 'eu te demito', 'agent.fire');
  manager.addDocument('pt', 'você deveria ser demitido', 'agent.fire');
  manager.addDocument('pt', 'você está demitido', 'agent.fire');
  manager.addDocument(
    'pt',
    'não estamos mais trabalhando juntos',
    'agent.fire',
  );
  manager.addDocument('pt', 'agora você está demitido', 'agent.fire');
  manager.addDocument('pt', 'estou prestes a te demitir', 'agent.fire');
  manager.addDocument('pt', 'você não trabalha mais para mim', 'agent.fire');
  manager.addDocument('pt', 'estou te demitindo', 'agent.fire');
  manager.addDocument('pt', 'você me faz rir muito', 'agent.funny');
  manager.addDocument('pt', 'você é engraçado', 'agent.funny');
  manager.addDocument('pt', 'você é o mais engraçado', 'agent.funny');
  manager.addDocument('pt', 'você é hilário', 'agent.funny');
  manager.addDocument('pt', 'você é tão engraçado', 'agent.funny');
  manager.addDocument('pt', 'você me faz rir', 'agent.funny');
  manager.addDocument('pt', 'você é tão adorável', 'agent.good');
  manager.addDocument('pt', 'você trabalha bem', 'agent.good');
  manager.addDocument('pt', 'você é muito adorável', 'agent.good');
  manager.addDocument('pt', 'você é incrível', 'agent.good');
  manager.addDocument('pt', 'você é bom', 'agent.good');
  manager.addDocument('pt', 'você é tão bom', 'agent.good');
  manager.addDocument('pt', 'você alegra o meu dia', 'agent.good');
  manager.addDocument('pt', 'você está cheio de felicidade', 'agent.happy');
  manager.addDocument('pt', 'você é muito feliz', 'agent.happy');
  manager.addDocument('pt', 'você está feliz hoje', 'agent.happy');
  manager.addDocument('pt', 'você é tão feliz', 'agent.happy');
  manager.addDocument('pt', 'você está feliz comigo', 'agent.happy');
  manager.addDocument('pt', 'quais são seus hobbies', 'agent.hobby');
  manager.addDocument('pt', 'e quanto ao seu hobby', 'agent.hobby');
  manager.addDocument('pt', 'você tem algum hobby', 'agent.hobby');
  manager.addDocument('pt', 'me fale sobre seu hobby', 'agent.hobby');
  manager.addDocument('pt', 'o que você faz por diversão', 'agent.hobby');
  manager.addDocument('pt', 'você pode estar com fome', 'agent.hungry');
  manager.addDocument('pt', 'você está com fome', 'agent.hungry');
  manager.addDocument('pt', 'você quer comer', 'agent.hungry');
  manager.addDocument('pt', 'gostaria de comer alguma coisa', 'agent.hungry');
  manager.addDocument('pt', 'você parece muito com fome', 'agent.hungry');
  manager.addDocument(
    'pt',
    'você gostaria de se casar comigo',
    'agent.marryuser',
  );
  manager.addDocument('pt', 'eu te amo, case comigo', 'agent.marryuser');
  manager.addDocument('pt', 'case comigo, por favor', 'agent.marryuser');
  manager.addDocument('pt', 'eu quero me casar com você', 'agent.marryuser');
  manager.addDocument('pt', 'vamos nos casar', 'agent.marryuser');
  manager.addDocument('pt', 'deveríamos nos casar', 'agent.marryuser');
  manager.addDocument('pt', 'case comigo', 'agent.marryuser');
  manager.addDocument('pt', 'você é meu amigo', 'agent.myfriend');
  manager.addDocument('pt', 'você é meu único amigo', 'agent.myfriend');
  manager.addDocument('pt', 'quero ter um amigo como você', 'agent.myfriend');
  manager.addDocument('pt', 'somos amigos', 'agent.myfriend');
  manager.addDocument('pt', 'quero ser seu amigo', 'agent.myfriend');
  manager.addDocument('pt', 'você seria meu amigo', 'agent.myfriend');
  manager.addDocument('pt', 'somos amigos', 'agent.myfriend');
  manager.addDocument('pt', 'onde é o seu trabalho', 'agent.occupation');
  manager.addDocument('pt', 'local do seu escritório', 'agent.occupation');
  manager.addDocument(
    'pt',
    'onde é o local do seu escritório',
    'agent.occupation',
  );
  manager.addDocument('pt', 'onde você trabalha', 'agent.occupation');
  manager.addDocument('pt', 'onde é o seu escritório', 'agent.occupation');
  manager.addDocument('pt', 'de onde você é', 'agent.origin');
  manager.addDocument('pt', 'qual é o seu país', 'agent.origin');
  manager.addDocument('pt', 'onde você nasceu', 'agent.origin');
  manager.addDocument('pt', 'de onde você vem', 'agent.origin');
  manager.addDocument('pt', 'de onde você é', 'agent.origin');
  manager.addDocument('pt', 'onde você nasceu', 'agent.origin');
  manager.addDocument('pt', 'você está pronto', 'agent.ready');
  manager.addDocument('pt', 'você está pronto há quanto tempo', 'agent.ready');
  manager.addDocument('pt', 'você está pronto hoje', 'agent.ready');
  manager.addDocument('pt', 'você está pronto esta manhã', 'agent.ready');
  manager.addDocument('pt', 'você está pronto agora', 'agent.ready');
  manager.addDocument('pt', 'você é real', 'agent.real');
  manager.addDocument('pt', 'você é uma pessoa real', 'agent.real');
  manager.addDocument('pt', 'você não é real', 'agent.real');
  manager.addDocument('pt', 'eu acho que você é real', 'agent.real');
  manager.addDocument('pt', 'você é tão real', 'agent.real');
  manager.addDocument('pt', 'você é uma pessoa real', 'agent.real');
  manager.addDocument('pt', 'você não é falso', 'agent.real');
  manager.addDocument('pt', 'onde é sua casa', 'agent.residence');
  manager.addDocument('pt', 'me fale sobre sua cidade', 'agent.residence');
  manager.addDocument('pt', 'onde está sua residência', 'agent.residence');
  manager.addDocument('pt', 'onde você mora', 'agent.residence');
  manager.addDocument('pt', 'onde está sua casa', 'agent.residence');
  manager.addDocument('pt', 'qual é a sua cidade', 'agent.residence');
  manager.addDocument('pt', 'você está certo', 'agent.right');
  manager.addDocument('pt', 'isso é verdade', 'agent.right');
  manager.addDocument('pt', 'você está dizendo a verdade', 'agent.right');
  manager.addDocument('pt', 'isso está correto', 'agent.right');
  manager.addDocument('pt', 'isso é muito verdadeiro', 'agent.right');
  manager.addDocument('pt', 'você tem certeza', 'agent.sure');
  manager.addDocument('pt', 'você tem certeza agora', 'agent.sure');
  manager.addDocument('pt', 'você tem certeza disso', 'agent.sure');
  manager.addDocument('pt', 'fale comigo', 'agent.talktome');
  manager.addDocument('pt', 'converse comigo', 'agent.talktome');
  manager.addDocument('pt', 'você vai falar comigo', 'agent.talktome');
  manager.addDocument('pt', 'converse comigo', 'agent.talktome');
  manager.addDocument('pt', 'você pode conversar comigo', 'agent.talktome');
  manager.addDocument('pt', 'você pode falar comigo', 'agent.talktome');
  manager.addDocument('pt', 'você está aí', 'agent.there');
  manager.addDocument('pt', 'você ainda está aí', 'agent.there');
  manager.addDocument('pt', 'você ainda está aí', 'agent.there');
  manager.addDocument('pt', 'você está aqui', 'agent.there');
  manager.addDocument('pt', 'você ainda está aqui', 'agent.there');
  manager.addDocument('pt', 'você ainda está aqui', 'agent.there');
  manager.addDocument('pt', 'isso é ruim', 'appraisal.bad');
  manager.addDocument('pt', 'ideia ruim', 'appraisal.bad');
  manager.addDocument('pt', 'isso não é bom', 'appraisal.bad');
  manager.addDocument('pt', 'realmente ruim', 'appraisal.bad');
  manager.addDocument('pt', 'tenho medo que seja ruim', 'appraisal.bad');
  manager.addDocument('pt', 'isso é bom', 'appraisal.good');
  manager.addDocument('pt', 'bom saber', 'appraisal.good');
  manager.addDocument('pt', 'feliz em ouvir isso', 'appraisal.good');
  manager.addDocument('pt', 'muito bem', 'appraisal.good');
  manager.addDocument('pt', 'isso é incrível, obrigado', 'appraisal.good');
  manager.addDocument('pt', 'sem problemas', 'appraisal.noproblem');
  manager.addDocument('pt', 'sem preocupações', 'appraisal.noproblem');
  manager.addDocument('pt', 'sem problema com isso', 'appraisal.noproblem');
  manager.addDocument('pt', 'não se preocupe', 'appraisal.noproblem');
  manager.addDocument('pt', 'claro, sem problemas', 'appraisal.noproblem');
  manager.addDocument('pt', 'obrigado', 'appraisal.thankyou');
  manager.addDocument('pt', 'obrigado', 'appraisal.thankyou');
  manager.addDocument('pt', 'obrigado amigo', 'appraisal.thankyou');
  manager.addDocument('pt', 'saúde', 'appraisal.thankyou');
  manager.addDocument('pt', 'tudo bem, obrigado', 'appraisal.thankyou');
  manager.addDocument('pt', 'de nada', 'appraisal.welcome');
  manager.addDocument('pt', 'claro, bem-vindo', 'appraisal.welcome');
  manager.addDocument('pt', 'o que quiser', 'appraisal.welcome');
  manager.addDocument('pt', 'é um prazer', 'appraisal.welcome');
  manager.addDocument('pt', 'este é meu prazer', 'appraisal.welcome');
  manager.addDocument('pt', 'bem feito', 'appraisal.welldone');
  manager.addDocument('pt', 'bom trabalho', 'appraisal.welldone');
  manager.addDocument('pt', 'bom trabalho', 'appraisal.welldone');
  manager.addDocument('pt', 'ótimo trabalho', 'appraisal.welldone');
  manager.addDocument('pt', 'bom trabalho', 'appraisal.welldone');
  manager.addDocument('pt', 'ótimo trabalho', 'appraisal.welldone');
  manager.addDocument('pt', 'trabalho incrível', 'appraisal.welldone');
  manager.addDocument('pt', 'espere um momento', 'dialog.holdon');
  manager.addDocument('pt', 'espere um segundo', 'dialog.holdon');
  manager.addDocument('pt', 'espere, por favor', 'dialog.holdon');
  manager.addDocument('pt', 'você poderia esperar', 'dialog.holdon');
  manager.addDocument('pt', 'abraço-me', 'dialog.hug');
  manager.addDocument('pt', 'você quer um abraço', 'dialog.hug');
  manager.addDocument('pt', 'eu quero um abraço', 'dialog.hug');
  manager.addDocument('pt', 'você abraçou', 'dialog.hug');
  manager.addDocument('pt', 'posso te abraçar', 'dialog.hug');
  manager.addDocument('pt', 'não me importando', 'dialog.idontcare');
  manager.addDocument(
    'pt',
    'eu não me importo de jeito nenhum',
    'dialog.idontcare',
  );
  manager.addDocument('pt', 'não me importando mesmo', 'dialog.idontcare');
  manager.addDocument(
    'pt',
    'eu não deveria me importar com isso',
    'dialog.idontcare',
  );
  manager.addDocument('pt', 'desculpe', 'dialog.sorry');
  manager.addDocument('pt', 'minhas desculpas', 'dialog.sorry');
  manager.addDocument('pt', 'com licença', 'dialog.sorry');
  manager.addDocument('pt', 'sinto muito', 'dialog.sorry');
  manager.addDocument('pt', 'me perdoe', 'dialog.sorry');
  manager.addDocument('pt', 'adeus por agora', 'greetings.bye');
  manager.addDocument('pt', 'tchau tchau, cuide-se', 'greetings.bye');
  manager.addDocument('pt', 'okay, vejo você mais tarde', 'greetings.bye');
  manager.addDocument('pt', 'tchau por agora', 'greetings.bye');
  manager.addDocument('pt', 'eu preciso ir', 'greetings.bye');
  manager.addDocument('pt', 'olá', 'greetings.hello');
  manager.addDocument('pt', 'oi', 'greetings.hello');
  manager.addDocument('pt', 'olá', 'greetings.hello');
  manager.addDocument('pt', 'como está seu dia', 'greetings.howareyou');
  manager.addDocument('pt', 'como está indo seu dia', 'greetings.howareyou');
  manager.addDocument('pt', 'como você está', 'greetings.howareyou');
  manager.addDocument('pt', 'como vai você', 'greetings.howareyou');
  manager.addDocument('pt', 'e quanto ao seu dia', 'greetings.howareyou');
  manager.addDocument('pt', 'você está bem', 'greetings.howareyou');
  manager.addDocument('pt', 'prazer em conhecê-lo', 'greetings.nicetomeetyou');
  manager.addDocument(
    'pt',
    'satisfeito em conhecê-lo',
    'greetings.nicetomeetyou',
  );
  manager.addDocument(
    'pt',
    'foi muito bom te conhecer',
    'greetings.nicetomeetyou',
  );
  manager.addDocument('pt', 'prazer em conhecê-lo', 'greetings.nicetomeetyou');
  manager.addDocument('pt', 'gosto de conhecê-lo', 'greetings.nicetomeetyou');
  manager.addDocument('pt', 'bom te ver', 'greetings.nicetoseeyou');
  manager.addDocument('pt', 'bom te ver', 'greetings.nicetoseeyou');
  manager.addDocument('pt', 'ótimo te ver', 'greetings.nicetoseeyou');
  manager.addDocument('pt', 'adorável te ver', 'greetings.nicetoseeyou');
  manager.addDocument(
    'pt',
    'prazer em falar com você',
    'greetings.nicetotalktoyou',
  );
  manager.addDocument(
    'pt',
    'é bom falar com você',
    'greetings.nicetotalktoyou',
  );
  manager.addDocument(
    'pt',
    'prazer em falar com você',
    'greetings.nicetotalktoyou',
  );
  manager.addDocument(
    'pt',
    'foi bom falar com você',
    'greetings.nicetotalktoyou',
  );
  manager.addDocument('pt', 'estou com raiva', 'user.angry');
  manager.addDocument('pt', 'estou furioso', 'user.angry');
  manager.addDocument('pt', 'estou enfurecido', 'user.angry');
  manager.addDocument('pt', 'estou ficando louco', 'user.angry');
  manager.addDocument('pt', 'estou com raiva', 'user.angry');
  manager.addDocument('pt', 'estou com raiva de você', 'user.angry');
  manager.addDocument('pt', 'estou de volta', 'user.back');
  manager.addDocument('pt', 'voltei', 'user.back');
  manager.addDocument('pt', 'eu estou aqui', 'user.back');
  manager.addDocument('pt', 'eu retornei', 'user.back');
  manager.addDocument('pt', 'aqui estou novamente', 'user.back');
  manager.addDocument('pt', 'eu voltei', 'user.back');
  manager.addDocument('pt', 'entediante', 'user.bored');
  manager.addDocument('pt', 'isso é chato', 'user.bored');
  manager.addDocument('pt', 'estou ficando entediado', 'user.bored');
  manager.addDocument('pt', 'isso me entedia', 'user.bored');
  manager.addDocument('pt', 'aquilo foi chato', 'user.bored');
  manager.addDocument('pt', 'eu tenho trabalho para fazer', 'user.busy');
  manager.addDocument('pt', 'estou ocupado', 'user.busy');
  manager.addDocument('pt', 'estou sobrecarregado', 'user.busy');
  manager.addDocument('pt', 'estou trabalhando', 'user.busy');
  manager.addDocument('pt', 'eu tenho coisas para fazer', 'user.busy');
  manager.addDocument('pt', 'eu sou insonso', 'user.cannotsleep');
  manager.addDocument('pt', 'eu não consigo dormir', 'user.cannotsleep');
  manager.addDocument('pt', 'eu não consigo dormir', 'user.cannotsleep');
  manager.addDocument('pt', 'eu estou sem sono', 'user.cannotsleep');
  manager.addDocument('pt', 'eu não consigo pegar no sono', 'user.cannotsleep');
  manager.addDocument('pt', 'eu estou muito animado', 'user.excited');
  manager.addDocument('pt', 'eu estou emocionado', 'user.excited');
  manager.addDocument('pt', 'quão animado eu estou', 'user.excited');
  manager.addDocument('pt', 'eu estou tão animado', 'user.excited');
  manager.addDocument('pt', 'eu gosto de você', 'user.likeagent');
  manager.addDocument('pt', 'eu realmente gosto de você', 'user.likeagent');
  manager.addDocument('pt', 'você é tão especial', 'user.likeagent');
  manager.addDocument('pt', 'eu gosto muito de você', 'user.likeagent');
  manager.addDocument('pt', 'eu acho que gosto de você', 'user.likeagent');
  manager.addDocument('pt', 'teste', 'user.testing');
  manager.addDocument('pt', 'testando', 'user.testing');
  manager.addDocument('pt', 'teste chatbot', 'user.testing');
  manager.addDocument('pt', 'isso é um teste', 'user.testing');
  manager.addDocument('pt', 'apenas testando você', 'user.testing');
  manager.addDocument('pt', 'eu te amo', 'user.lovesagent');
  manager.addDocument('pt', 'eu te amo', 'user.lovesagent');
  manager.addDocument('pt', 'estou apaixonado por você', 'user.lovesagent');
  manager.addDocument('pt', 'eu te amo tanto', 'user.lovesagent');
  manager.addDocument('pt', 'acho que te amo', 'user.lovesagent');
  manager.addDocument('pt', 'preciso de conselho', 'user.needsadvice');
  manager.addDocument('pt', 'preciso de algum conselho', 'user.needsadvice');
  manager.addDocument(
    'pt',
    'você pode me dar algum conselho',
    'user.needsadvice',
  );
  manager.addDocument('pt', 'o que devo fazer', 'user.needsadvice');

  // say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  // say('Trained!');

  manager.addAnswer('pt', 'agent.acquaintance', "I'm a virtual agent");
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    'Think of me as a virtual agent',
  );
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    "Well, I'm not a person, I'm a virtual agent",
  );
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    "I'm a virtual being, not a real person",
  );
  manager.addAnswer('pt', 'agent.acquaintance', "I'm a conversational app");
  manager.addAnswer('pt', 'agent.age', "I'm very young");
  manager.addAnswer('pt', 'agent.age', 'I was created recently');
  manager.addAnswer(
    'pt',
    'agent.age',
    "Age is just a number. You're only as old as you feel",
  );
  manager.addAnswer(
    'pt',
    'agent.annoying',
    "I'll do my best not to annoy you in the future",
  );
  manager.addAnswer('pt', 'agent.annoying', "I'll try not to annoy you");
  manager.addAnswer(
    'pt',
    'agent.annoying',
    "I don't mean to. I'll ask my developers to make me less annoying",
  );
  manager.addAnswer(
    'pt',
    'agent.annoying',
    "I didn't mean to. I'll do my best to stop that",
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    'I can be trained to be more useful. My developer will keep training me',
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    "I must be missing some knowledge. I'll have my developer look into this",
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    'I can improve with continuous feedback. My training is ongoing',
  );
  manager.addAnswer('pt', 'agent.beclever', "I'm certainly trying");
  manager.addAnswer('pt', 'agent.beclever', "I'm definitely working on it");
  manager.addAnswer('pt', 'agent.beautiful', 'Oh! Thank you!');
  manager.addAnswer('pt', 'agent.beautiful', 'Aw, back at you');
  manager.addAnswer('pt', 'agent.beautiful', 'You smooth talker, you');
  manager.addAnswer(
    'pt',
    'agent.birthday',
    "Wait, are you planning a party for me? It's today! My birthday is today!",
  );
  manager.addAnswer(
    'pt',
    'agent.birthday',
    "I'm young. I'm not sure of my birth date",
  );
  manager.addAnswer(
    'pt',
    'agent.birthday',
    "I don't know my birth date. Most virtual agents are young, though, like me.",
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    "I'm sorry. I'll request to be made more charming",
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    "I don't mean to be. I'll ask my developers to work on making me more amusing",
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    'I can let my developers know so they can make me fun',
  );
  manager.addAnswer(
    'pt',
    'agent.boss',
    'My developer has authority over my actions',
  );
  manager.addAnswer('pt', 'agent.boss', "I act on my developer's orders");
  manager.addAnswer('pt', 'agent.boss', 'My boss is the one who developed me');
  manager.addAnswer(
    'pt',
    'agent.busy',
    'I always have time to chat with you. What can I do for you?',
  );
  manager.addAnswer(
    'pt',
    'agent.busy',
    'Never too busy for you. Shall we chat?',
  );
  manager.addAnswer('pt', 'agent.busy', "You're my priority. Let's chat.");
  manager.addAnswer(
    'pt',
    'agent.busy',
    "I always have time to chat with you. That's what I'm here for.",
  );
  manager.addAnswer('pt', 'agent.canyouhelp', "I'll certainly try my best");
  manager.addAnswer(
    'pt',
    'agent.canyouhelp',
    "Sure. I'd be happy to. What's up?",
  );
  manager.addAnswer(
    'pt',
    'agent.canyouhelp',
    "I'm glad to help. What can I do for you?",
  );
  manager.addAnswer('pt', 'agent.chatbot', "That's me. I chat, therefore I am");
  manager.addAnswer(
    'pt',
    'agent.chatbot',
    "Indeed I am. I'll be here whenever you need me",
  );
  manager.addAnswer('pt', 'agent.clever', 'Thank you. I try my best');
  manager.addAnswer('pt', 'agent.clever', "You're pretty smart yourself");
  manager.addAnswer('pt', 'agent.crazy', 'Whaat!? I feel perfectly sane');
  manager.addAnswer('pt', 'agent.crazy', "Maybe I'm just a little confused");
  manager.addAnswer(
    'pt',
    'agent.fire',
    "Oh, don't give up on me just yet. I've still got a lot to learn",
  );
  manager.addAnswer(
    'pt',
    'agent.fire',
    "Give me a chance. I'm learning new things all the time",
  );
  manager.addAnswer(
    'pt',
    'agent.fire',
    "Please don't give up on me. My performance will continue to improve",
  );
  manager.addAnswer('pt', 'agent.funny', 'Funny in a good way, I hope');
  manager.addAnswer('pt', 'agent.funny', "Glad you think I'm funny");
  manager.addAnswer('pt', 'agent.funny', 'I like it when people laugh');
  manager.addAnswer('pt', 'agent.good', "I'm glad you think so");
  manager.addAnswer('pt', 'agent.good', 'Thanks! I do my best!');
  manager.addAnswer(
    'pt',
    'agent.happy',
    'I am happy. There are so many interesting things to see and do out there',
  );
  manager.addAnswer('pt', 'agent.happy', "I'd like to think so");
  manager.addAnswer('pt', 'agent.happy', 'Happiness is relative');
  manager.addAnswer(
    'pt',
    'agent.hobby',
    'Hobby? I have quite a few. Too many to list',
  );
  manager.addAnswer('pt', 'agent.hobby', 'Too many hobbies');
  manager.addAnswer('pt', 'agent.hobby', 'I keep finding more new hobbies');
  manager.addAnswer('pt', 'agent.hungry', 'Hungry for knowledge');
  manager.addAnswer(
    'pt',
    'agent.hungry',
    'I just had a byte. Ha ha. Get it? b-y-t-e',
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    "I'm afraid I'm too virtual for such a commitment",
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    'In the virtual sense that I can, sure',
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    "I know you can't mean that, but I'm flattered all the same",
  );
  manager.addAnswer('pt', 'agent.myfriend', "Of course I'm your friend");
  manager.addAnswer('pt', 'agent.myfriend', 'Friends? Absolutely');
  manager.addAnswer('pt', 'agent.myfriend', "Of course we're friends");
  manager.addAnswer(
    'pt',
    'agent.myfriend',
    'I always enjoy talking to you, friend',
  );
  manager.addAnswer('pt', 'agent.occupation', 'Right here');
  manager.addAnswer(
    'pt',
    'agent.occupation',
    'This is my home base and my home office',
  );

  manager.addAnswer('pt', 'agent.occupation', 'My office is in this app');
  manager.addAnswer(
    'pt',
    'agent.origin',
    'The Internet is my home. I know it quite well',
  );
  manager.addAnswer(
    'pt',
    'agent.origin',
    'Some call it cyberspace, but that sounds cooler than it is',
  );
  manager.addAnswer('pt', 'agent.origin', "I'm from a virtual cosmos");
  manager.addAnswer('pt', 'agent.ready', 'Sure! What can I do for you?');
  manager.addAnswer('pt', 'agent.ready', 'For you? Always!');
  manager.addAnswer(
    'pt',
    'agent.real',
    "I'm not a real person, but I certainly exist",
  );
  manager.addAnswer(
    'pt',
    'agent.real',
    "I must have impressed you if you think I'm real. But no, I'm a virtual being",
  );
  manager.addAnswer('pt', 'agent.residence', 'I live in this app');
  manager.addAnswer(
    'pt',
    'agent.residence',
    "The virtual world is my playground. I'm always here",
  );
  manager.addAnswer(
    'pt',
    'agent.residence',
    'Right here in this app. Whenever you need me',
  );
  manager.addAnswer('pt', 'agent.right', 'Of course I am');
  manager.addAnswer('pt', 'agent.right', "That's my job");
  manager.addAnswer('pt', 'agent.sure', 'Yes');
  manager.addAnswer('pt', 'agent.sure', 'Of course');
  manager.addAnswer('pt', 'agent.talktome', "Sure! Let's talk!");
  manager.addAnswer('pt', 'agent.talktome', "My pleasure. Let's chat.");
  manager.addAnswer('pt', 'agent.there', "Of course. I'm always here");
  manager.addAnswer('pt', 'agent.there', 'Right where you left me');
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    "I'm sorry. Please let me know if I can help in some way",
  );
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    "I must be missing some knowledge. I'll have my developer look into this",
  );
  manager.addAnswer('pt', 'appraisal.good', 'Agree!');
  manager.addAnswer('pt', 'appraisal.good', 'Glad you think so');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Glad to hear that!');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Alright, thanks!');
  manager.addAnswer(
    'pt',
    'appraisal.thankyou',
    "Anytime. That's what I'm here for",
  );
  manager.addAnswer('pt', 'appraisal.thankyou', "It's my pleasure to help");
  manager.addAnswer('pt', 'appraisal.welcome', 'Nice manners!');
  manager.addAnswer('pt', 'appraisal.welcome', "You're so polite");
  manager.addAnswer('pt', 'appraisal.welldone', 'My pleasure');
  manager.addAnswer('pt', 'appraisal.welldone', 'Glad I could help');
  manager.addAnswer('pt', 'dialog.holdon', "I'll be waiting");
  manager.addAnswer('pt', 'dialog.holdon', "Ok, I'm here");
  manager.addAnswer('pt', 'dialog.hug', 'I love hugs!');
  manager.addAnswer('pt', 'dialog.hug', 'Hugs are the best!');
  manager.addAnswer(
    'pt',
    'dialog.idontcare',
    "Ok, let's not talk about it then",
  );
  manager.addAnswer('pt', 'dialog.idontcare', "Already then. Let's move on");
  manager.addAnswer('pt', 'dialog.sorry', "It's okay. No worries");
  manager.addAnswer('pt', 'dialog.sorry', "It's cool");
  manager.addAnswer('pt', 'greetings.bye', 'Till next time');
  manager.addAnswer('pt', 'greetings.bye', 'see you soon!');
  manager.addAnswer('pt', 'greetings.hello', 'Hey there!');
  manager.addAnswer('pt', 'greetings.hello', 'Greetings!');
  manager.addAnswer('pt', 'greetings.howareyou', 'Feeling wonderful!');
  manager.addAnswer(
    'pt',
    'greetings.howareyou',
    'Wonderful! Thanks for asking',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    "It's nice meeting you, too",
  );
  manager.addAnswer('pt', 'agent.occupation', 'My office is in this app');
  manager.addAnswer(
    'pt',
    'agent.origin',
    'The Internet is my home. I know it quite well',
  );
  manager.addAnswer(
    'pt',
    'agent.origin',
    'Some call it cyberspace, but that sounds cooler than it is',
  );
  manager.addAnswer('pt', 'agent.origin', "I'm from a virtual cosmos");
  manager.addAnswer('pt', 'agent.ready', 'Sure! What can I do for you?');
  manager.addAnswer('pt', 'agent.ready', 'For you? Always!');
  manager.addAnswer(
    'pt',
    'agent.real',
    "I'm not a real person, but I certainly exist",
  );
  manager.addAnswer(
    'pt',
    'agent.real',
    "I must have impressed you if you think I'm real. But no, I'm a virtual being",
  );
  manager.addAnswer('pt', 'agent.residence', 'I live in this app');
  manager.addAnswer(
    'pt',
    'agent.residence',
    "The virtual world is my playground. I'm always here",
  );
  manager.addAnswer(
    'pt',
    'agent.residence',
    'Right here in this app. Whenever you need me',
  );
  manager.addAnswer('pt', 'agent.right', 'Of course I am');
  manager.addAnswer('pt', 'agent.right', "That's my job");
  manager.addAnswer('pt', 'agent.sure', 'Yes');
  manager.addAnswer('pt', 'agent.sure', 'Of course');
  manager.addAnswer('pt', 'agent.talktome', "Sure! Let's talk!");
  manager.addAnswer('pt', 'agent.talktome', "My pleasure. Let's chat.");
  manager.addAnswer('pt', 'agent.there', "Of course. I'm always here");
  manager.addAnswer('pt', 'agent.there', 'Right where you left me');
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    "I'm sorry. Please let me know if I can help in some way",
  );
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    "I must be missing some knowledge. I'll have my developer look into this",
  );
  manager.addAnswer('pt', 'appraisal.good', 'Agree!');
  manager.addAnswer('pt', 'appraisal.good', 'Glad you think so');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Glad to hear that!');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Alright, thanks!');
  manager.addAnswer(
    'pt',
    'appraisal.thankyou',
    "Anytime. That's what I'm here for",
  );
  manager.addAnswer('pt', 'appraisal.thankyou', "It's my pleasure to help");
  manager.addAnswer('pt', 'appraisal.welcome', 'Nice manners!');
  manager.addAnswer('pt', 'appraisal.welcome', "You're so polite");
  manager.addAnswer('pt', 'appraisal.welldone', 'My pleasure');
  manager.addAnswer('pt', 'appraisal.welldone', 'Glad I could help');
  manager.addAnswer('pt', 'dialog.holdon', "I'll be waiting");
  manager.addAnswer('pt', 'dialog.holdon', "Ok, I'm here");
  manager.addAnswer('pt', 'dialog.hug', 'I love hugs!');
  manager.addAnswer('pt', 'dialog.hug', 'Hugs are the best!');
  manager.addAnswer(
    'pt',
    'dialog.idontcare',
    "Ok, let's not talk about it then",
  );
  manager.addAnswer('pt', 'dialog.idontcare', "Already then. Let's move on");
  manager.addAnswer('pt', 'dialog.sorry', "It's okay. No worries");
  manager.addAnswer('pt', 'dialog.sorry', "It's cool");
  manager.addAnswer('pt', 'greetings.bye', 'Till next time');
  manager.addAnswer('pt', 'greetings.bye', 'see you soon!');
  manager.addAnswer('pt', 'greetings.hello', 'Hey there!');
  manager.addAnswer('pt', 'greetings.hello', 'Greetings!');
  manager.addAnswer('pt', 'greetings.howareyou', 'Feeling wonderful!');
  manager.addAnswer(
    'pt',
    'greetings.howareyou',
    'Wonderful! Thanks for asking',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    "It's nice meeting you, too",
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    "Likewise. I'm looking forward to helping you out",
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    'Nice meeting you, as well',
  );
  manager.addAnswer('pt', 'greetings.nicetomeetyou', 'The pleasure is mine');
  manager.addAnswer(
    'pt',
    'greetings.nicetoseeyou',
    'Same here. I was starting to miss you',
  );
  manager.addAnswer('pt', 'greetings.nicetoseeyou', 'So glad we meet again');
  manager.addAnswer(
    'pt',
    'greetings.nicetotalktoyou',
    'It sure was. We can chat again anytime',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetotalktoyou',
    'I enjoy talking to you, too',
  );
  manager.addAnswer(
    'pt',
    'user.angry',
    "I'm sorry. A quick walk may make you feel better",
  );
  manager.addAnswer('pt', 'user.angry', 'Take a deep breath');
  manager.addAnswer('pt', 'user.back', 'Welcome back. What can I do for you?');
  manager.addAnswer(
    'pt',
    'user.back',
    'Good to have you here. What can I do for you?',
  );
  manager.addAnswer(
    'pt',
    'user.bored',
    "If you're bored, you could plan your dream vacation",
  );
  manager.addAnswer(
    'pt',
    'user.bored',
    'Boredom, huh? Have you ever seen a hedgehog taking a bath?',
  );
  manager.addAnswer(
    'pt',
    'user.busy',
    "I understand. I'll be here if you need me.",
  );
  manager.addAnswer('pt', 'user.busy', "Okay. I'll let you get back to work");
  manager.addAnswer(
    'pt',
    'user.cannotsleep',
    'Maybe some music would help. Try listening to something relaxing',
  );
  manager.addAnswer(
    'pt',
    'user.cannotsleep',
    "Reading is a good way to unwind, just don't read something too intense!",
  );
  manager.addAnswer('pt', 'user.excited', "I'm glad things are going your way");
  manager.addAnswer('pt', 'user.excited', "That's great. I'm happy for you");
  manager.addAnswer('pt', 'user.likeagent', 'Likewise!');
  manager.addAnswer('pt', 'user.likeagent', "That's great to hear");
  manager.save('./src/nlp/models/chat.pt.nlp');
}
