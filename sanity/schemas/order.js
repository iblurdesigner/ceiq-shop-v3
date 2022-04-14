export default {
  name: "order",
  title: "Orden",
  type: "document",
  fields: [
    {
      title: "Usuario",
      name: "user",
      type: "reference",
      to: [{ type: "user" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "userName",
      title: "Nombre de usuario",
      type: "string",
    },
    {
      name: "itemsPrice",
      title: "precioArticulo",
      type: "number",
    },
    {
      name: "shippingPrice",
      title: "precioEnvio",
      type: "number",
    },
    {
      name: "taxPrice",
      title: "precioIva",
      type: "number",
    },
    {
      name: "totalPrice",
      title: "precioTotal",
      type: "number",
    },
    {
      name: "paymentMethod",
      title: "metodoPago",
      type: "string",
    },
    {
      title: "direccionEnvio",
      name: "shippingAddress",
      type: "shippingAddress",
    },
    {
      title: "pagoConfirmado",
      name: "paymentResult",
      type: "paymentResult",
    },
    {
      title: "Orden de Artículos",
      name: "orderItems",
      type: "array",
      of: [
        {
          title: "Orden de Artículo",
          type: "orderItem",
        },
      ],
    },
    {
      title: "Pagado",
      name: "isPaid",
      type: "boolean",
    },
    {
      title: "Fecha de Pago",
      name: "paidAt",
      type: "datetime",
    },
    {
      title: "Entregado",
      name: "isDelivered",
      type: "boolean",
    },
    {
      title: "Entregago en",
      name: "deliveredAt",
      type: "datetime",
    },
    {
      title: "Creado en",
      name: "createdAt",
      type: "datetime",
    },
  ],
};
