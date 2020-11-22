export const userRequest = (profile) => {
  return {
    type: 'USER',
    profile
  };
};

export const stateRequest = (editProfilModal, uploadModal, previewPublicationModal, previewItem) => {
  return {
    type: 'STATE',
    editProfilModal: editProfilModal,
    uploadModal: uploadModal,
    previewPublicationModal: previewPublicationModal,
    previewItem : previewItem,
  };
};

