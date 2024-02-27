type Modal = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: Modal) => {
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Title</h4>
            <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>
              &times;
            </button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea className="form-control" id="description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select className="form-control" id="status">
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeModal}>
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
