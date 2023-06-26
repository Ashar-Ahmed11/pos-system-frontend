export const Popover = () => (
    <div className="page-wrapper cardhead">
      <div className="content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Popover</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Popover</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Popover</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="popover"
                    title=""
                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                    data-bs-original-title="Popover title"
                    aria-describedby="popover249009"
                  >
                    Click to toggle popover
                  </button>
                  <a
                    className="example-popover btn btn-primary"
                    tabIndex={0}
                    role="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="focus"
                    title=""
                    data-bs-content="And here's some amazing content. It's very engaging. Right?"
                    data-bs-original-title="Popover title"
                  >
                    Dismissible popover
                  </a>
                  <button
                    className="example-popover btn btn-primary"
                    type="button"
                    data-bs-trigger="hover"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="bottom"
                    title=""
                    data-offset="-20px -20px"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-bs-original-title="Popover title"
                  >
                    On Hover Tooltip
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Direction Popover</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">
                  <button
                    className="example-popover btn btn-primary"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="top"
                    title=""
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-bs-original-title="Popover title"
                  >
                    Popover on top
                  </button>
                  <button
                    className="example-popover btn btn-primary"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="right"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-bs-original-title=""
                    title=""
                  >
                    Popover on right
                  </button>
                  <button
                    className="example-popover btn btn-primary"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="bottom"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-bs-original-title=""
                    title=""
                  >
                    Popover on bottom
                  </button>
                  <button
                    className="example-popover btn btn-primary"
                    type="button"
                    data-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="left"
                    data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-bs-original-title=""
                    title=""
                  >
                    Popover on left
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  