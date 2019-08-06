import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import Logo from "~/assests/logo.svg";
// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email valido !")
    .required("E-mail é obrigatorio !"),
  password: Yup.string().required("Senha é obrigatorio!")
});
export default function Signin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
