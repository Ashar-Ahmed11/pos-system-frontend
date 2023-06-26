export const Purchaseorderreport = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Purchase order report</h4>
            <h6>Manage your Purchase order report</h6>
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
                      <div className="input-groupicon">
                        <input
                          type="text"
                          placeholder="From Date"
                          className="datetimepicker"
                        />
                        <div className="addonset">
                          <img src="assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="input-groupicon">
                        <input
                          type="text"
                          placeholder="To Date"
                          className="datetimepicker"
                        />
                        <div className="addonset">
                          <img src="assets/img/icons/calendars.svg" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <select className="select">
                        <option>Choose Suppliers</option>
                        <option>Suppliers</option>
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
              <table className="table datanew">
                <thead>
                  <tr>
                    <th>
                      <label className="checkboxs">
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
                    </th>
                    <th>Product Name</th>
                    <th>Purchased amount</th>
                    <th>Purchased QTY</th>
                    <th>Instock QTY</th>
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
                      <a className="product-img">
                        <img
                          src="assets/img/product/product1.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Macbook pro</a>
                    </td>
                    <td>38698.00</td>
                    <td>1248</td>
                    <td>1356</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product2.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Orange</a>
                    </td>
                    <td>36080.00</td>
                    <td>110</td>
                    <td>131</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product3.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Pineapple</a>
                    </td>
                    <td>21000.00</td>
                    <td>106</td>
                    <td>131</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product4.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Strawberry</a>
                    </td>
                    <td>11000.00</td>
                    <td>105</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product5.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Sunglasses</a>
                    </td>
                    <td>10600.00</td>
                    <td>105</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product6.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Unpaired gray</a>
                    </td>
                    <td>9984.00</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product7.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Avocat</a>
                    </td>
                    <td>4500.00 </td>
                    <td>41</td>
                    <td>29</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Banana</a>
                    </td>
                    <td>900.00 </td>
                    <td>28</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Earphones</a>
                    </td>
                    <td>500.00</td>
                    <td>20</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Banana</a>
                    </td>
                    <td>900.00 </td>
                    <td>28</td>
                    <td>24</td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks" />
                      </label>
                    </td>
                    <td className="productimgname">
                      <a className="product-img">
                        <img
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                      <a href="javascript:void(0);">Earphones</a>
                    </td>
                    <td>500.00</td>
                    <td>20</td>
                    <td>11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  