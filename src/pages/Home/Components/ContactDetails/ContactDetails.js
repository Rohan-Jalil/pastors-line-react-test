import React from 'react';
import {useSelector} from 'react-redux';
import styles from './ContactDetails.module.css';

const ContactDetails = ({contact}) => {
  const contactDetail = useSelector(({contacts}) => contacts.contactDetail);

  return (
    <div className={styles.contactContainer}>
      <ul className={styles.unorderList}>
        <li>
          <b>First Name:</b> {contactDetail?.first_name}
        </li>
        <li>
          <b>Last Name:</b> {contactDetail?.last_name}
        </li>
        <li>
          <b>Email:</b> {contactDetail?.email}
        </li>
        <li>
          <b>Phone Number:</b> {contactDetail?.phone_number}
        </li>
        <li>
          <b>Country:</b> {contactDetail?.country.iso}
        </li>
        <li>
          <b>Status:</b> {contactDetail?.status}
        </li>
        <li>
          <b>Birthday:</b>
          {contactDetail?.birthday
            ? new Date(contactDetail.birthday).toLocaleDateString()
            : ''}
        </li>
        <li>
          <b>Comment:</b> {contactDetail?.comment}
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
