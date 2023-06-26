export const Edituser = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User Management</h4>
            <h6>Edit/Update User</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="Thomas" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" defaultValue="Thomas12" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type="password"
                      className=" pass-input"
                      placeholder={123456}
                    />
                    <span className="fas toggle-password fa-eye-slash" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" defaultValue={+123456789} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" defaultValue="thomas@mail.com" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Role</label>
                  <select className="select">
                    <option>Owner</option>
                    <option> </option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label> User Image</label>
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
                      <div className="productviewset">
                        <div className="productviewsimg">
                          <img src="assets/img/customer/profile2.jpg" alt="img" />
                        </div>
                        <div className="productviewscontent">
                          <a href="javascript:void(0);" className="hideset">
                            <i className="fa fa-trash-alt" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
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
  