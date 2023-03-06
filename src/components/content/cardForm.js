import React from 'react';
import TextField from '../inputs/textField';
import CardField from '../inputs/cardField';
import { styled } from '@mui/material/styles';
import { ccFormat, edFormat } from '../../helpers/helpers';
import { ConnectForm } from './form';
import { InputAdornment } from '@mui/material';
import { cardType, visaCard, amexCard, discoverCard } from '../../helpers/helpers';
import MasterCard from '../icons/masterCard';
import VisaCard from '../icons/visaCard';
import { InputDiv } from './userForm';
import DiscoverCard from '../icons/discoverCard';
import AmexCard from '../icons/amexCard';

const SplitWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '24px',
});

const CardForm = ({ errors }) => {
  return (
    <ConnectForm>
      {({ register, setValue, watch }) => (
        <>
          <CardField
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  {(cardType(watch('cardNumber')) ? (
                    <MasterCard />
                  ) : visaCard(watch('cardNumber')) ? (
                    <VisaCard />
                  ) : null) ||
                    (amexCard(watch('cardNumber')) ? (
                      <AmexCard />
                    ) : discoverCard(watch('cardNumber')) ? (
                      <DiscoverCard />
                    ) : null)}
                </InputAdornment>
              ),
            }}
            sx={{ mt: 3 }}
            type="text"
            label="Card Number"
            variant="filled"
            {...register('cardNumber', {
              onChange: (e) => {
                const value = ccFormat(e.target.value);
                setValue('cardNumber', value);
              },
            })}
            error={errors.cardNumber?.message ? true : false}
            helperText={errors.cardNumber?.message}
          />
          <TextField
            sx={{ mt: 3 }}
            type="text"
            variant="filled"
            label="Holder Name"
            error={errors.cardName?.message ? true : false}
            helperText={errors.cardName?.message}
            {...register('cardName')}
          />
          <SplitWrapper>
            <InputDiv>
              <TextField
                variant="filled"
                label="Expiry Date"
                error={errors.expiryDate?.message ? true : false}
                helperText={errors.expiryDate?.message}
                {...register('expiryDate', {
                  onChange: (e) => {
                    const value = edFormat(e.target.value);
                    setValue('expiryDate', value);
                  },
                })}
              />
            </InputDiv>
            <div>
              <TextField
                sx={{ mb: 2 }}
                type="text"
                variant="filled"
                label="CVV Number"
                error={errors.cvv?.message ? true : false}
                helperText={errors.cvv?.message}
                {...register('cvv')}
              />
            </div>
          </SplitWrapper>
        </>
      )}
    </ConnectForm>
  );
};

export default CardForm;
