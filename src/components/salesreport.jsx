export const Salesreport = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Sales Report</h4>
            <h6>Manage your Sales Report</h6>
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
                    <th>SKU</th>
                    <th> Category</th>
                    <th>Brand</th>
                    <th>Sold amount</th>
                    <th>Sold qty</th>
                    <th>Instock qty</th>
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
                    <td>PT001</td>
                    <td>Computer</td>
                    <td>N/D</td>
                    <td>1500.00</td>
                    <td>1</td>
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
                    <td>PT002</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>1</td>
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
                    <td>PT003</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>3</td>
                    <td>72</td>
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
                    <td>PT004</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>1</td>
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
                    <td>PT005</td>
                    <td>Accessories</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>1</td>
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
                    <td>PT006</td>
                    <td>Shoes</td>
                    <td>Adidas</td>
                    <td>100.00</td>
                    <td>3</td>
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
                    <td>PT007</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>5.00</td>
                    <td>5</td>
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
                    <td>PT008</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>1</td>
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
                    <td>PT009</td>
                    <td>Computers</td>
                    <td>N/D</td>
                    <td>15.00</td>
                    <td>2</td>
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
                    <td>PT010</td>
                    <td>Health Care </td>
                    <td>N/D</td>
                    <td>5.00</td>
                    <td>5</td>
                    <td>16</td>
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
                    <td>PT006</td>
                    <td>Shoes</td>
                    <td>Adidas</td>
                    <td>100.00</td>
                    <td>1</td>
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
                    <td>PT007</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>5.00</td>
                    <td>2</td>
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
                    <td>PT008</td>
                    <td>Fruits</td>
                    <td>N/D</td>
                    <td>10.00</td>
                    <td>2</td>
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
                    <td>PT009</td>
                    <td>Computers</td>
                    <td>N/D</td>
                    <td>15.00</td>
                    <td>2</td>
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
                    <td>PT010</td>
                    <td>Health Care </td>
                    <td>N/D</td>
                    <td>5.00</td>
                    <td>4</td>
                    <td>16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  