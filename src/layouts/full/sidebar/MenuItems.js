import {
  IconLayoutDashboard,
  IconShoppingCart,
  IconSquareMinus,
  IconGift,
  IconCalendarEvent,
  IconUser,
  IconLogout,
  IconLogin,
  IconUserPlus,
  IconBrandCashapp,
} from '@tabler/icons';

import { uniqueId } from 'lodash';
const localData = window.localStorage.getItem('loggedFocusEvent');
const localDataParsed = localData ? JSON.parse(localData) : null;
const userData = localDataParsed ? JSON.parse(localDataParsed.userData) : null;
const isLoggedIn = userData !== null;

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Inicio',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Administración',
  },
  isLoggedIn && userData.idtipousuario !== 2 && {
    id: uniqueId(),
    title: 'Gest. Eventos',
    icon: IconCalendarEvent,
    href: '/evento',
  },
  isLoggedIn && {
    id: uniqueId(),
    title: 'Invitacion',
    icon: IconSquareMinus,
    href: '/asistencia',
  },
  isLoggedIn && {
    id: uniqueId(),
    title: 'Carrito',
    icon: IconShoppingCart,
    href: '/carrito',
  },
  isLoggedIn && {
    id: uniqueId(),
    title: 'Compras',
    icon: IconGift,
    href: '/compras',
  },
  isLoggedIn && userData.idtipousuario === 1 && {
    id: uniqueId(),
    title: 'Pedidos',
    icon: IconBrandCashapp, // Puedes cambiar por otro icono de venta
    href: '/pedidos',
  },
  {
    navlabel: true,
    subheader: 'Autenticación',
  },
  !isLoggedIn && {
    id: uniqueId(),
    title: 'Inicio de Sesión',
    icon: IconLogin,
    href: '/auth/login',
  },
  !isLoggedIn && {
    id: uniqueId(),
    title: 'Registro',
    icon: IconUserPlus,
    href: '/auth/register',
  },
  {
    id: uniqueId(),
    title: 'Cerrar Sesión',
    icon: IconLogout,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Perfil',
    icon: IconUser,
    href: '/profile',
  },
].filter(Boolean);
export default Menuitems;
