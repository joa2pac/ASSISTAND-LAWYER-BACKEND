/* eslint-disable prettier/prettier */
import OpenAI from 'openai';

interface Options {
  threadId: string;
  question: string;
}

export const createMessageUseCase = async (
  openai: OpenAI,
  { threadId, question }: Options,
) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: question,
  });

  //   console.log({ message });

  return message;
};
