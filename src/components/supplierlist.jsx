export const Supplierlist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Supplier List</h4>
            <h6>Manage your Supplier</h6>
          </div>
          <div className="page-btn">
            <a href="addsupplier.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" />
              Add Supplier
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
                      <input type="text" placeholder="Enter Supplier Code" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Supplier" />
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
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Supplier Name</th>
                    <th>code</th>
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Apex Computers</a>
                    </td>
                    <td>201</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="b8ccd0d7d5d9cbf8ddc0d9d5c8d4dd96dbd7d5"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>China</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Modern Automobile</a>
                    </td>
                    <td>202</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="f794828483989a9285b7928f969a879b92d994989a"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>USA</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">AIM Infotech</a>
                    </td>
                    <td>521</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="83e0f6f0f7eceee6f1c3e6fbe2eef3efe6ade0ecee"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>USA</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Best Power Tools</a>
                    </td>
                    <td>555</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="abc9d9dec0c7c2c5ebced3cac6dbc7ce85c8c4c6"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Thailand</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">AIM Infotech</a>
                    </td>
                    <td>325</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="1f5d7a697a6d73665f7a677e726f737a317c7072"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Phuket island</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Best Power Tools</a>
                    </td>
                    <td>589</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="38704d5a5d4a785d40595548545d165b5755"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Germany</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Apex Computers</a>
                    </td>
                    <td>254</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="6c0f191f180301091e2c09140d011c0009420f0301"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Angola</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Vinayak Tools</a>
                    </td>
                    <td>681</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="305a5f585e705548515d405c551e535f5d"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Albania</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Best Power Tools</a>
                    </td>
                    <td>555</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="83e1f1f6e8efeaedc3e6fbe2eef3efe6ade0ecee"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Thailand</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">AIM Infotech</a>
                    </td>
                    <td>325</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="b5f7d0c3d0c7d9ccf5d0cdd4d8c5d9d09bd6dad8"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Phuket island</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Best Power Tools</a>
                    </td>
                    <td>589</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="d29aa7b0b7a092b7aab3bfa2beb7fcb1bdbf"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Germany</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Apex Computers</a>
                    </td>
                    <td>254</td>
                    <td>+12163547758 </td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="9af9efe9eef5f7ffe8daffe2fbf7eaf6ffb4f9f5f7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Angola</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
                        <img src="assets/img/product/noimage.png" alt="product" />
                      </a>
                      <a href="javascript:void(0);">Vinayak Tools</a>
                    </td>
                    <td>681</td>
                    <td>123-456-888</td>
                    <td>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="bad0d5d2d4fadfc2dbd7cad6df94d9d5d7"
                      >
                        [email&nbsp;protected]
                      </a>
                    </td>
                    <td>Albania</td>
                    <td>
                      <a className="me-3" href="editsupplier.html">
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
  