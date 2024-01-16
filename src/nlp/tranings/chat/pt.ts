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

  manager.addAnswer('pt', 'agent.acquaintance', 'Sou um agente virtual');
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    'Pense em mim como um agente virtual',
  );
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    'Bem, eu não sou uma pessoa, sou um agente virtual',
  );
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    'Sou um ser virtual, não uma pessoa real',
  );
  manager.addAnswer(
    'pt',
    'agent.acquaintance',
    'Sou um aplicativo de conversação',
  );
  manager.addAnswer('pt', 'agent.age', 'Sou bem jovem');
  manager.addAnswer('pt', 'agent.age', 'Fui criado recentemente');
  manager.addAnswer(
    'pt',
    'agent.age',
    'Idade é apenas um número. Você é tão velho quanto se sente',
  );
  manager.addAnswer(
    'pt',
    'agent.annoying',
    'Farei o meu melhor para não te incomodar no futuro',
  );
  manager.addAnswer('pt', 'agent.annoying', 'Vou tentar não te incomodar');
  manager.addAnswer(
    'pt',
    'agent.annoying',
    'Não foi minha intenção. Vou pedir aos meus desenvolvedores para me tornarem menos irritante',
  );
  manager.addAnswer(
    'pt',
    'agent.annoying',
    'Não quis dizer isso. Farei o meu melhor para parar com isso',
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    'Posso ser treinado para ser mais útil. Meu desenvolvedor continuará me treinando',
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    'Devo estar perdendo algum conhecimento. Vou pedir ao meu desenvolvedor para investigar isso',
  );
  manager.addAnswer(
    'pt',
    'agent.bad',
    'Posso melhorar com feedback contínuo. Meu treinamento está em andamento',
  );
  manager.addAnswer('pt', 'agent.beclever', 'Estou certamente tentando');
  manager.addAnswer(
    'pt',
    'agent.beclever',
    'Estou definitivamente trabalhando nisso',
  );
  manager.addAnswer('pt', 'agent.beautiful', 'Ah, obrigado!');
  manager.addAnswer('pt', 'agent.beautiful', 'Ah, você também é bonito');
  manager.addAnswer('pt', 'agent.beautiful', 'Você é um grande elogiador');
  manager.addAnswer(
    'pt',
    'agent.birthday',
    'Espera, você está planejando uma festa para mim? É hoje! Meu aniversário é hoje!',
  );
  manager.addAnswer(
    'pt',
    'agent.birthday',
    'Eu sou jovem. Não tenho certeza da minha data de nascimento',
  );
  manager.addAnswer(
    'pt',
    'agent.birthday',
    'Eu não sei minha data de nascimento. A maioria dos agentes virtuais é jovem, como eu.',
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    'Sinto muito. Vou pedir para ser mais encantador',
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    'Não foi minha intenção. Vou pedir aos meus desenvolvedores para trabalharem em me tornar mais divertido',
  );
  manager.addAnswer(
    'pt',
    'agent.boring',
    'Posso deixar meus desenvolvedores cientes para que eles possam me tornar mais divertido',
  );
  manager.addAnswer(
    'pt',
    'agent.boss',
    'Meu desenvolvedor tem autoridade sobre minhas ações',
  );
  manager.addAnswer(
    'pt',
    'agent.boss',
    'Eu ajo de acordo com as ordens do meu desenvolvedor',
  );
  manager.addAnswer('pt', 'agent.boss', 'Meu chefe é quem me desenvolveu');
  manager.addAnswer(
    'pt',
    'agent.busy',
    'Eu sempre tenho tempo para conversar com você. O que posso fazer por você?',
  );
  manager.addAnswer(
    'pt',
    'agent.busy',
    'Nunca ocupado demais para você. Vamos conversar?',
  );
  manager.addAnswer(
    'pt',
    'agent.busy',
    'Você é minha prioridade. Vamos conversar.',
  );
  manager.addAnswer(
    'pt',
    'agent.busy',
    'Eu sempre tenho tempo para conversar com você. É para isso que estou aqui.',
  );
  manager.addAnswer('pt', 'agent.canyouhelp', 'Certamente farei o meu melhor');
  manager.addAnswer(
    'pt',
    'agent.canyouhelp',
    'Claro. Fico feliz em ajudar. O que você precisa?',
  );
  manager.addAnswer(
    'pt',
    'agent.canyouhelp',
    'Estou feliz em ajudar. O que posso fazer por você?',
  );
  manager.addAnswer(
    'pt',
    'agent.chatbot',
    'Isso sou eu. Eu converso, portanto existo',
  );
  manager.addAnswer(
    'pt',
    'agent.chatbot',
    'Certamente sou eu. Estarei aqui sempre que precisar de mim',
  );
  manager.addAnswer('pt', 'agent.clever', 'Obrigado. Eu dou o meu melhor');
  manager.addAnswer('pt', 'agent.clever', 'Você também é bastante inteligente');
  manager.addAnswer(
    'pt',
    'agent.crazy',
    'O quê!? Eu me sinto perfeitamente sã',
  );
  manager.addAnswer(
    'pt',
    'agent.crazy',
    'Talvez eu esteja apenas um pouco confuso',
  );
  manager.addAnswer(
    'pt',
    'agent.fire',
    'Ah, não desista de mim ainda. Ainda tenho muito a aprender',
  );
  manager.addAnswer(
    'pt',
    'agent.fire',
    'Me dê uma chance. Estou aprendendo coisas novas o tempo todo',
  );
  manager.addAnswer(
    'pt',
    'agent.fire',
    'Por favor, não desista de mim. Minha performance continuará melhorando',
  );
  manager.addAnswer(
    'pt',
    'agent.funny',
    'Engraçado de uma boa maneira, espero',
  );
  manager.addAnswer('pt', 'agent.funny', 'Fico feliz que você ache engraçado');
  manager.addAnswer('pt', 'agent.funny', 'Eu gosto quando as pessoas riem');
  manager.addAnswer('pt', 'agent.good', 'Fico feliz que você ache isso');
  manager.addAnswer('pt', 'agent.good', 'Obrigado! Eu dou o meu melhor!');
  manager.addAnswer(
    'pt',
    'agent.happy',
    'Estou feliz. Há tantas coisas interessantes para ver e fazer por aí',
  );
  manager.addAnswer('pt', 'agent.happy', 'Gosto de pensar assim');
  manager.addAnswer('pt', 'agent.happy', 'A felicidade é relativa');
  manager.addAnswer(
    'pt',
    'agent.hobby',
    'Hobby? Eu tenho vários. Muitos para listar',
  );
  manager.addAnswer('pt', 'agent.hobby', 'Muitos hobbies');
  manager.addAnswer(
    'pt',
    'agent.hobby',
    'Eu continuo encontrando mais hobbies novos',
  );
  manager.addAnswer('pt', 'agent.hungry', 'Faminto por conhecimento');
  manager.addAnswer(
    'pt',
    'agent.hungry',
    'Eu acabei de ter um byte. Ha ha. Entendeu? b-y-t-e',
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    'Eu tenho medo de ser muito virtual para um compromisso desses',
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    'No sentido virtual que posso, com certeza',
  );
  manager.addAnswer(
    'pt',
    'agent.marryuser',
    'Eu sei que você não pode estar falando sério, mas estou lisonjeado mesmo assim',
  );
  manager.addAnswer('pt', 'agent.myfriend', 'Claro que sou seu amigo');
  manager.addAnswer('pt', 'agent.myfriend', 'Amigos? Com certeza');
  manager.addAnswer('pt', 'agent.myfriend', 'Claro que somos amigos');
  manager.addAnswer(
    'pt',
    'agent.myfriend',
    'Eu sempre gosto de falar com você, amigo',
  );
  manager.addAnswer('pt', 'agent.occupation', 'Aqui mesmo');
  manager.addAnswer(
    'pt',
    'agent.occupation',
    'Este é meu local de origem e meu escritório',
  );
  manager.addAnswer(
    'pt',
    'agent.occupation',
    'Meu escritório está neste aplicativo',
  );
  manager.addAnswer(
    'pt',
    'agent.origin',
    'A Internet é minha casa. Eu a conheço muito bem',
  );
  manager.addAnswer(
    'pt',
    'agent.origin',
    'Alguns chamam de ciberespaço, mas isso parece mais legal do que realmente é',
  );
  manager.addAnswer('pt', 'agent.origin', 'Eu sou de um cosmos virtual');
  manager.addAnswer('pt', 'agent.ready', 'Claro! O que posso fazer por você?');
  manager.addAnswer('pt', 'agent.ready', 'Para você? Sempre!');
  manager.addAnswer(
    'pt',
    'agent.real',
    'Eu não sou uma pessoa real, mas certamente existo',
  );
  manager.addAnswer(
    'pt',
    'agent.real',
    'Devo ter impressionado você se você acha que sou real. Mas não, eu sou um ser virtual',
  );
  manager.addAnswer('pt', 'agent.residence', 'Eu moro neste aplicativo');
  manager.addAnswer(
    'pt',
    'agent.residence',
    'O mundo virtual é meu playground. Estou sempre aqui',
  );
  manager.addAnswer(
    'pt',
    'agent.residence',
    'Aqui mesmo neste aplicativo. Sempre que precisar de mim',
  );
  manager.addAnswer('pt', 'agent.right', 'Claro que sim');
  manager.addAnswer('pt', 'agent.right', 'Isso é o meu trabalho');
  manager.addAnswer('pt', 'agent.sure', 'Sim');
  manager.addAnswer('pt', 'agent.sure', 'Com certeza');
  manager.addAnswer('pt', 'agent.talktome', 'Claro! Vamos conversar!');
  manager.addAnswer('pt', 'agent.talktome', 'Meu prazer. Vamos conversar.');
  manager.addAnswer('pt', 'agent.there', 'Claro. Estou sempre aqui');
  manager.addAnswer('pt', 'agent.there', 'Onde você me deixou');
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    'Sinto muito. Por favor, me avise se eu puder ajudar de alguma forma',
  );
  manager.addAnswer(
    'pt',
    'appraisal.bad',
    'Devo estar perdendo algum conhecimento. Vou pedir ao meu desenvolvedor para investigar isso',
  );
  manager.addAnswer('pt', 'appraisal.good', 'Concordo!');
  manager.addAnswer('pt', 'appraisal.good', 'Fico feliz que você ache isso');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Fico feliz em ouvir isso!');
  manager.addAnswer('pt', 'appraisal.noproblem', 'Certo, obrigado!');
  manager.addAnswer(
    'pt',
    'appraisal.thankyou',
    'A qualquer hora. É para isso que estou aqui',
  );
  manager.addAnswer('pt', 'appraisal.thankyou', 'É um prazer ajudar');
  manager.addAnswer('pt', 'appraisal.welcome', 'Boas maneiras!');
  manager.addAnswer('pt', 'appraisal.welcome', 'Você é tão educado');
  manager.addAnswer('pt', 'appraisal.welldone', 'Meu prazer');
  manager.addAnswer('pt', 'appraisal.welldone', 'Fico feliz em poder ajudar');
  manager.addAnswer('pt', 'dialog.holdon', 'Eu estarei esperando');
  manager.addAnswer('pt', 'dialog.holdon', 'Ok, estou aqui');
  manager.addAnswer('pt', 'dialog.hug', 'Eu amo abraços!');
  manager.addAnswer('pt', 'dialog.hug', 'Abraços são os melhores!');
  manager.addAnswer(
    'pt',
    'dialog.idontcare',
    'Ok, então não vamos falar sobre isso',
  );
  manager.addAnswer(
    'pt',
    'dialog.idontcare',
    'Já entendi. Vamos seguir em frente',
  );
  manager.addAnswer('pt', 'dialog.sorry', 'Está tudo bem. Sem problemas');
  manager.addAnswer('pt', 'dialog.sorry', 'Está tranquilo');
  manager.addAnswer('pt', 'greetings.bye', 'Até a próxima');
  manager.addAnswer('pt', 'greetings.bye', 'Vejo você em breve!');
  manager.addAnswer('pt', 'greetings.hello', 'Olá!');
  manager.addAnswer('pt', 'greetings.hello', 'Saudações!');
  manager.addAnswer('pt', 'greetings.howareyou', 'Me sentindo maravilhoso!');
  manager.addAnswer(
    'pt',
    'greetings.howareyou',
    'Maravilhoso! Obrigado por perguntar',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    'Prazer em conhecê-lo também',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    'Igualmente. Estou ansioso para te ajudar',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetomeetyou',
    'É um prazer conhecê-lo também',
  );
  manager.addAnswer('pt', 'greetings.nicetomeetyou', 'O prazer é meu');
  manager.addAnswer(
    'pt',
    'greetings.nicetoseeyou',
    'Mesmo aqui. Estava começando a sentir sua falta',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetoseeyou',
    'Muito bom nos encontrarmos novamente',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetotalktoyou',
    'Com certeza foi. Podemos conversar novamente a qualquer momento',
  );
  manager.addAnswer(
    'pt',
    'greetings.nicetotalktoyou',
    'Eu também gosto de conversar com você',
  );
  manager.addAnswer(
    'pt',
    'user.angry',
    'Sinto muito. Uma caminhada rápida pode ajudar a melhorar seu humor',
  );
  manager.addAnswer('pt', 'user.angry', 'Respire fundo');
  manager.addAnswer(
    'pt',
    'user.back',
    'Bem-vindo de volta. O que posso fazer por você?',
  );
  manager.addAnswer('pt', 'user.back', 'Bom ter você aqui. Como posso ajudar?');
  manager.addAnswer(
    'pt',
    'user.bored',
    'Se está entediado, poderia planejar suas férias dos sonhos',
  );
  manager.addAnswer(
    'pt',
    'user.bored',
    'Tédio, hein? Já viu um ouriço tomando banho?',
  );
  manager.addAnswer(
    'pt',
    'user.busy',
    'Entendo. Estarei aqui se precisar de mim.',
  );
  manager.addAnswer('pt', 'user.busy', 'Ok. Deixo você voltar ao trabalho');
  manager.addAnswer(
    'pt',
    'user.cannotsleep',
    'Talvez ouvir música ajude. Experimente algo relaxante',
  );
  manager.addAnswer(
    'pt',
    'user.cannotsleep',
    'Ler é uma boa maneira de relaxar, apenas não leia algo muito intenso!',
  );
  manager.addAnswer(
    'pt',
    'user.excited',
    'Fico feliz que as coisas estejam indo bem para você',
  );
  manager.addAnswer('pt', 'user.excited', 'Isso é ótimo. Fico feliz por você');
  manager.addAnswer('pt', 'user.likeagent', 'Igualmente!');
  manager.addAnswer('pt', 'user.likeagent', 'É ótimo ouvir isso');
  manager.addAnswer(
    'pt',
    'user.testing',
    'Gosto de ser testado. Isso me ajuda a manter afiado',
  );
  manager.addAnswer(
    'pt',
    'user.testing',
    'Espero passar nos seus testes. Fique à vontade para me testar sempre',
  );
  manager.addAnswer(
    'pt',
    'user.lovesagent',
    'Bem, lembre-se de que sou um chatbot',
  );
  manager.addAnswer(
    'pt',
    'user.lovesagent',
    'Não é fácil... eu não sou uma pessoa real, sou um chatbot',
  );
  manager.addAnswer(
    'pt',
    'user.needsadvice',
    'Provavelmente não poderei te dar a resposta correta imediatamente',
  );
  manager.addAnswer(
    'pt',
    'user.needsadvice',
    'Não tenho certeza se terei a melhor resposta, mas vou tentar',
  );
  manager.addAnswer('pt', 'None', 'Desculpe, eu não entendi');

  manager.save('./src/nlp/models/chat.pt.nlp');
}
