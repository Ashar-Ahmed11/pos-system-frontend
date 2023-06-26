export const Addpurchase = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Purchase Add</h4>
            <h6>Add/Update Purchase</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Supplier Name</label>
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-10">
                      <select className="select">
                        <option>Select</option>
                        <option>Supplier</option>
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
                  <label>Purchase Date </label>
                  <div className="input-groupicon">
                    <input
                      type="text"
                      placeholder="DD-MM-YYYY"
                      className="datetimepicker"
                    />
                    <div className="addonset">
                      <img src="assets/img/icons/calendars.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Product Name</label>
                  <select className="select">
                    <option>Choose</option>
                    <option>Supplier Name</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Reference No.</label>
                  <input type="text" />
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
                      <th>Product Name</th>
                      <th>QTY</th>
                      <th>Purchase Price($) </th>
                      <th>Discount($) </th>
                      <th>Tax %</th>
                      <th>Tax Amount($)</th>
                      <th className="text-end">Unit Cost($)</th>
                      <th className="text-end">Total Cost ($) </th>
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
                      <td>10.00</td>
                      <td>2000.00</td>
                      <td>500.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td className="text-end">2000.00</td>
                      <td className="text-end">2000.00</td>
                      <td>
                        <a className="delete-set">
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
                      <td className="text-end">1000.00</td>
                      <td>
                        <a className="delete-set">
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
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Discount</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Shipping</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Status</label>
                  <select className="select">
                    <option>Choose Status</option>
                    <option>Completed</option>
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
                  Submit
                </a>
                <a href="purchaselist.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  