import React, { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import Button from '../buttons/button';
import { SplitWrapper } from './content';
import UserForm from './userForm';
import CardForm from './cardForm';
import CheckIcon from '../icons/checkIcon';
import CloseIcon from '../icons/closeIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorSchema } from '../../validations/formValidation';
import FormDialog from '../dialog/formDialog';
import ToggleMuiButton from '../buttons/toggleButton';
import { amexCard, cardType, discoverCard, formKeys, visaCard } from '../../helpers/helpers';
import TextField from '../inputs/textField';

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({ ...methods });
};

export const Form = () => {
  const [first, setFirst] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [btn, setBtn] = useState(true);
  const [status, setStatus] = useState([]);

  const methods = useForm({
    resolver: yupResolver(errorSchema),
  });

  const {
    reset,
    formState,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  let cardErr = '';
  let userErr = '';

  Object.keys(errors).forEach((key) => {
    if (formKeys.card.indexOf(key) > -1) {
      cardErr = key.length;
    } else if (formKeys.user.indexOf(key) > -1) {
      userErr = key.length;
    }
  });

  const submitForm = async (data) => {
    const cardNumber = data.cardNumber.replaceAll(' • ', '');
    data['cardNumber'] = cardNumber;
    data['cardType'] =
      (cardType(cardNumber) ? 'MASTERCARD' : visaCard(cardNumber) ? 'VISA' : '') ||
      (amexCard(cardNumber) ? 'AMEX' : discoverCard(cardNumber) ? 'DISCOVER' : '');
    console.log(data);
    alert(JSON.stringify(data));

    setStatus('Successfully Registered!');
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        cardNumber: '',
      });
      // setStatus('');
    }
  }, [formState, reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
        <>
          <div style={{ display: first ? 'none' : null, marginTop: 15 }}>
            <ConnectForm>
              {({ register }) => (
                <TextField
                  variant="filled"
                  label="Email"
                  {...register('email', {
                    onChange: (e) =>
                      setBtn(e.target.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) ? false : true),
                  })}
                  error={errors.email?.message ? true : false}
                  helperText={errors.email?.message}
                />
              )}
            </ConnectForm>
            <Button
              sx={{ mt: 2.5 }}
              disabled={btn}
              variant="contained"
              onClick={() => (Object.keys(errors).length === 0 ? setFirst(true) : null)}
            >
              Next
            </Button>
          </div>
          <div style={{ display: first ? null : 'none' }}>
            <SplitWrapper>
              <ToggleMuiButton value="Card Details" selected={!isActive} onClick={() => setIsActive(!isActive)}>
                Card Details
                {cardErr.length === 0 ? <CheckIcon /> : <CloseIcon />}
              </ToggleMuiButton>
              <ToggleMuiButton value="User Info" selected={isActive} onClick={() => setIsActive(!isActive)}>
                User Details
                {userErr.length === 0 ? <CheckIcon /> : <CloseIcon />}
              </ToggleMuiButton>
            </SplitWrapper>
            {isActive ? <UserForm errors={errors} /> : <CardForm errors={errors} />}
            <Button
              sx={{ mt: 1.5 }}
              disabled={(Object.keys(errors).length === 0 ? false : true) || (!status ? true : false)}
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </div>
        </>
      </form>
      {status ? <FormDialog status={status} /> : null}
    </FormProvider>
  );
};
