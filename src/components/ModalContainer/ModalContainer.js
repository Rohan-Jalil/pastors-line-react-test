import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Scrollbars} from 'react-custom-scrollbars';
import {BeatLoader} from 'react-spinners';
import SearchBox from 'components/SearchBox/SearchBox';

const ModalContainer = ({
  show,
  handleClose,
  handleShow,
  title,
  children,
  showEvenHandler,
  even,
  scrollUpdateHandler,
  contactsUpdating,
  searchHandler,
  onSearchButtonClick,
  query,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {searchHandler && (
          <div className='w-50'>
            <SearchBox
              title='Search All Contacts'
              searchHandler={searchHandler}
              query={query}
            />
          </div>
        )}
        <Scrollbars style={{height: 400}} onUpdate={scrollUpdateHandler}>
          <div className='mr-3'>
            {children}
            <div className='d-flex justify-content-center'>
              <BeatLoader
                loading={contactsUpdating || false}
                size='25px'
                margin='25px'
              />
            </div>
          </div>
        </Scrollbars>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between align-items-center'>
        {even != undefined && (
          <div className='d-flex align-items-center'>
            <input
              className='d-block'
              type='checkbox'
              value=''
              id='even'
              onChange={showEvenHandler}
              checked={even}
            />
            <label className='form-check-label d-block ml-1' htmlFor='even'>
              Only Even
            </label>
          </div>
        )}
        <div className='d-flex justify-content-end col'>
          <Button
            className='btn mr-2 btn-light home_buttonA'
            onClick={(event) => handleShow({event, name: 'ModalA'})}
          >
            All Contacts
          </Button>
          <Button
            className='btn mr-2 btn-light home_buttonB'
            onClick={(event) => handleShow({event, name: 'ModalB'})}
          >
            US Contacts
          </Button>
          <Button className='btn btn-light home_buttonC' onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContainer;

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node,
  showEvenHandler: PropTypes.func,
};
