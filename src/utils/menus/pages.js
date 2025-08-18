// assets
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //


const producto = {
  id: "producto",
  title: "Producto",
  type: "group",
  children: [
    {
      id: "unidadMedida",
      title: "Unidad de Medida",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "categoria",
      title: "Categoria",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "marca",
      title: "Marca",
      type: "item",
      url: "/login",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "modelo",
      title: "Modelo",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "producto",
      title: "Producto",
      type: "item",
      url: "/producto",
      icon: icons.ProfileOutlined,
      target: false,
    },
  ],
};




export { producto};
