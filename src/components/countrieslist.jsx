export const Countrieslist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Country List</h4>
            <h6>Manage your Countries</h6>
          </div>
          <div className="page-btn">
            <a href="newcountry.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-2" />
              Add Country
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
                      <select className="select">
                        <option>Choose Country</option>
                        <option>USA</option>
                        <option>India</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Region</option>
                        <option>Region</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Status</option>
                        <option>Disable</option>
                        <option>Enable</option>
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
                    <th>Country Name</th>
                    <th>Region</th>
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
                    <td>China</td>
                    <td>Beijing </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user1" className="check" />
                        <label htmlFor="user1" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>USA</td>
                    <td>Newyork </td>
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
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Athens</td>
                    <td>Greece </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user3"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user3" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Thailand</td>
                    <td>Bangkok </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user4"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user4" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Phuket island</td>
                    <td>Mueang Phuket </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user5" className="check" />
                        <label htmlFor="user5" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Germany</td>
                    <td>Berlin</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user6" className="check" />
                        <label htmlFor="user6" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Angola</td>
                    <td>Luanda</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user7" className="check" />
                        <label htmlFor="user7" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Albania</td>
                    <td>Albania </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user8" className="check" />
                        <label htmlFor="user8" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Turkey </td>
                    <td>Ankara </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user9"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user9" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Phuket island</td>
                    <td>Mueang Phuket </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user10" className="check" />
                        <label htmlFor="user10" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Germany</td>
                    <td>Berlin</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user11" className="check" />
                        <label htmlFor="user11" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Angola</td>
                    <td>Luanda</td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user12" className="check" />
                        <label htmlFor="user12" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Albania</td>
                    <td>Albania </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user15" className="check" />
                        <label htmlFor="user15" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
                    <td>Turkey </td>
                    <td>Ankara </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user17"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user17" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editcountry.html">
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
  