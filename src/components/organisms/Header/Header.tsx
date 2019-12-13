import React from 'react';
import { NavLink } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <nav>
      <NavLink to="/orders/" >Заказы</NavLink>
      <NavLink to="/products/" >Товары</NavLink>
      <NavLink to="/directory/" >Справочники</NavLink>
      <NavLink to="/reports/" >Отчеты</NavLink>
    </nav>
  )
}

export default Header;