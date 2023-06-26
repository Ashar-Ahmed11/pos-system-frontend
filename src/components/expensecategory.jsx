export const Expensecategory = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Expenses Category </h4>
            <h6>Manage your purchases</h6>
          </div>
          <div className="page-btn">
            <a href="createexpense.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" />
              Add EXPENSES CATEGORY
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
                <div className="search-path">
                  <a className="btn btn-filter" id="filter_search">
                    <img src="assets/img/icons/filter.svg" alt="img" />
                    <span>
                      <img src="assets/img/icons/closes.svg" alt="img" />
                    </span>
                  </a>
                </div>
                <div className="search-input">
                  <a className="btn btn-searchset">
                    <img src="assets/img/icons/search-white.svg" alt="img" />
                  </a>
                </div>
              </div>
              <div className="wordset">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="pdf"
                    >
                      <img src="assets/img/icons/pdf.svg" alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="excel"
                    >
                      <img src="assets/img/icons/excel.svg" alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="print"
                    >
                      <img src="assets/img/icons/printer.svg" alt="img" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card" id="filter_inputs">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="datetimepicker cal-icon"
                        placeholder="Choose Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Reference" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Category</option>
                        <option>Computers</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Status</option>
                        <option>Complete</option>
                        <option>Inprogress</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div className="form-group">
                      <a className="btn btn-filters ms-auto">
                        <img src="assets/img/icons/search-whites.svg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table  datanew">
                <thead>
                  <tr>
                    <th>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Date</th>
                    <th>Category name</th>
                    <th>Reference</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>2/27/2022</td>
                    <td>Employee Benefits</td>
                    <td>PT001</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>120</td>
                    <td>Employee Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Foods &amp; Snacks</td>
                    <td>PT002</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>250</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>3/24/2022</td>
                    <td>Entertainment</td>
                    <td>PT003</td>
                    <td>
                      <span className="badges bg-lightred">In Active</span>
                    </td>
                    <td>120</td>
                    <td>Office Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Office Expenses &amp; Postage </td>
                    <td>PT004</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>320</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>2/27/2022</td>
                    <td>Employee Benefits</td>
                    <td>PT005</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>250</td>
                    <td>Employee Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Foods &amp; Snacks</td>
                    <td>PT006</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>250</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>3/24/2022</td>
                    <td>Entertainment</td>
                    <td>PT007</td>
                    <td>
                      <span className="badges bg-lightred">In Active</span>
                    </td>
                    <td>120</td>
                    <td>Office Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Office Expenses &amp; Postage </td>
                    <td>PT008</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>320</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>2/27/2022</td>
                    <td>Employee Benefits</td>
                    <td>PT009</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>120</td>
                    <td>Employee Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Foods &amp; Snacks</td>
                    <td>PT010</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>250</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>3/24/2022</td>
                    <td>Entertainment</td>
                    <td>PT011</td>
                    <td>
                      <span className="badges bg-lightred">In Active</span>
                    </td>
                    <td>120</td>
                    <td>Office Vehicle</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>1/15/2022</td>
                    <td>Office Expenses &amp; Postage </td>
                    <td>PT012</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td>320</td>
                    <td>Employee Foods</td>
                    <td>
                      <a className="me-3" href="editexpense.html">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </a>
                      <a className="me-3 confirm-text" href="javascript:void(0);">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  