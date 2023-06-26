export const Addcategory = () => (
  <div className="page-wrapper">
    <div className="content">
      <div className="page-header">
        <div className="page-title">
          <h4>Product Add Category</h4>
          <h6>Create new product Category</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="form-group">
                <label>Category Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="form-group">
                <label>Category Code</label>
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
