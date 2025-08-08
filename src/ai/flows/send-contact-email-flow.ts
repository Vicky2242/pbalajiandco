'use server';
/**
 * @fileOverview A flow for sending a contact form email.
 *
 * - sendContactEmail - A function that handles sending the contact form data.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the person.'),
  phone: z.string().describe('The phone number of the person.'),
  service: z.string().describe('The service the person is interested in.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<{success: boolean}> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.object({success: z.boolean()}),
  },
  async (input) => {
    // In a real application, you would integrate an email sending service here.
    // For example, using a library like Nodemailer with a service like SendGrid or Postmark.
    console.log('Simulating sending email with the following data:');
    console.log(JSON.stringify(input, null, 2));
    
    // For now, we'll just simulate a successful email send.
    return {success: true};
  }
);
