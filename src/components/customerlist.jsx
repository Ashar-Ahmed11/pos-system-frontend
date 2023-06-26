﻿export const Customerlist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Customer List</h4>
            <h6>Manage your Customers</h6>
          </div>
          <div className="page-btn">
            <a href="addcustomer.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" />
              Add Customer
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
                      <input type="text" placeholder="Enter Customer Code" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Customer Name" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Phone Number" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12  ms-auto">
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
                    <th>Customer Name</th>
                    <th>code</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>email</th>
                    <th>Country</th>
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
                      <a href="javascript:void(0);">Thomas</a>
                    </td>
                    <td>201</td>
                    <td>Thomas</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="1165797e7c7062517469707c617d743f727e7c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>USA</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">Benjamin</a>
                    </td>
                    <td>202</td>
                    <td>Benjamin</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="dcbfa9afa8b3b1b9ae9cb9a4bdb1acb0b9f2bfb3b1"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>USA</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">James</a>
                    </td>
                    <td>521</td>
                    <td>James</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6d0e181e190200081f2d08150c001d0108430e0200"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>USA</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">Bruklin</a>
                    </td>
                    <td>555</td>
                    <td>Bruklin</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="aeccdcdbc5c2c7c0eecbd6cfc3dec2cb80cdc1c3"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Thailand</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">Beverly</a>
                    </td>
                    <td>325</td>
                    <td>Beverly</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="0143647764736d78416479606c716d642f626e6c"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Phuket island</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">B. Huber</a>
                    </td>
                    <td>589</td>
                    <td>B. Huber </td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="e8a09d8a8d9aa88d90898598848dc68b8785"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Germany</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>254</td>
                    <td>James Stawberry</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="1e7d6b6d6a71737b6c5e7b667f736e727b307d7173"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Angola</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);" className="product-imgs">
                        WC
                      </a>
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>681</td>
                    <td>Fred john</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="573d383f3917322f363a273b327934383a"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Albania</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">B. Huber</a>
                    </td>
                    <td>589</td>
                    <td>B. Huber </td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="7a320f181f083a1f021b170a161f54191517"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Germany</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>254</td>
                    <td>James Stawberry</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="caa9bfb9bea5a7afb88aafb2aba7baa6afe4a9a5a7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Angola</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);" className="product-imgs">
                        WC
                      </a>
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>681</td>
                    <td>Fred john</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6e040106002e0b160f031e020b400d0103"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Albania</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">B. Huber</a>
                    </td>
                    <td>589</td>
                    <td>B. Huber </td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="c68eb3a4a3b486a3bea7abb6aaa3e8a5a9ab"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Germany</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>254</td>
                    <td>James Stawberry</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="395a4c4a4d56545c4b795c41585449555c175a5654"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Angola</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
                      <a href="javascript:void(0);" className="product-imgs">
                        WC
                      </a>
                      <a href="javascript:void(0);">James Stawberry</a>
                    </td>
                    <td>681</td>
                    <td>Fred john</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="aec4c1c6c0eecbd6cfc3dec2cb80cdc1c3"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Albania</td>
                    <td>
                      <a className="me-3" href="editcustomer.html">
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
  