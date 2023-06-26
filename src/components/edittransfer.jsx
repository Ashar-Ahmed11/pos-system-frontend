export const Edittransfer = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Edit Transfer</h4>
            <h6>Transfer your stocks to one store another store.</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Date </label>
                  <div className="input-groupicon">
                    <input
                      type="text"
                      defaultValue="10-03-2022"
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
                  <label>From</label>
                  <select className="select">
                    <option>Store 1</option>
                    <option>Store 2</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>To</label>
                  <select className="select">
                    <option>Store 2</option>
                    <option>Store 1</option>
                  </select>
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
                      <th>Price</th>
                      <th>Stock </th>
                      <th>Discount</th>
                      <th>Tax </th>
                      <th>Total Cost ($)</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bor-b1">
                      <td className="productimgname">
                        <a className="product-img">
                          <img
                            src="assets/img/product/product7.jpg"
                            alt="product"
                          />
                        </a>
                        <a href="javascript:void(0);">Apple Earpods</a>
                      </td>
                      <td>
                        <div className="input-group form-group mb-0">
                          <a className="scanner-set input-group-text">
                            <img src="assets/img/icons/plus1.svg" alt="img" />
                          </a>
                          <input
                            type="text"
                            defaultValue={1}
                            className="calc-no"
                          />
                          <a className="scanner-set input-group-text">
                            <img src="assets/img/icons/minus.svg" alt="img" />
                          </a>
                        </div>
                      </td>
                      <td>1500.00</td>
                      <td>50.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>1500.00</td>
                      <td>
                        <a href="javascript:void(0);">
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
                      <h5>$ 2000.00</h5>
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
                    <option>Sent</option>
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
                <a href="transferlist.html" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  