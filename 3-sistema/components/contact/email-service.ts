import emailjs from 'emailjs-com';

interface EmailParams extends Record<string, unknown>{
  from_name: string;
  from_email: string;
  phone: string;
  source: string; // onde nos conheceu
  budget: string;
  message: string;
  type: string; // "sistema web", "aplicativo", etc.
}

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const initializeEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}; 