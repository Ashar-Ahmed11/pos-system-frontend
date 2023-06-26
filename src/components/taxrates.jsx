export const Taxrates = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Tax Rates</h4>
            <h6>Manage Tax Rates</h6>
          </div>
          <div className="page-btn">
            <a
              className="btn btn-added"
              data-bs-toggle="modal"
              data-bs-target="#addpayment"
            >
              <img src="assets/img/icons/plus.svg" alt="img" className="me-1" />
              Add New Tax Rates
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
                    <th>Tax name</th>
                    <th>Tax (%)</th>
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
                    <td>SGST 9% </td>
                    <td>9.00</td>
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
                    <td>ISGT 9%</td>
                    <td>9.00</td>
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
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>IGST 4.5% </td>
                    <td>4.50</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user3" className="check" />
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
                    <td>SGST 4.5% </td>
                    <td>4.50</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user10"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user10" className="checktoggle">
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
  