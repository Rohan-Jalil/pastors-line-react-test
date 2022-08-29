import React, {useState, useEffect} from 'react';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import {useSelector} from 'react-redux';
import {checkEvenId} from 'components/utils/Helper';
import {useDispatch} from 'react-redux';
import {CONTACT_DETAIL} from 'redux/Constants/Constants';
import {useNavigate} from 'react-router-dom';
import {fetchContacts} from 'redux/Actions/Contacts';
import {resetContacts} from 'redux/Actions/Contacts';

const AllContacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(({contacts}) => contacts.contacts);
  const contactsUpdating = useSelector(
    ({contacts}) => contacts.contactsUpdating,
  );
  const [even, setEven] = useState(false);
  const [params, setParameter] = useState({
    companyId: 171,
    page: 1,
    query: '',
    countryId: null,
  });

  const toggleEven = () => {
    setEven((cur) => !cur);
  };

  const viewFullDetail = ({contact}) => {
    dispatch({type: CONTACT_DETAIL, payload: contact});
    navigate('/');
  };

  useEffect(() => {
    dispatch(
      fetchContacts({
        params: params,
      }),
    );
  }, [dispatch, params]);

  useEffect(() => {
    return () => {
      dispatch(resetContacts());
    };
  }, [dispatch]);

  const scrollUpdateHandler = (values) => {
    const {scrollTop, scrollHeight, clientHeight} = values;
    const pad = 1;
    const t = (scrollTop + pad) / (scrollHeight - clientHeight);
    if (t > 1 && !contactsUpdating && contacts && Object.keys(contacts) != 0) {
      setParameter((cur) => {
        return {
          ...cur,
          page: cur.page + 1,
        };
      });
    }
  };

  const searchHandler = ({searchTerm}) => {
    dispatch(resetContacts());
    setParameter((cur) => {
      return {
        ...cur,
        query: searchTerm,
      };
    });
  };

  return (
    <>
      <ModalContainer
        title='All Contacts'
        toggleEven={toggleEven}
        even={even}
        scrollUpdateHandler={scrollUpdateHandler}
        searchHandler={searchHandler}
      >
        <div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Country</th>
                <th>First Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {!even &&
                contacts.length > 0 &&
                contacts?.map((contact, index) => {
                  return (
                    <tr
                      key={index}
                      title='Click to get full Contact Detail'
                      onClick={() => viewFullDetail({contact})}
                    >
                      <td>{contact?.id}</td>
                      <td>{contact?.country?.iso}</td>
                      <td>{contact?.first_name}</td>
                      <td>{contact?.email}</td>
                    </tr>
                  );
                })}
              {even &&
                contacts?.map((contact, index) => {
                  if (checkEvenId({contactId: contact.id})) {
                    return (
                      <tr
                        key={index}
                        title='Click to get full Contact Detail'
                        onClick={() => viewFullDetail({contact})}
                      >
                        <td>{contact?.id}</td>
                        <td>{contact?.country?.iso}</td>
                        <td>{contact?.first_name}</td>
                        <td>{contact?.email}</td>
                      </tr>
                    );
                  } else return null;
                })}
            </tbody>
          </table>
        </div>
      </ModalContainer>
    </>
  );
};

export default AllContacts;
