export const ChartMorris = () => (
    <div className="page-wrapper cardhead">
      <div className="content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Morris Chart</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Morris Charts</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Bar Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisBar1" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Stacked Bar Chart </div>
              </div>
              <div className="card-body">
                <div id="morrisBar3" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisLine1" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Area Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisArea1" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisBar6" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisBar7" className="chart-set" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Donut Chart</div>
              </div>
              <div className="card-body">
                <div id="morrisDonut1" className="chart-set" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  