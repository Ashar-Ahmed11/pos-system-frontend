export const Importpurchase = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Import Purchase</h4>
            <h6>Add/Update Purchase</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Supplier Name</label>
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-10">
                      <select className="select">
                        <option>Select</option>
                        <option>Supplier</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                      <div className="add-icon">
                        <a href="javascript:void(0);">
                          <img src="assets/img/icons/plus1.svg" alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Purchase Status </label>
                  <select className="select">
                    <option>Select</option>
                    <option>Status</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-12">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <a className="btn btn-submit w-100">Download Sample File</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> Upload CSV File</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src="assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Order Tax</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Discount</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Shipping</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
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
  )
  