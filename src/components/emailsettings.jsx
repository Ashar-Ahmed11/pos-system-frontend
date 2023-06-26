export const Emailsettings = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Email Setting</h4>
            <h6>Manage Email Setting</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Host <span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Port<span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Address <span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Password <span className="manitory">*</span>
                  </label>
                  <div className="pass-group">
                    <input type="password" className=" pass-input" />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail From Name<span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Encryption <span className="manitory">*</span>
                  </label>
                  <select className="select">
                    <option>Choose </option>
                    <option>Encryption</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <a href="javascript:void(0);" className="btn btn-submit me-2">
                    Submit
                  </a>
                  <a href="javascript:void(0);" className="btn btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  