export const CurrencySettings = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Currency Settings</h4>
            <h6>Manage Currency Settings</h6>
          </div>
          <div className="page-btn">
            <a
              className="btn btn-added"
              data-bs-toggle="modal"
              data-bs-target="#addpayment"
            >
              <img src="assets/img/icons/plus.svg" alt="img" className="me-1" />
              Add New Currency
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
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
                    <th>Currency name</th>
                    <th>Currency code</th>
                    <th>Currency symbol</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
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
                    <td>India - Indian rupee</td>
                    <td>INR</td>
                    <td>₹</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user1"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user1" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="text-end">
                      <a
                        className="me-3"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#editpayment"
                      >
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
                    <td>US dollar</td>
                    <td>USD </td>
                    <td>$</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user2"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user2" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="text-end">
                      <a
                        className="me-3"
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#editpayment"
                      >
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
  