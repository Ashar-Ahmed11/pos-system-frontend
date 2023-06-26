export const TransferList = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Transfer List</h4>
            <h6>Transfer your stocks to one store another store.</h6>
          </div>
          <div className="page-btn">
            <a href="addtransfer.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-2" />
              Add Transfer
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
                        <option>Choose Status</option>
                        <option>Inprogress</option>
                        <option>Complete</option>
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
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>From</th>
                    <th>Paid</th>
                    <th>items</th>
                    <th>Grand total</th>
                    <th>Status</th>
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
                    <td>19 Nov 2022</td>
                    <td>TR0101</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>1500.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0102</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>45000.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0103</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>2400.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0104</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>2400.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0105</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>2400.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0106</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>8456.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0107</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>150.00</td>
                    <td>
                      <span className="badges bg-lightgreen">Completed</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0108</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>365.00</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0109</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>365.00</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR01010</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>365.00</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0111</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>365.00</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
                    <td>19 Nov 2022</td>
                    <td>TR0112</td>
                    <td>Store1</td>
                    <td>Store2</td>
                    <td>10.00</td>
                    <td>365.00</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>
                      <a className="me-3" href="edittransfer.html">
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
  