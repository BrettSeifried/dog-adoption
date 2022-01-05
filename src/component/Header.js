import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/dogs/admin">Manage Pups</NavLink>
    </div>
  );
}
