export const Sweetalerts = () => (
    <div className="page-wrapper cardhead">
      <div className="content ">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sweetalerts</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Sweetalerts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Examples</h4>
              </div>
              <div className="card-body">
                <p>
                  SweetAlert automatically centers itself on the page and looks
                  great no matter if you're using a desktop computer, mobile or
                  tablet. It's even highly customizable, as you can see below!
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="basic-alert"
                >
                  Basic
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="with-title"
                >
                  With Title
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="footer-alert"
                >
                  With Footer
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Position</h4>
              </div>
              <div className="card-body">
                <p>
                  You can specify position of your alert with{" "}
                  <code>
                    position : {"{"} top-start | top-end | bottom-start |
                    bottom-end {"}"}
                  </code>{" "}
                  in js.
                </p>
                <button
                  className="btn btn-outline-success mr-1 mb-1"
                  id="position-top-start"
                >
                  Top Start
                </button>
                <button
                  className="btn btn-outline-success mr-1 mb-1"
                  id="position-top-end"
                >
                  Top End
                </button>
                <button
                  className="btn btn-outline-success mr-1 mb-1"
                  id="position-bottom-start"
                >
                  Bottom Starts
                </button>
                <button
                  className="btn btn-outline-success mr-1 mb-1"
                  id="position-bottom-end"
                >
                  Bottom End
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Types</h4>
              </div>
              <div className="card-body">
                <p>
                  The type of the modal. SweetAlert comes with 4 built-in types
                  which will show a corresponding icon animation: "warning",
                  "error", "success" and "info". You can also set it as "input" to
                  get a prompt modal. It can either be put in the object under the
                  key "icon" or passed as the third parameter of the function.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success mr-1 mb-1"
                  id="type-success"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info mr-1 mb-1"
                  id="type-info"
                >
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning mr-1 mb-1"
                  id="type-warning"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger mr-1 mb-1"
                  id="type-error"
                >
                  Error
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Options</h4>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="auto-close"
                >
                  Auto Close
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="outside-click"
                >
                  Click Outside
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-1 mb-1"
                  id="prompt-function"
                >
                  Question
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Confirm Options</h4>
              </div>
              <div className="card-body">
                <h5>Confirm Button Text</h5>
                <p>
                  Use <code>confirmButtonText: "Your text here!"</code> option to
                  change the text of the "Confirm" button.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary mb-3"
                  id="confirm-text"
                >
                  Confirm Text
                </button>
                <h5>Confirm Button Color</h5>
                <p>
                  Use{" "}
                  <code>
                    confirmButtonClass: "btn btn-{"{"}colorName{"}"}"
                  </code>{" "}
                  option to change the color of the "Confirm" button.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary mb-2"
                  id="confirm-color"
                >
                  Confirm Button Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  