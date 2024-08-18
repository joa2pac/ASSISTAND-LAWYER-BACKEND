/* eslint-disable prettier/prettier */
import OpenAI from 'openai';

interface Options {
  threadId: string;
  assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {
  const { threadId, assistantId = 'asst_lqPjnjbQyDF6fL9VjYbE6D7B' } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    // instructions: sobreescribe al assistente
  });

  console.log({ run });

  return run;
};
