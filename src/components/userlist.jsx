export const Userlist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User List</h4>
            <h6>Manage your User</h6>
          </div>
          <div className="page-btn">
            <a href="adduser.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-2" />
              Add User
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
                      <input type="text" placeholder="Enter User Name" />
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
                    <th>Profile</th>
                    <th>First name </th>
                    <th>Last name </th>
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
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer1.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Thomas</td>
                    <td>Thomas </td>
                    <td>Thomas21 </td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="42362a2d2f233102273a232f322e276c212d2f"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer2.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Benjamin</td>
                    <td>Franklin </td>
                    <td>504Benjamin </td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e685939592898b8394a6839e878b968a83c885898b"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer3.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>James</td>
                    <td>James </td>
                    <td>James 524 </td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="9ef4fff3fbeddefbe6fff3eef2fbb0fdf1f3"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer4.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Bruklin</td>
                    <td>Bruklin </td>
                    <td>Bruklin2022</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="781a0a0d13141116381d00191508141d561b1715"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer5.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Franklin</td>
                    <td>Jacob </td>
                    <td>BeverlyWIN25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="aceec9dac9dec0d5ecc9d4cdc1dcc0c982cfc3c1"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer6.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>B. Huber </td>
                    <td>Jacob </td>
                    <td>BeverlyWIN25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="7b330e191e093b1e031a160b171e55181416"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer7.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Alwin</td>
                    <td>Alwin </td>
                    <td>Alwin243</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="0764727473686a627547627f666a776b622964686a"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer8.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fred john</td>
                    <td>john </td>
                    <td>FredJ25</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="bad0d5d2d4fadfc2dbd7cad6df94d9d5d7"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer1.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Rasmussen </td>
                    <td>Gothic </td>
                    <td>Cras56</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="3a685b49574f49495f547a5f425b574a565f14595557"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer2.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Grace </td>
                    <td>Halena </td>
                    <td>Grace2022</td>
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer3.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Rasmussen </td>
                    <td>Gothic </td>
                    <td>Cras56</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="702211031d050303151e301508111d001c155e131f1d"
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
                      <a className="me-3" href="edituser.html">
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
                    <td className="productimgname">
                      <a href="javascript:void(0);" className="product-img">
                        <img
                          src="assets/img/customer/customer4.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Grace </td>
                    <td>Halena </td>
                    <td>Grace2022</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="3e5d4b4d4a51535b4c7e5b465f534e525b105d5153"
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
                      <a className="me-3" href="edituser.html">
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
  