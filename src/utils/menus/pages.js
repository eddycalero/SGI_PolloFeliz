// assets
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const segurida = {
  id: "segurida",
  title: "Seguridad",
  type: "group",
  children: [
    {
      id: "usuario",
      title: "Usuarios",
      type: "item",
      url: "/auth/login",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "register1",
      title: "Roles",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
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

const visita = {
  id: "visita",
  title: "Visita",
  type: "group",
  children: [
    {
      id: "calendario",
      title: "Calendario",
      type: "item",
      url: "/calendario",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "visita",
      title: "Lista de agenda",
      type: "item",
      url: "/agenda",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "empleado",
      title: "Lista de empleado",
      type: "item",
      url: "/empleado",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "taller",
      title: "Lista de talleres",
      type: "item",
      url: "/taller",
      icon: icons.ProfileOutlined,
      target: false,
    },
    {
      id: "newTaller",
      title: "Crear Taller",
      type: "item",
      url: "/taller/new",
      icon: icons.ProfileOutlined,
      target: false,
    },
  ],
};

const inventario = {
  id: "inventario",
  title: "Inventario",
  type: "group",
  children: [
    {
      id: "entrada",
      title: "Entradas",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "stock",
      title: "Stock",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "salida",
      title: "Salidas",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

const almacen = {
  id: "almacen",
  title: "Almacen",
  type: "group",
  children: [
    {
      id: "bodeguero",
      title: "Bodegueros",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "almacen",
      title: "Almacen",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: "rack",
      title: "Rack",
      type: "item",
      url: "/register",
      icon: icons.ProfileOutlined,
      target: true,
    },
  ],
};

export { producto, segurida, inventario, almacen, visita };
