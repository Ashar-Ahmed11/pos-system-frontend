export const Customerreport = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Customer Report</h4>
            <h6>Manage your Customer Report</h6>
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
                      <div className="input-groupicon">
                        <input
                          type="text"
                          placeholder="From Date"
                          className="datetimepicker"
                        />
                        <div className="addonset">
                          <img src="assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="input-groupicon">
                        <input
                          type="text"
                          placeholder="To Date"
                          className="datetimepicker"
                        />
                        <div className="addonset">
                          <img src="assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
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
              <table className="table datanew">
                <thead>
                  <tr>
                    <th>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Customer code</th>
                    <th>Customer name </th>
                    <th>Amount</th>
                    <th>Paid</th>
                    <th>Amount due</th>
                    <th>Status</th>
                    <th>Paument Status</th>
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
                    <td>CT_1001</td>
                    <td>Thomas21</td>
                    <td>1500.00</td>
                    <td>1500.00</td>
                    <td>1500.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1002</td>
                    <td>504Benjamin</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightred">Overdue</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1003</td>
                    <td>James 524</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightred">Overdue</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1004</td>
                    <td>Bruklin2022</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1005</td>
                    <td>BeverlyWIN25</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>150.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightred">Overdue</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1006</td>
                    <td>BHR256</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>100.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightred">Overdue</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1007</td>
                    <td>Alwin243</td>
                    <td>5.00</td>
                    <td>5.00</td>
                    <td>5.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1008</td>
                    <td>FredJ25</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1009</td>
                    <td>FredJ25</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>10.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1010</td>
                    <td>Cras56</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1011</td>
                    <td>Grace2022</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1011</td>
                    <td>Cras56</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>CT_1012</td>
                    <td>Grace2022</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>15.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <span className="badges bg-lightgrey">Unpaid</span>
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
  