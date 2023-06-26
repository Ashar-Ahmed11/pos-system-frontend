export const Rating = () => (
    <div className="page-wrapper cardhead">
      <div className="content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Rating</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Rating</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Default Rating</h5>
              </div>
              <div className="card-body">
                <p>This is the most basic example of ratings.</p>
                <div className="rating rating-default" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Score</h5>
              </div>
              <div className="card-body">
                <p>Stars with a saved rating.</p>
                <div className="rating rating-score" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Max Number</h5>
              </div>
              <div className="card-body">
                <p>Change the max numbers of stars</p>
                <div className="rating rating-number" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Read Only</h5>
              </div>
              <div className="card-body">
                <p>Prevent users from voting</p>
                <div className="rating rating-read-only2" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Half Rating</h5>
              </div>
              <div className="card-body">
                <p>You can represent a float score as a half star icon.</p>
                <div className="rating rating-half-enable" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Icon</h5>
              </div>
              <div className="card-body">
                <p>Use any icon you want.</p>
                <div className="rating rating-custom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  