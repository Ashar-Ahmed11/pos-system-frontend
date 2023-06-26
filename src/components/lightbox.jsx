export const Lightbox = () => (
    <div className="page-wrapper cardhead">
      <div className="content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Lightbox</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Lightbox</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Single Image Lightbox</div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <a href="assets/img/img-01.jpg" className="image-popup">
                      <img
                        src="assets/img/img-01.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <a href="assets/img/img-02.jpg" className="image-popup">
                      <img
                        src="assets/img/img-02.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Image with Description</div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-2 mb-md-0">
                    <a
                      href="assets/img/img-03.jpg"
                      className="image-popup-desc"
                      data-title="Title 01"
                      data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                    >
                      <img
                        src="assets/img/img-03.jpg"
                        className="img-fluid"
                        alt="work-thumbnail"
                      />
                    </a>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <a
                      href="assets/img/img-04.jpg"
                      className="image-popup-desc"
                      data-title="Title 02"
                      data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                    >
                      <img
                        src="assets/img/img-04.jpg"
                        className="img-fluid"
                        alt="work-thumbnail"
                      />
                    </a>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <a
                      href="assets/img/img-05.jpg"
                      className="image-popup-desc"
                      data-title="Title 03"
                      data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                    >
                      <img
                        src="assets/img/img-05.jpg"
                        className="img-fluid"
                        alt="work-thumbnail"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  