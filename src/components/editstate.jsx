export const Editstate = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Places Management</h4>
            <h6>Edit/Update Places</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>State Name</label>
                  <input type="text" placeholder="Abu Dhabi" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Country</label>
                  <select className="select">
                    <option>United Arab Emirates</option>
                    <option>China</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    defaultValue={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <a className="btn btn-submit me-2">Update</a>
                <a className="btn btn-cancel">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  