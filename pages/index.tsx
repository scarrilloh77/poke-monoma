import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button/Button';
import * as SC from '@/styles/LoginPage.styles';
import { AuthContext } from '@/context';
import Image from 'next/image';
import Head from 'next/head';
import { Toast } from '@/components/Toast/Toast';

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);
  const [watchPass, setWatchPass] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginUser(formData.email.trim(), formData.password);
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
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
    <>
      <Head>
        <title>PokeMonoma</title>
      </Head>
      <SC.MainWrapper>
        <SC.FormWrapper onSubmit={handleSubmit}>
          <SC.InternWrapper>
            <div>
              <Image
                src='/assets/50.svg'
                height={160}
                width={160}
                alt='Welcome image'
              />
            </div>
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
        <Toast />
      </SC.MainWrapper>
    </>
  );
};

export default LoginPage;
