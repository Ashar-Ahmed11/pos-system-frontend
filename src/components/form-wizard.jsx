export const Formwizard = () => (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Form Wizard</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Form Wizard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Basic Wizard</h4>
              </div>
              <div className="card-body">
                <div id="basic-pills-wizard" className="twitter-bs-wizard">
                  <ul className="twitter-bs-wizard-nav">
                    <li className="nav-item">
                      <a
                        href="#seller-details"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Seller Details"
                        >
                          <i className="far fa-user" />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#company-document"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Company Document"
                        >
                          <i className="fas fa-map-pin" />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#bank-detail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Bank Details"
                        >
                          <i className="fas fa-credit-card" />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content twitter-bs-wizard-tab-content">
                    <div className="tab-pane" id="seller-details">
                      <div className="mb-4">
                        <h5>Enter Your Personal Details</h5>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="basicpill-firstname-input"
                                className="form-label"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="basicpill-firstname-input"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="basicpill-lastname-input"
                                className="form-label"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="basicpill-lastname-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="basicpill-phoneno-input"
                                className="form-label"
                              >
                                Phone
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="basicpill-phoneno-input"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="basicpill-email-input"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="basicpill-email-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <ul className="pager wizard twitter-bs-wizard-pager-link">
                        <li className="next">
                          <a
                            href="javascript: void(0);"
                            className="btn btn-primary"
                            onclick="nextTab()"
                          >
                            Next <i className="bx bx-chevron-right ms-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="company-document">
                      <div>
                        <div className="mb-4">
                          <h5>Enter Your Address</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-pancard-input"
                                  className="form-label"
                                >
                                  Address 1
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-pancard-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-vatno-input"
                                  className="form-label"
                                >
                                  Address 2
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-vatno-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-cstno-input"
                                  className="form-label"
                                >
                                  Landmark
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cstno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-servicetax-input"
                                  className="form-label"
                                >
                                  Town
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-servicetax-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className="previous">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              <i className="bx bx-chevron-left me-1" /> Previous
                            </a>
                          </li>
                          <li className="next">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              Next <i className="bx bx-chevron-right ms-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane" id="bank-detail">
                      <div>
                        <div className="mb-4">
                          <h5>Payment Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-namecard-input"
                                  className="form-label"
                                >
                                  Name on Card
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-namecard-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Credit Card Type
                                </label>
                                <select className="form-select">
                                  <option selected="">Select Card Type</option>
                                  <option value="AE">American Express</option>
                                  <option value="VI">Visa</option>
                                  <option value="MC">MasterCard</option>
                                  <option value="DI">Discover</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-cardno-input"
                                  className="form-label"
                                >
                                  Credit Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-cardno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-card-verification-input"
                                  className="form-label"
                                >
                                  Card Verification Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-card-verification-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="basicpill-expiration-input"
                                  className="form-label"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-expiration-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className="previous">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              <i className="bx bx-chevron-left me-1" /> Previous
                            </a>
                          </li>
                          <li className="float-end">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target=".confirmModal"
                            >
                              Save Changes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Wizard with Progressbar</h4>
              </div>
              <div className="card-body">
                <div id="progrss-wizard" className="twitter-bs-wizard">
                  <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                    <li className="nav-item">
                      <a
                        href="#progress-seller-details"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="User Details"
                        >
                          <i className="far fa-user" />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#progress-company-document"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Address Detail"
                        >
                          <i className="fas fa-map-pin" />
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#progress-bank-detail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        <div
                          className="step-icon"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Payment Details"
                        >
                          <i className="fas fa-credit-card" />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div id="bar" className="progress mt-4">
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                  </div>
                  <div className="tab-content twitter-bs-wizard-tab-content">
                    <div className="tab-pane" id="progress-seller-details">
                      <div className="mb-4">
                        <h5>User Details</h5>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="progresspill-firstname-input">
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="progresspill-firstname-input"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="progresspill-lastname-input">
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="progresspill-lastname-input"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="progresspill-phoneno-input">
                                Phone
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="progresspill-phoneno-input"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label htmlFor="progresspill-email-input">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="progresspill-email-input"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                      <ul className="pager wizard twitter-bs-wizard-pager-link">
                        <li className="next">
                          <a
                            href="javascript: void(0);"
                            className="btn btn-primary"
                            onclick="nextTab()"
                          >
                            Next <i className="bx bx-chevron-right ms-1" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="progress-company-document">
                      <div>
                        <div className="mb-4">
                          <h5>Location Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-pancard-input"
                                  className="form-label"
                                >
                                  Address Line 1
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-pancard-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-vatno-input"
                                  className="form-label"
                                >
                                  Address Line 2
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-vatno-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-cstno-input"
                                  className="form-label"
                                >
                                  Landmark
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-cstno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-servicetax-input"
                                  className="form-label"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-servicetax-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-companyuin-input"
                                  className="form-label"
                                >
                                  State
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-companyuin-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-declaration-input"
                                  className="form-label"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-declaration-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className="previous">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              <i className="bx bx-chevron-left me-1" /> Previous
                            </a>
                          </li>
                          <li className="next">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              Next <i className="bx bx-chevron-right ms-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane" id="progress-bank-detail">
                      <div>
                        <div className="mb-4">
                          <h5>Payment Details</h5>
                        </div>
                        <form>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-namecard-input"
                                  className="form-label"
                                >
                                  Name on Card
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-namecard-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Credit Card Type
                                </label>
                                <select className="form-select">
                                  <option selected="">Select Card Type</option>
                                  <option value="AE">American Express</option>
                                  <option value="VI">Visa</option>
                                  <option value="MC">MasterCard</option>
                                  <option value="DI">Discover</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-cardno-input"
                                  className="form-label"
                                >
                                  Credit Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-cardno-input"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-card-verification-input"
                                  className="form-label"
                                >
                                  Card Verification Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-card-verification-input"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="progresspill-expiration-input"
                                  className="form-label"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="progresspill-expiration-input"
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                          <li className="previous">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              onclick="nextTab()"
                            >
                              <i className="bx bx-chevron-left me-1" /> Previous
                            </a>
                          </li>
                          <li className="float-end">
                            <a
                              href="javascript: void(0);"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target=".confirmModal"
                            >
                              Save Changes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  