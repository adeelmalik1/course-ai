import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import CustomButton from '../shared/chakraButton/ChakraButton';
import FormikField from '../shared/FormikField/FormikField';
import NavLink from '../shared/NavLink/NavLink';

import s from './LoginForm.module.scss';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  return (
    <Flex className={s.loginContainer}>
      <Flex className={s.loginflex}>
        <Heading className={s.login_text}>Login</Heading>
        <Formik initialValues={initialValues} onSubmit={() => console.log('submitted')}>
          {({ isSubmitting }) => (
            <Form className={s.form_container}>
              <FormikField name="email" label="Email" type="text" />
              <FormikField name="password" label="Password" type="password" />
              <Flex justify="center" pb={5}>
                <CustomButton
                  width={'100%'}
                  onClick={() => console.log('')}
                  variant={'primary'}
                  mt={6}
                  isLoading={isSubmitting}
                  disabled={true}
                  type="submit"
                >
                  Login
                </CustomButton>
              </Flex>
              <Stack alignItems="center">
                <Stack className={s._stackContainer}>
                  <Flex className={s.iconContainer} mt={2}>
                    <FaGoogle data-testid="social-icon" color="#DB4437" size={20} />
                  </Flex>
                  <Flex className={s.iconContainer}>
                    <FaFacebook data-testid="social-icon" color="#3B5998" size={20} />
                  </Flex>
                  <Flex className={s.iconContainer}>
                    <FaInstagram data-testid="social-icon" color="#E1306C" size={20} />
                  </Flex>
                  <Flex className={s.iconContainer}>
                    <FaLinkedin data-testid="social-icon" color="#0E76A8" size={20} />
                  </Flex>
                </Stack>
              </Stack>
              <Flex className={s.textContainer}>
                <Text>Don't have an account yet?</Text>
                <NavLink fontWeight="bold" href="/signup" color={'blackAlpha.900'}>
                  Signup
                </NavLink>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
