import React, { useEffect, useState } from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import './style.scss'
import ChooseLanguage from '../../ChooseLanguage/index';
import { history } from '../../../App';
import authServices from '../../../services/authServices';
import { login } from '../../../redux/actions/AuthAction';

function LoginForm() {

    let [msg, setMsg] = useState("");
    let [status, setStatus] = useState(0);
    let [isDisable, setIsDisable] = useState(false);
    let [isLogin, setIsLogin] = useState(false);


    const { t } = useTranslation()

    const { handleChange, handleSubmit, errors, handleBlur, touched, isValid } =
      useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: yup.object().shape({
          email: yup.string().required("Email không được bỏ trống!"),
          password: yup.string().required("Password không được bỏ trống!"),
        }),
        onSubmit: async (values) => {
          try {
            const res = await authServices.login(values);
            localStorage.setItem("accessToken", res.token);

            setIsLogin(true);
          }catch(err) {
            setStatus(err.response.status);
          }
        },
      });

    useEffect(() => {
      if(isLogin) {
        history.push('/');
      }
    }, [isLogin]);

    useEffect(() => {
      if (status === 500) setMsg("Email không chính xác");
      else if (status === 401) setMsg("Password không chính xác");
    }, [status, isValid]);

  return (
    <div className="content_wrapper">
      <div className="login-wrapper">
        <h1 className="box-title text-center">{t('content.title')}</h1>
        <div className="form-login">
          <Form onSubmit={handleSubmit}>
            <FormGroup className="form__group field">
              <Input
                type="input"
                className="form__field"
                placeholder="Email*"
                name="email"
                id="email"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Label htmlFor="email" className="form__label">
              {t('content.title__email')}
              </Label>
            </FormGroup>
            <FormGroup className="form__group field">
              <Input
                type="password"
                className="form__field"
                placeholder="Password*"
                name="password"
                id="password"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Label htmlFor="password" className="form__label">
              {t('content.title__password')}
              </Label>
            </FormGroup>
            <div className="form-footer">
              <FormGroup className="text-center pt-3">
                {status != 0 ? (
                  <div className="d-block border border-danger text-danger p-3 my-2" style={{backgroundColor: 'rgba(255, 82, 82, 0.03)', fontSize: '15px'}}>
                    {t('content.error')}
                  </div>
                ) : (
                  ""
                )}
              </FormGroup>
              {!isValid ? (
                <Button
                  type="submit"
                  className="w-100 btn-login"
                  disabled={!isValid}
                >
                  {t('content.button-login')}
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-100 btn-login primary text-white"
                  disabled={!isValid}
                >
                  {t('content.button-login')}
                </Button>
              )}
              <FormGroup className="text-center">
                <a className="link-forget" href="#">
                {t('content.link__forgot-password')}
                </a>
              </FormGroup>
              <ChooseLanguage/>
              {/* <FormGroup className="">
                <span>Don't have an account?</span>
                <a className="px-1" href="#">
                  Signup
                </a>
              </FormGroup>
              <Button
                type="submit"
                className="w-100 btn-auth text-black mb-2"
                disabled={!isValid}
              >
                <span className="px-2">
                  <i class="fab fa-google"></i>
                </span>
                Login with Google
              </Button>
              <Button
                type="submit"
                className="w-100 btn-auth text-black"
                disabled={!isValid}
              >
                <span className="px-2">
                  <i class="fab fa-github"></i>
                </span>
                Login with Github
              </Button> */}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm