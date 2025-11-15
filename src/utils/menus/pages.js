// assets
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};



const producto = {
  id: "producto",
  title: "Producto",
  type: "group",
  children: [
    {
      id: "unidadMedida",
      title: "Unidad de Medida",
      type: "item",
      url: "/UnitofMeasure",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "categoria",
      title: "Categoria",
      type: "item",
      url: "/category",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "marca",
      title: "Marca",
      type: "item",
      url: "/brand",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "modelo",
      title: "Modelo",
      type: "item",
      url: "/model",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "producto",
      title: "Producto",
      type: "item",
      url: "/product",
      icon: icons.ProfileOutlined,
      target: false,
    },
  ],
};




export { producto};
