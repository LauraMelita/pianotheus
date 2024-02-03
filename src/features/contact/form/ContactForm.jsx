import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { useSendEmail } from '../../../services/reactQuery/queries';
import { contactValidation } from '../../../services/zod/validation';

import { Form } from '../../../components/UI/form/Form';
import TextInput from '../../../components/UI/form/elements/TextInput';
import TextAreaInput from '../../../components/UI/form/elements/TextAreaInput';
import Alert from '../../../components/UI/alert/Alert';
import SubmitButton from '../../../components/UI/form/elements/SubmitButton';

const ContactForm = ({ toggleModal }) => {
  const { mutateAsync: sendEmail } = useSendEmail();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactValidation),
  });

  const onSendEmail = async (formData) => {
    try {
      await sendEmail(formData);
      reset();
      toggleModal();
      toast.success('Thank you for reaching out!', {
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Form className='contact' onSubmit={handleSubmit(onSendEmail)}>
      <TextInput
        label='Name'
        type='text'
        name='name'
        register={register}
        errors={errors}
      />
      <TextInput
        label='Email'
        type='text'
        name='email'
        register={register}
        errors={errors}
      />
      <TextInput
        label='Subject'
        type='text'
        name='subject'
        register={register}
        errors={errors}
      />
      <TextAreaInput
        label='Message'
        name='message'
        rows={4}
        register={register}
        errors={errors}
      />
      <SubmitButton btnText='Send email' isSubmitting={isSubmitting} />
      <Alert severity='error'>{errors.root && errors.root.message}</Alert>
    </Form>
  );
};

export default ContactForm;
