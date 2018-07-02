import * as React from 'react';
import { DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

const adminMenuItems = (
  <>
    <DropdownItem tag={Link} to="/admin/user-management">
      <FontAwesomeIcon icon="user" /> User Management
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/tracker">
      <FontAwesomeIcon icon="eye" /> Tracker
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/metrics">
      <FontAwesomeIcon icon="tachometer-alt" /> Metrics
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/health">
      <FontAwesomeIcon icon="heart" /> Health
    </DropdownItem>
    <DropdownItem tag={Link} to="/admin/configuration">
      <FontAwesomeIcon icon="list" /> Configuration
    </DropdownItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
    <DropdownItem tag={Link} to="/admin/logs">
      <FontAwesomeIcon icon="tasks" /> Logs
    </DropdownItem>
  </>
);

const swaggerItem = (
  <DropdownItem tag={Link} to="/admin/docs">
    <FontAwesomeIcon icon="book" /> API Docs
  </DropdownItem>
);

export const AdminMenu = ({ showSwagger }) => (
  <NavDropdown icon="user-plus" name="Administration" style={{ width: '130%' }} id="admin-menu">
    {adminMenuItems}
    {showSwagger && swaggerItem}
  </NavDropdown>
);

export default AdminMenu;
