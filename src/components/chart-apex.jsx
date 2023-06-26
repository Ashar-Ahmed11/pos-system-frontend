export const Chatapex = () => (
    <div className="page-wrapper cardhead">
      <div className="content ">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Charts</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Charts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Apex Simple</h5>
              </div>
              <div className="card-body">
                <div id="s-line" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Area Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-line-area" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Column Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-col" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Column Stacked Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-col-stacked" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Bar Chart</h5>
              </div>
              <div className="card-body">
                <div id="s-bar" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Mixed Chart</h5>
              </div>
              <div className="card-body">
                <div id="mixed-chart" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Donut Chart</h5>
              </div>
              <div className="card-body">
                <div id="donut-chart" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Radial Chart</h5>
              </div>
              <div className="card-body">
                <div id="radial-chart" className="chart-set" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  