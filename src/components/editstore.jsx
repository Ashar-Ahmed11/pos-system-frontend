export const Editstore = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Store Management</h4>
            <h6>Edit/Update Store</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Store Name</label>
                  <input type="text" defaultValue="Mac" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" defaultValue="James" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className=" pass-input"
                      defaultValue={123456}
                    />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" defaultValue={123456879} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" defaultValue="abc@gmail.com" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> Store Image</label>
                  <div className="image-upload">
                    <input type="file" />
                    <div className="image-uploads">
                      <img src="assets/img/icons/upload.svg" alt="img" />
                      <h4>Drag and drop a file to upload</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="product-list">
                  <ul className="row">
                    <li className="ps-0">
                      <div className="productviews">
                        <div className="productviewsimg">
                          <img src="assets/img/icons/macbook.svg" alt="img" />
                        </div>
                        <div className="productviewscontent">
                          <div className="productviewsname">
                            <h2>macbookpro.jpg</h2>
                            <h3>581kb</h3>
                          </div>
                          <a href="javascript:void(0);" className="hideset">
                            x
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
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
  