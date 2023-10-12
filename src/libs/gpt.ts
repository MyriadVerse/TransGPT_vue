// Interacting with the OpenAI GPT-3.5 Turbo model
import type { ChatMessage } from "@/types";

export async function chat(messageList: ChatMessage[], apiKey: string) {
  try {
    // Send a POST request to OpenAI’s API endpoint
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "post",
      // signal: AbortSignal.timeout(8000),
      // 开启后到达设定时间会中断流式输出
      headers: {
        "Content-Type": "application/json",
        // Use the apiKey provided by the formal parameter
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: messageList,
      }),
    });
    // Return the requested result
    return result;
  } catch (error) {
    throw error;
  }
}
