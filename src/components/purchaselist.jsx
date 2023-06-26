export const Purchaselist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>PURCHASE LIST</h4>
            <h6>Manage your purchases</h6>
          </div>
          <div className="page-btn">
            <a href="addpurchase.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" />
              Add New Purchases
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
                  <div className="col-lg col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="datetimepicker cal-icon"
                        placeholder="Choose Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Reference" />
                    </div>
                  </div>
                  <div className="col-lg col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Supplier</option>
                        <option>Supplier</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Status</option>
                        <option>Inprogress</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Payment Status</option>
                        <option>Payment Status</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12">
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
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Supplier Name</th>
                    <th>Reference</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Grand Total</th>
                    <th>Paid</th>
                    <th>Due</th>
                    <th>Payment Status</th>
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
                    <td className="text-bolds">Apex Computers</td>
                    <td>PT001</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>550</td>
                    <td>120</td>
                    <td>550</td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Modern Automobile</td>
                    <td>PT002</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>410</td>
                    <td>410</td>
                    <td>410</td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">AIM Infotech</td>
                    <td>PT003</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">Unpaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT004</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">Unpaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT005</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">UnPaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT006</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightgreen">paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Apex Computers</td>
                    <td>PT007</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightyellow">Ordered</span>
                    </td>
                    <td>1000</td>
                    <td>500</td>
                    <td>1000</td>
                    <td>
                      <span className="badges bg-lightyellow">Partial</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Apex Computers</td>
                    <td>PT008</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>550</td>
                    <td>120</td>
                    <td>550</td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Modern Automobile</td>
                    <td>PT009</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>410</td>
                    <td>410</td>
                    <td>410</td>
                    <td>
                      <span className="badges bg-lightgreen">Paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">AIM Infotech</td>
                    <td>PT010</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">Unpaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT011</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">Unpaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT012</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightred">UnPaid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Best Power Tools</td>
                    <td>PT013</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightgreen">Received</span>
                    </td>
                    <td>210</td>
                    <td>120</td>
                    <td>210</td>
                    <td>
                      <span className="badges bg-lightgreen">paid</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
                    <td className="text-bolds">Apex Computers</td>
                    <td>PT014</td>
                    <td>19 Nov 2022</td>
                    <td>
                      <span className="badges bg-lightyellow">Ordered</span>
                    </td>
                    <td>1000</td>
                    <td>500</td>
                    <td>1000</td>
                    <td>
                      <span className="badges bg-lightyellow">Partial</span>
                    </td>
                    <td>
                      <a className="me-3" href="editpurchase.html">
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
  