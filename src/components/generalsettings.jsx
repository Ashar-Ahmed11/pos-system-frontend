export const Generalsettings = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>General Setting</h4>
            <h6>Manage General Setting</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Title <span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter Title" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Time Zone </label>
                  <select className="select">
                    <option>Choose Time Zone </option>
                    <option>USD Time Zone</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Currency <span className="manitory">*</span>
                  </label>
                  <select className="select">
                    <option>Choose Currency </option>
                    <option>INR</option>
                    <option>USA</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Date Format<span className="manitory">*</span>
                  </label>
                  <select className="select">
                    <option>Choose Date Format </option>
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Email<span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter email" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    Phone<span className="manitory">*</span>
                  </label>
                  <input type="text" placeholder="Enter Phone" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Address<span className="manitory">*</span>{" "}
                  </label>
                  <input type="text" placeholder="Enter Address" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> Product Image</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src="assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
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
  