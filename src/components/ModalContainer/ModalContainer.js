import React from 'react';
import {useNavigate} from 'react-router-dom';
import './ModalContainer.scss';
import PropTypes from 'prop-types';
import {Scrollbars} from 'react-custom-scrollbars';
import {BeatLoader} from 'react-spinners';
import SearchBox from 'components/SearchBox/SearchBox';
import {useSelector, useDispatch} from 'react-redux';
import {resetContacts} from 'redux/Actions/Contacts';
import {CONTACT_DETAIL} from 'redux/Constants/Constants';

const ModalContainer = ({
  title,
  toggleEven,
  even,
  children,
  scrollUpdateHandler,
  searchHandler,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactsUpdating = useSelector(
    ({contacts}) => contacts.contactsUpdating,
  );

  const navigateHome = () => {
    dispatch(resetContacts());
    dispatch({type: CONTACT_DETAIL, payload: null});
    navigate('/');
  };

  return (
    <>
      <div
        className='modal d-block bg-light'
        id='ModalContainer'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='ModalContainer'
        aria-hidden='true'
      >
        <div
          className='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg custom-transition'
          role='document'
        >
          <div className='modal-content modal-container'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                {title}
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                onClick={navigateHome}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='w-50'>
                {searchHandler && <SearchBox searchHandler={searchHandler} />}
              </div>
              <Scrollbars style={{height: 500}} onUpdate={scrollUpdateHandler}>
                <div className='mr-3'>
                  {children}
                  <div className='d-flex justify-content-center'>
                    <BeatLoader
                      loading={contactsUpdating}
                      size='25px'
                      margin='25px'
                    />
                  </div>
                </div>
              </Scrollbars>
            </div>
            <div className='d-flex justify-content-between align-items-center m-2'>
              {even != undefined && (
                <div className='d-flex align-items-center ml-2'>
                  <input
                    className='d-block'
                    type='checkbox'
                    id='evenInput'
                    onChange={toggleEven}
                    checked={even}
                  />
                  <label
                    className='form-check-label d-block ml-1'
                    htmlFor='even'
                  >
                    Only Even
                  </label>
                </div>
              )}
              <div className='d-flex justify-content-end col'>
                <button
                  className='btn mr-2 btn-light home_buttonA'
                  onClick={() => {
                    navigate('/allcontacts');
                  }}
                >
                  All Contacts
                </button>
                <button
                  className='btn mr-2 btn-light home_buttonB'
                  onClick={() => {
                    navigate('/uscontacts');
                  }}
                >
                  US Contacts
                </button>
                <button
                  className='btn btn-light home_buttonC'
                  onClick={navigateHome}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContainer;

ModalContainer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  toggleEven: PropTypes.func,
  even: PropTypes.bool,
  scrollUpdateHandler: PropTypes.func,
  searchHandler: PropTypes.func,
};
