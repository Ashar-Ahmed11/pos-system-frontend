export const Formselect2 = () => (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Form Select2</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Form Select2</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use select2() function on select element to convert it to
                      Select 2.
                    </p>
                    <select className="js-example-basic-single select2">
                      <option selected="selected">orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Nested</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Add options inside the optgroups to for group options.</p>
                    <select className="form-control nested">
                      <optgroup label="Group1">
                        <option selected="selected">orange</option>
                        <option>white</option>
                        <option>purple</option>
                      </optgroup>
                      <optgroup label="Group2">
                        <option>purple</option>
                        <option>orange</option>
                        <option>white</option>
                      </optgroup>
                      <optgroup label="Group3">
                        <option>white</option>
                        <option>purple</option>
                        <option>orange</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Placeholder</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Apply Placeholder by setting option placeholder option.</p>
                    <select className="placeholder js-states form-control">
                      <option>Choose...</option>
                      <option value="one">First</option>
                      <option value="two">Second</option>
                      <option value="three">Third</option>
                      <option value="four">Fourth</option>
                      <option value="five">Fifth</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Tagging with multi-value select boxes
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Set tags: true to convert select 2 in Tag mode.</p>
                    <select className="form-control tagging" multiple="multiple">
                      <option>orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Small Select2</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use data('select2') function to get container of select2.
                    </p>
                    <select className="form-control form-small select">
                      <option selected="selected">orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Disabling options</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Disable Select using disabled attribute.</p>
                    <select className="form-control disabled-results">
                      <option value="one">First</option>
                      <option value="two" disabled="disabled">
                        Second
                      </option>
                      <option value="three">Third</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Limiting the number of Tagging</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Set maximumSelectionLength: 2 with tags: true to limit
                      selectin in Tag mode.
                    </p>
                    <select className="form-control tagging" multiple="multiple">
                      <option>orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  