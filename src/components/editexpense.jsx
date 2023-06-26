export const Editexpense = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Expense EDIT</h4>
            <h6>Add/Update Expenses</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Expense Category</label>
                  <select className="select">
                    <option>Petrol</option>
                    <option>Diesel</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Expense Date </label>
                  <div className="input-groupicon">
                    <input
                      type="text"
                      placeholder="Choose Date"
                      className="datetimepicker"
                      defaultValue="2/27/2022"
                    />
                    <div className="addonset">
                      <img src="assets/img/icons/calendars.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Amount</label>
                  <div className="input-groupicon">
                    <input type="text" defaultValue={120} />
                    <div className="addonset">
                      <img src="assets/img/icons/dollar.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Reference No.</label>
                  <input type="text" defaultValue={555444} />
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-12">
                <div className="form-group">
                  <label>Expense for</label>
                  <input type="text" defaultValue="Employee" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    defaultValue={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <a className="btn btn-submit me-2">Update</a>
                <a href="expenselist.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  