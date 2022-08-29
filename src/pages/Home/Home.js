import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import {resetContacts} from 'redux/Actions/Contacts';

const Home = () => {
  const contactDetail = useSelector(({contacts}) => contacts.contactDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetContacts());
  }, [dispatch]);

  return (
    <>
      <div className='d-flex justify-content-center home gap-3'>
        <Link to='/allcontacts'>
          <button className='home_buttonA mr-4'>Button A</button>
        </Link>

        <Link to='/uscontacts'>
          <button className='home_buttonB'>Button B</button>
        </Link>
      </div>
      {contactDetail && <ContactDetails />}
    </>
  );
};

export default Home;
