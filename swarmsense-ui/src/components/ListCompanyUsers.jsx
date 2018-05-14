/** 
 * This file is part of SwarmSense IoT Platform
 * Copyright (c) 2018, Baseapp Systems And Softwares Private Limited
 * Authors: Gopal Lal
 *
 * License: www.baseapp.com/swarmsense-whitelabel-iot-platoform
 */
import React from "react";
import { List, Datagrid, EmailField, TextField } from "admin-on-rest";
import { Responsive } from "admin-on-rest";
import { connect } from "react-redux";
import { SimpleList, ActionPanel } from "./index.js";
import { set_params } from "../utils";
import EditButton from "./EditButton";
import UserFilter from "./FilterUser_name";
let CompaniesUsersList = props => {
  return (
    <List
      {...props}
      perPage={30}
      filters={<UserFilter />}
      title="Users in company"
      actions={<ActionPanel />}
    >
      {permissions => {
        const readOnly = permissions === "read" ? true : false;
        if (readOnly) {
          return <div>Forbidden for read-only access!</div>;
        } else {
          return (
            <Responsive
              small={
                <SimpleList
                  onEditItem={record => set_params("user", record)}
                  primaryText={record => `Name: ${record.name}`}
                  secondaryText={record =>
                    `Email: ${record.email} (Ph: ${record.phone})`
                  }
                />
              }
              medium={
                <Datagrid>
                  <TextField source="name" />
                  <EmailField source="email" />
                  <TextField source="phone" />
                  <EditButton onClick={record => set_params("user", record)} />
                </Datagrid>
              }
            />
          );
        }
      }}
    </List>
  );
};
export default /**
 * @name CompaniesUsersList
 * @description A react stateless function component to list all the users
 * in the currently selected company.
 * @example <CompaniesUsersList/>
 */
CompaniesUsersList;