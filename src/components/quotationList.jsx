export const QuotationList = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Quotation List</h4>
            <h6>Manage your Quotations</h6>
          </div>
          <div className="page-btn">
            <a href="addquotation.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-2" />{" "}
              Add Quotation
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
                      <input type="text" placeholder="Enter Reference " />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Customer</option>
                        <option>Customer1</option>
                      </select>
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
                    <th>Product Name</th>
                    <th>Reference</th>
                    <th>Custmer Name</th>
                    <th>Status</th>
                    <th>Grand Total ($)</th>
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
                          src="assets/img/product/product1.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Macbook pro</a>
                    </td>
                    <td>PT001</td>
                    <td>walk-in-customer</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>550</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product2.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Orange</a>
                    </td>
                    <td>PT002</td>
                    <td>walk-in-customer</td>
                    <td>
                      <span className="badges bg-lightyellow">Ordered</span>
                    </td>
                    <td>410</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product4.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Stawberry</a>
                    </td>
                    <td>PT003</td>
                    <td>walk-in-customer</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product5.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Avocat</a>
                    </td>
                    <td>PT004</td>
                    <td>John Smith</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>500</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product6.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Macbook Pro</a>
                    </td>
                    <td>PT005</td>
                    <td>Beverly</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>1050</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product7.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Apple Earpods</a>
                    </td>
                    <td>PT006</td>
                    <td>B. Huber</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>2530</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">iPhone 11 </a>
                    </td>
                    <td>PT007</td>
                    <td>Thomas</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>550</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">samsung </a>
                    </td>
                    <td>PT008</td>
                    <td>Benjamin</td>
                    <td>
                      <span className="badges bg-lightgreen">Ordered</span>
                    </td>
                    <td>550</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product10.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Unpaired gray</a>
                    </td>
                    <td>PT0010</td>
                    <td>James</td>
                    <td>
                      <span className="badges bg-lightred">Pending</span>
                    </td>
                    <td>210</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product7.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Apple Earpods</a>
                    </td>
                    <td>PT006</td>
                    <td>B. Huber</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>2530</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">iPhone 11 </a>
                    </td>
                    <td>PT007</td>
                    <td>Thomas</td>
                    <td>
                      <span className="badges bg-lightgreen">Sent</span>
                    </td>
                    <td>550</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">samsung </a>
                    </td>
                    <td>PT008</td>
                    <td>Benjamin</td>
                    <td>
                      <span className="badges bg-lightgreen">Ordered</span>
                    </td>
                    <td>550</td>
                    <td>
                      <a className="me-3" href="editquotation.html">
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
  