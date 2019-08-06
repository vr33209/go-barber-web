import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import Logo from "~/assests/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email valido !")
    .required("E-mail é obrigatorio !"),
  name: Yup.string()
    .email("Insira um email valido !")
    .required("Nome é obrigatorio !"),
  password: Yup.string()
    .required("Senha é obrigatorio!")
    .min(6, "No minimo 6 caracteres!")
});

export default function Signin() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">já possuo conta</Link>
      </Form>
    </>
  );
}
