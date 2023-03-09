import React from 'react';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { useAppState } from '../../context/formContext';
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/button';
import TextField from '../inputs/textField';
import { Grid } from '@mui/material';
import { BorderGradient, ContentWrapper } from './content';
import { yupResolver } from '@hookform/resolvers/yup';
import { errorSchema } from '../../validations/formValidation';
import { secondErrorSchema } from '../../validations/secondValidation';
import { formData } from '../../api/sampleData';

export const Wrapper = styled('div')({});

const SecondStep = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: 'onSubmit', resolver: yupResolver(secondErrorSchema) });

  const navigate = useNavigate();

  const saveData = (data) => {
    console.log(data);
    setState({ ...state, ...data });
    alert(JSON.stringify(state));

    navigate('/casino');
  };
  return (
    <Grid sx={{ mt: 5 }} container alignItems="center" justifyContent="center">
      <Wrapper>
        <BorderGradient>
          <ContentWrapper>
            <form onSubmit={handleSubmit(saveData)}>
              {formData.fields &&
                formData.fields.map((value, key) => {
                  if (value.step === 2) {
                    console.log(value.code);
                    return (
                      <TextField
                        sx={{ mb: 3 }}
                        type="text"
                        variant="filled"
                        label={value.name}
                        {...register(value.code)}
                        error={errors[value.code] ? true : false}
                        helperText={errors[value.code]?.message}
                        key={key}
                      />
                    );
                  }
                })}

              <Button sx={{ mt: 1.5 }} variant="contained" type="submit">
                Register
              </Button>
            </form>
          </ContentWrapper>
        </BorderGradient>
      </Wrapper>
    </Grid>
  );
};

export default SecondStep;
