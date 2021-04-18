import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink , Link} from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', direction:'rtl', textAlign:'right' }}
    >
      <CDBSidebar textColor="#333" backgroundColor="#fafafa">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            tp="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            پروفایل
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/admin/editProfile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">داشبورد</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/table" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">جدول</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/info" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">اطلاعات شخصی</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                آمار
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default AdminSidebar;