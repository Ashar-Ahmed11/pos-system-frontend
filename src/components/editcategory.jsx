export const Editcategory = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Edit Category</h4>
            <h6>Edit a product Category</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" defaultValue="Computers" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Code</label>
                  <input type="text" defaultValue="CT001" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    defaultValue={"Computers Description"}
                  />
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
                <a href="categorylist.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  