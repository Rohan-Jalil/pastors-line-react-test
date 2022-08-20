import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import {useNavigate} from 'react-router-dom';
import AllContacts from './Components/AllContacts/AllContacts';
import USContacts from './Components/USContacts/USContacts';
import {useDispatch} from 'react-redux';
import {fetchContacts} from 'redux/Actions/Contacts';
import {useSelector} from 'react-redux';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import {CONTACT_DETAIL, GET_CONTACTS} from 'redux/Constants/Constants';

const Home = () => {
  const navigate = useNavigate();

  // Use Selectors

  const contactsUpdating = useSelector(
    ({contacts}) => contacts.contactsUpdating,
  );
  const contacts = useSelector(({contacts}) => contacts.contacts);

  // Local State
  const [show, setShow] = useState({
    ModalA: false,
    ModalB: false,
    ModalC: false,
  });

  const [even, setEven] = useState(false);
  const [params, setParameter] = useState({
    companyId: 171,
    page: 1,
    query: '',
    countryId: null,
  });

  // Event Handlers

  const showEvenHandler = (event) => {
    setEven(event.target.checked);
  };
  const handleClose = () => {
    navigate(`/`);
    setShow({ModalA: false, ModalB: false, ModalC: false});
    setEven(false);
    setParameter({companyId: 171, page: 1, query: '', countryId: null});
    dispatch({type: GET_CONTACTS, payload: {}});
  };

  const handleShow = ({event, name}) => {
    setParameter({companyId: 171, page: 1, query: '', countryId: null});
    name != 'ModalC' && navigate(`/${name}`);
    setShow((cur) => {
      return {
        ModalA: false,
        ModalB: false,
        ModalC: false,
        [name]: true,
      };
    });
    name == 'ModalB' &&
      setParameter((cur) => {
        return {
          ...cur,
          page: 1,
          countryId: 226,
        };
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchContacts({
        params: params,
      }),
    );
    return () => {};
  }, [dispatch, params, show]);

  const scrollUpdateHandler = (values) => {
    const {scrollTop, scrollHeight, clientHeight} = values;
    const pad = 1;
    const t = (scrollTop + pad) / (scrollHeight - clientHeight);
    if (t > 1 && !contactsUpdating && Object.keys(contacts) != 0) {
      setParameter((cur) => {
        return {
          ...cur,
          page: cur.page + 1,
        };
      });
    }
  };

  const searchHandler = ({searchTerm}) => {
    setParameter((cur) => {
      return {
        ...cur,
        query: searchTerm,
      };
    });
  };

  const viewFullDetail = ({contact}) => {
    dispatch({type: CONTACT_DETAIL, payload: contact});
    setShow({ModalA: false, ModalB: false, ModalC: true});
  };

  return (
    <>
      <div className='d-flex justify-content-center home gap-3'>
        <Button
          onClick={(event) => handleShow({event, name: 'ModalA'})}
          className='home_buttonA mr-5'
        >
          Button A
        </Button>
        <Button
          onClick={(event) => handleShow({event, name: 'ModalB'})}
          className='home_buttonB'
        >
          Button B
        </Button>
      </div>
      {(show.ModalA || show.ModalB) && (
        <ModalContainer
          show={show.ModalA || show.ModalB}
          handleShow={handleShow}
          handleClose={handleClose}
          title={show.ModalA ? 'All Contacts' : 'US Contacts'}
          showEvenHandler={showEvenHandler}
          even={even}
          scrollUpdateHandler={scrollUpdateHandler}
          contactsUpdating={contactsUpdating}
          searchHandler={searchHandler}
          query={params.query}
        >
          {show.ModalA && (
            <AllContacts even={even} viewFullDetail={viewFullDetail} />
          )}
          {show.ModalB && (
            <USContacts even={even} viewFullDetail={viewFullDetail} />
          )}
        </ModalContainer>
      )}
      {show.ModalC && (
        <ModalContainer
          show={show.ModalC}
          handleShow={handleShow}
          handleClose={handleClose}
          title='Contact Details'
        >
          <ContactDetails />
        </ModalContainer>
      )}
    </>
  );
};

export default Home;
