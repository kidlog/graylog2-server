// @flow strict
import React from 'react';
import PropTypes from 'prop-types';

import { ViewStore } from 'views/stores/ViewStore';
import { SearchStore } from 'views/stores/SearchStore';
import connect from 'stores/connect';

import { Modal, Button } from 'components/graylog';
import BootstrapModalWrapper from 'components/bootstrap/BootstrapModalWrapper';

import type { ViewStoreState } from 'views/stores/ViewStore';
import type { SearchStoreState } from 'views/stores/SearchStore';

type Props = {
  currentView: ViewStoreState,
  onClose: () => void,
  searches: SearchStoreState,
  show: boolean,
};

const DebugOverlay = ({ currentView, searches, show, onClose }: Props) => (
  <BootstrapModalWrapper showModal={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Debug information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <textarea disabled
                style={{ height: '80vh', width: '100%' }}
                value={JSON.stringify({ currentView, searches }, null, 2)} />
    </Modal.Body>
    <Modal.Footer>
      <Button type="button" onClick={() => onClose()} bsStyle="primary">Close</Button>
    </Modal.Footer>
  </BootstrapModalWrapper>
);

DebugOverlay.propTypes = {
  currentView: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  searches: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};

export default connect(DebugOverlay, { currentView: ViewStore, searches: SearchStore });
