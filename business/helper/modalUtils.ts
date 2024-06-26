import { AddModalType } from '/components/common/modal/Modal';

import modalController from '../class/ModalController';

import { freezeWindowScroll, releaseWindowScroll } from './domUtils';

const addModal: AddModalType = async (modal) => {
  freezeWindowScroll();

  return modalController.addModal(modal);
};

const resetModal = () => {
  modalController.resetModal();

  releaseWindowScroll();
};

const popModal = () => {
  modalController.popModal();

  const modalLength = modalController.getModalListLength();

  if (modalLength <= 1) {
    releaseWindowScroll();
  }
};

const storeCloseFunction = (callback: () => void) => {
  modalController.pushCloseFunction(callback);
};

const closeModal = () => {
  modalController.closeModal();
};

export { addModal, resetModal, popModal, storeCloseFunction, closeModal };
