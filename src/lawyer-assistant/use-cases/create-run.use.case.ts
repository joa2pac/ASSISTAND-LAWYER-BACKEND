/* eslint-disable prettier/prettier */
import OpenAI from 'openai';

interface Options {
  threadId: string;
  assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
  const { threadId, assistantId = 'asst_ltvhc11TonqZENs4Ve7KyCoz' } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    // instructions: sobreescribe al assistente
  });

  console.log({ run });

  return run;
};
