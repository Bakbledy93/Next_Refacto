const initialState = {
  loading: false,
  editProfilModal: false,
  uploadModal: false,
  previewPublicationModal: false,
  previewItem : 0,
}

const reducerState = (state = initialState, action) => {
  switch(action.type) {
    case 'STATE' :
      return {
        ...state,
        loading: true,
        editProfilModal: action.editProfilModal,
        uploadModal: action.uploadModal,
        previewPublicationModal: action.previewPublicationModal,
        previewItem : action.previewItem,
      }
    default: 
      return state;
  }
}

export default reducerState