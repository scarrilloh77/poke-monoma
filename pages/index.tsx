import { useState } from 'react';
import * as SC from '@/styles/login.style';
import { Button } from '@/components/Button/Button';

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [watchPass, setWatchPass] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const dataToSingIn = {
    //   email: data.email.trim(),
    //   password: data.password,
    // };

    try {
      /*
      const res = await loginUser(dataToSingIn);
      login(res.token);
       */
      console.log('Bienvenido!');
    } catch (error) {
      console.log('Credenciales incorrectas!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWatchPass = () => {
    setWatchPass((prevState) => !prevState);
  };

  return (
    <SC.MainWrapper>
      <SC.FormWrapper onSubmit={handleSubmit}>
        <SC.InternWrapper>
          <span>Bienvenido</span>
          <SC.InputGroup>
            <SC.Input
              required
              name='email'
              type='email'
              spellCheck='false'
              autoComplete='off'
              placeholder='Correo'
              value={formData?.email}
              onChange={handleInputChange}
            />
            <SC.InputWrapper>
              <SC.Input
                required
                name='password'
                type={watchPass ? 'text' : 'password'}
                spellCheck='false'
                placeholder='Contraseña'
                value={formData?.password}
                onChange={handleInputChange}
              />
              {formData?.password && (
                <>
                  {watchPass ? (
                    <SC.OpenEyeIcon onClick={handleWatchPass} />
                  ) : (
                    <SC.CloseEyeIcon onClick={handleWatchPass} />
                  )}
                </>
              )}
            </SC.InputWrapper>
          </SC.InputGroup>
          <Button type='submit'>INICIAR SESIÓN</Button>
        </SC.InternWrapper>
      </SC.FormWrapper>
    </SC.MainWrapper>
  );
};

export default LoginPage;
