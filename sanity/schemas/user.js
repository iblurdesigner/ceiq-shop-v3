export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Contraseña",
      type: "string",
    },
    {
      name: "isAdmin",
      title: "Administrador",
      type: "boolean",
    },
  ],
};
