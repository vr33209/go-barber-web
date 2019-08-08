import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";

import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";

import Logo from "~/assests/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email valido !")
    .required("E-mail é obrigatorio !"),
  password: Yup.string().required("Senha é obrigatorio!")
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
