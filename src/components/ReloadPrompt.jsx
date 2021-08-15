// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react';
import React from 'react';
import {
  Button, Toast, ToastContainer,
} from 'react-bootstrap';
import ToastHeader from './ToastHeader';

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  return (
    <ToastContainer position="top-end" className="me-2 mt-2">
      <Toast show={offlineReady} onClose={() => setOfflineReady(false)}>
        <ToastHeader title="App installed" />
        <Toast.Body>App is ready to work offline.</Toast.Body>
      </Toast>
      <Toast show={needRefresh} onClose={() => setNeedRefresh(false)}>
        <ToastHeader title="Update ready" />
        <Toast.Body>
          <p className="mb-2">New content available, click on reload button to update.</p>
          <Button variant="primary" size="sm" onClick={updateServiceWorker} className="w-100">Reload</Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
