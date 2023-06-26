export const Subcategorylist = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Sub Category list</h4>
            <h6>View/Search product Category</h6>
          </div>
          <div className="page-btn">
            <a href="subaddcategory.html" className="btn btn-added">
              <img src="assets/img/icons/plus.svg" className="me-2" alt="img" />{" "}
              Add Sub Category
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
                      <label>Category</label>
                      <select className="select">
                        <option>Choose Category</option>
                        <option>Computers</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Sub Category</label>
                      <select className="select">
                        <option>Choose Sub Category</option>
                        <option>Fruits</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Category Code</label>
                      <select className="select">
                        <option>CT001</option>
                        <option>CT002</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div className="form-group">
                      <label>&nbsp;</label>
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
                    <th>Image</th>
                    <th>Category</th>
                    <th>Parent category</th>
                    <th>Category Code</th>
                    <th>Description</th>
                    <th>Created By</th>
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product1.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Computers</td>
                    <td>Computers</td>
                    <td>CT001</td>
                    <td>Computers Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product2.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT002</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product3.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT003</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product4.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT004</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product5.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Accessories</td>
                    <td>Accessories</td>
                    <td>CT005</td>
                    <td>Accessories Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product6.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Shoes</td>
                    <td>Shoes</td>
                    <td>CT006</td>
                    <td>Shoes Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product7.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT007</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT008</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Computers</td>
                    <td>Computers</td>
                    <td>CT009</td>
                    <td>Computers Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product10.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Health Care </td>
                    <td>Health Care </td>
                    <td>CT0010</td>
                    <td>Health Care Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product4.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT004</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product5.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Accessories</td>
                    <td>Accessories</td>
                    <td>CT005</td>
                    <td>Accessories Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product6.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Shoes</td>
                    <td>Shoes</td>
                    <td>CT006</td>
                    <td>Shoes Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product7.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT007</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product8.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Fruits</td>
                    <td>Fruits</td>
                    <td>CT008</td>
                    <td>Fruits Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product9.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Computers</td>
                    <td>Computers</td>
                    <td>CT009</td>
                    <td>Computers Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
                    <td>
                      <a className="product-img">
                        <img
                          src="assets/img/product/product10.jpg"
                          alt="product"
                        />
                      </a>
                    </td>
                    <td>Health Care </td>
                    <td>Health Care </td>
                    <td>CT0010</td>
                    <td>Health Care Description</td>
                    <td>Admin</td>
                    <td>
                      <a className="me-3" href="editsubcategory.html">
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
  