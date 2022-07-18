import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  H1,
  Label,
  Input,
  Button,
  Text
} from "./logInStyles";

const LogIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">BeResearcher</Icon>

          <FormContent>
            <Form action="#">
              <H1>Perfil del Investigador</H1>

              <Label htmlFor="for">Nombre de Usuario</Label>
              <Input type="email" required />

              <Label htmlFor="for">Nombres</Label>
              <Input type="password" required />

              <Label htmlFor="for">Apellidos</Label>
              <Input type="password" required />

              <Label htmlFor="for">Correo</Label>
              <Input type="password" required />

              <Label htmlFor="for">Teléfono</Label>
              <Input type="password" required />

              <Label htmlFor="for">Escuela</Label>
              <Input type="password" required />

              <Label htmlFor="for">Facultad</Label>
              <Input type="password" required />

              <Label htmlFor="for">Contraseña</Label>
              <Input type="password" required />

              <Button type="submit"> Registrar </Button>
              <Text>Forgot my password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default LogIn;
