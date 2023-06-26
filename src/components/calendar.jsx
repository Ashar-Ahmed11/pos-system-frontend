export const Calendar = () => (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="row align-items-center w-100">
            <div className="col-lg-10 col-sm-12">
              <h3 className="page-title">Calendar</h3>
            </div>
            <div className="col-lg-2 col-sm-12">
              <a
                href="javascript:void(0);"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_event"
              >
                Create Event
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <h4 className="card-title">Drag &amp; Drop Event</h4>
            <div id="calendar-events" className="mb-3">
              <div className="calendar-events" data-class="bg-info">
                <i className="fas fa-circle text-info" /> My Event One
              </div>
              <div className="calendar-events" data-class="bg-success">
                <i className="fas fa-circle text-success" /> My Event Two
              </div>
              <div className="calendar-events" data-class="bg-danger">
                <i className="fas fa-circle text-danger" /> My Event Three
              </div>
              <div className="calendar-events" data-class="bg-warning">
                <i className="fas fa-circle text-warning" /> My Event Four
              </div>
            </div>
            <div className="checkbox  mb-3">
              <input id="drop-remove" type="checkbox" />
              <label htmlFor="drop-remove">Remove after drop</label>
            </div>
            <a
              href="javascript:void(0);"
              data-bs-toggle="modal"
              data-bs-target="#add_new_event"
              className="btn mb-3 btn-primary btn-block w-100"
            >
              <i className="fas fa-plus" /> Add Category
            </a>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="card bg-white">
              <div className="card-body">
                <div id="calendar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  