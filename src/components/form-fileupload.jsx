export const Formfileupload = () => (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">File Upload</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">File Upload</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="myFirstImage"
                >
                  <label>
                    Upload (Single File){" "}
                    <a
                      href="javascript:void(0)"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </a>
                  </label>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      accept="image/*"
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      defaultValue={10485760}
                    />
                    <span className="custom-file-container__custom-file__custom-file-control" />
                  </label>
                  <div className="custom-file-container__image-preview" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Multiple File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="mySecondImage"
                >
                  <label>
                    Upload (Allow Multiple){" "}
                    <a
                      href="javascript:void(0)"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </a>
                  </label>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      multiple=""
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      defaultValue={10485760}
                    />
                    <span className="custom-file-container__custom-file__custom-file-control" />
                  </label>
                  <div className="custom-file-container__image-preview" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  