export const Editquotation = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Quotation Edit</h4>
            <h6>Add/Update Quotation</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Customer Name</label>
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-10">
                      <select className="select">
                        <option>Thomas</option>
                        <option>Customer</option>
                      </select>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                      <div className="add-icon">
                        <a href="javascript:void(0);">
                          <img src="assets/img/icons/plus1.svg" alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Quotation Date </label>
                  <div className="input-groupicon">
                    <input
                      type="text"
                      className="datetimepicker"
                      defaultValue="2/27/2022"
                    />
                    <div className="addonset">
                      <img src="assets/img/icons/calendars.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Reference No.</label>
                  <input type="text" defaultValue={555444} />
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-12">
                <div className="form-group">
                  <label>Product Name</label>
                  <div className="input-groupicon">
                    <input
                      type="text"
                      placeholder="Scan/Search Product by code and select..."
                    />
                    <div className="addonset">
                      <img src="assets/img/icons/scanners.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Net Unit Price($) </th>
                      <th>Stock</th>
                      <th>Qty</th>
                      <th>Discount($) </th>
                      <th>Tax % </th>
                      <th className="text-end">Subtotal ($)</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="productimgname">
                        <a className="product-img">
                          <img
                            src="assets/img/product/product7.jpg"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Apple Earpods</a>
                      </td>
                      <td>150</td>
                      <td>500</td>
                      <td>500</td>
                      <td>100</td>
                      <td>250</td>
                      <td className="text-end">500</td>
                      <td>
                        <a href="javascript:void(0);" className="delete-set">
                          <img src="assets/img/icons/delete.svg" alt="svg" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="productimgname">
                        <a className="product-img">
                          <img
                            src="assets/img/product/product6.jpg"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Macbook Pro</a>
                      </td>
                      <td>15.00</td>
                      <td>6000.00</td>
                      <td>100.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td className="text-end">1000.00</td>
                      <td>
                        <a href="javascript:void(0);" className="delete-set">
                          <img src="assets/img/icons/delete.svg" alt="svg" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 float-md-right">
                <div className="total-order">
                  <ul>
                    <li>
                      <h4>Order Tax</h4>
                      <h5>$ 0.00 (0.00%)</h5>
                    </li>
                    <li>
                      <h4>Discount </h4>
                      <h5>$ 0.00</h5>
                    </li>
                    <li>
                      <h4>Shipping</h4>
                      <h5>$ 0.00</h5>
                    </li>
                    <li className="total">
                      <h4>Grand Total</h4>
                      <h5>$ 0.00</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Order Tax</label>
                  <input type="text" defaultValue={10} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Discount</label>
                  <input type="text" defaultValue={20} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Shipping</label>
                  <input type="text" defaultValue={10} />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Status</label>
                  <select className="select">
                    <option>Sent</option>
                    <option>Inprogress</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-lg-12">
                <a href="javascript:void(0);" className="btn btn-submit me-2">
                  Update
                </a>
                <a href="quotationList.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  