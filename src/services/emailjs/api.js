import emailjs from '@emailjs/browser';
import { emailjsConfig } from './config';

export const sendEmail = async (form) => {
  try {
    const email = await emailjs.send(
      emailjsConfig.serviceID,
      emailjsConfig.templateID,
      form,
      emailjsConfig.publicKey
    );

    if (email.text !== 'OK') throw Error;
  } catch (error) {
    throw new Error(error.message);
  }
};
