export const Spinner = () => (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Spinner</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Spinner</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Border Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-dark" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Grow Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Grow Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-grow text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Flex Alignment</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Loading...</strong>
                  <div
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Float Alignment</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border float-end" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Different Sizes</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm mr-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow mr-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border spinner-border-lg" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-lg" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Buttons</h5>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary mb-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </button>
                <button
                  className="btn btn-primary mb-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
                <button
                  className="btn btn-primary mb-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </button>
                <button
                  className="btn btn-primary mb-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  