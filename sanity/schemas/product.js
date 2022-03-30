export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "brand",
      title: "Marca",
      type: "string",
    },
    {
      name: "category",
      title: "Categoría",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },

    {
      name: "numReviews",
      title: "NumRevisiones",
      type: "number",
    },
    {
      name: "countInStock",
      title: "CantEnStock",
      type: "number",
    },
  ],
};
