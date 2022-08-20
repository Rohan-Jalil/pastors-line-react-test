import React from 'react';
import {useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import {checkEvenId} from 'components/utils/Helper';

const AllContacts = ({even, viewFullDetail}) => {
  const contacts = useSelector(({contacts}) => contacts.contacts);

  return (
    <>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              !even &&
              Object.keys(contacts).map((contactId, index) => {
                return (
                  <tr
                    key={contactId}
                    title='Click to get full Contact Detail'
                    onClick={() =>
                      viewFullDetail({contact: contacts[contactId]})
                    }
                  >
                    <td>{contacts[contactId].id}</td>
                    <td>{contacts[contactId].country.iso}</td>
                    <td>{contacts[contactId].first_name}</td>
                    <td>{contacts[contactId].last_name}</td>
                    <td>{contacts[contactId].email}</td>
                  </tr>
                );
              })}
            {contacts &&
              even &&
              Object.keys(contacts).map((contactId, index) => {
                if (checkEvenId({contactId})) {
                  return (
                    <tr
                      key={contactId}
                      title='Click to get full Contact Detail'
                      onClick={() =>
                        viewFullDetail({contact: contacts[contactId]})
                      }
                    >
                      <td>{contacts[contactId].id}</td>
                      <td>{contacts[contactId].country.iso}</td>
                      <td>{contacts[contactId].first_name}</td>
                      <td>{contacts[contactId].last_name}</td>
                      <td>{contacts[contactId].email}</td>
                    </tr>
                  );
                } else return null;
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AllContacts;

AllContacts.propTypes = {
  even: PropTypes.bool,
};
