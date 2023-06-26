export const Storelist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Store List</h4>
            <h6>Manage your Store</h6>
          </div>
          <div className="page-btn">
            <a href="addstore.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-2" />
              Add Store
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
                      <input type="text" placeholder="Store Name" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
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
                    <th>Store name </th>
                    <th>User name </th>
                    <th>Phone</th>
                    <th>email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td>Thomas</td>
                    <td>Thomas21 </td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="b3c7dbdcded2c0f3d6cbd2dec3dfd69dd0dcde"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user1" className="check" />
                        <label htmlFor="user1" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Benjamin</td>
                    <td>504Benjamin </td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="0c6f797f786361697e4c69746d617c6069226f6361"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
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
                      <a className="me-3" href="editstore.html">
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
                    <td>James</td>
                    <td>James 524 </td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="4329222e263003263b222e332f266d202c2e"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
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
                      <a className="me-3" href="editstore.html">
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
                    <td>Bruklin</td>
                    <td>Bruklin2022</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="701202051b1c191e301508111d001c155e131f1d"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
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
                      <a className="me-3" href="editstore.html">
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
                    <td>Franklin</td>
                    <td>BeverlyWIN25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="ca88afbcafb8a6b38aafb2aba7baa6afe4a9a5a7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user5" className="check" />
                        <label htmlFor="user5" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>B. Huber </td>
                    <td>BeverlyWIN25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="662e1304031426031e070b160a034805090b"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user6" className="check" />
                        <label htmlFor="user6" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Alwin</td>
                    <td>Alwin243</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="a0c3d5d3d4cfcdc5d2e0c5d8c1cdd0ccc58ec3cfcd"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user7" className="check" />
                        <label htmlFor="user7" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Fred john</td>
                    <td>FredJ25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="fc96939492bc99849d918c9099d29f9391"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input type="checkbox" id="user15" className="check" />
                        <label htmlFor="user15" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Rasmussen </td>
                    <td>Cras56</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="d88ab9abb5adababbdb698bda0b9b5a8b4bdf6bbb7b5"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
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
                      <a className="me-3" href="editstore.html">
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
                    <td>Grace </td>
                    <td>Grace2022</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e1829492958e8c8493a18499808c918d84cf828e8c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
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
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Rasmussen </td>
                    <td>Cras56</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="277546544a525454424967425f464a574b420944484a"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user19"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user19" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
                    <td>Grace </td>
                    <td>Grace2022</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="11726462657e7c7463517469707c617d743f727e7c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>
                      <div className="status-toggle d-flex justify-content-between align-items-center">
                        <input
                          type="checkbox"
                          id="user18"
                          className="check"
                          defaultChecked=""
                        />
                        <label htmlFor="user18" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td>
                      <a className="me-3" href="editstore.html">
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
  