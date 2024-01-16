import trainingEnglish from './en';
import trainingPortuguese from './pt';

export async function trainChatModel(manager: any) {
  await trainingEnglish(manager);
  await trainingPortuguese(manager);
}
