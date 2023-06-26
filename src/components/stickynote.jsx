export const Stickynote = () => (
    <div className="page-wrapper cardhead">
      <div className="content ">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sticky Note</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Sticky Note</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Sticky Note{" "}
                  <a
                    className="btn btn-primary float-sm-end m-l-10"
                    id="add_new"
                    href="javascript:;"
                  >
                    Add New Note
                  </a>
                </h5>
              </div>
              <div className="card-body">
                <div className="sticky-note" id="board" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  