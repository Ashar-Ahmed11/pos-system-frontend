import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <>
    
    <div class="header">

<div class="header-left active">
  <a to="/index" class="logo">
    <img src="assets/img/logo.png" alt="" />
  </a>
  <a to="/index" class="logo-small">
    <img src="assets/img/logo-small.png" alt="" />
  </a>
  <a id="toggle_btn" href="javascript:void(0);">
  </a>
</div>

<a id="mobile_btn" class="mobile_btn" href="#sidebar">
  <span class="bar-icon">
    <span></span>
    <span></span>
    <span></span>
  </span>
</a>

<ul class="nav user-menu">

  <li class="nav-item">
    <div class="top-nav-search">
      <Link to="/javascript:void(0);" class="responsive-search">
        <i class="fa fa-search"></i>
      </Link>
      <form action="#">
        <div class="searchinputs">
          <input type="text" placeholder="Search Here ..." />
          <div class="search-addon">
            <span><img src="assets/img/icons/closes.svg" alt="img" /></span>
          </div>
        </div>
        <a class="btn" id="searchdiv"><img src="assets/img/icons/search.svg" alt="img" /></a>
      </form>
    </div>
  </li>


  <li class="nav-item dropdown has-arrow flag-nav">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
      <img src="assets/img/flags/us1.png" alt="" height="20" />
    </a>
    <div class="dropdown-menu dropdown-menu-right">
      <Link to="/javascript:void(0);" class="dropdown-item">
        <img src="assets/img/flags/us.png" alt="" height="16" /> English
      </Link>
      <Link to="/javascript:void(0);" class="dropdown-item">
        <img src="assets/img/flags/fr.png" alt="" height="16" /> French
      </Link>
      <Link to="/javascript:void(0);" class="dropdown-item">
        <img src="assets/img/flags/es.png" alt="" height="16" /> Spanish
      </Link>
      <Link to="/javascript:void(0);" class="dropdown-item">
        <img src="assets/img/flags/de.png" alt="" height="16" /> German
      </Link>
    </div>
  </li>


  <li class="nav-item dropdown">
    <Link to="/javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
      <img src="assets/img/icons/notification-bing.svg" alt="img" /> <span class="badge rounded-pill">4</span>
    </Link>
    <div class="dropdown-menu notifications">
      <div class="topnav-dropdown-header">
        <span class="notification-title">Notifications</span>
        <Link to="/javascript:void(0)" class="clear-noti"> Clear All </Link>
      </div>
      <div class="noti-content">
        <ul class="notification-list">
          <li class="notification-message">
            <Link to="/activities">
              <div class="media d-flex">
                <span class="avatar flex-shrink-0">
                  <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details"><span class="noti-title">John Doe</span> added new task <span class="noti-title">Patient appointment booking</span></p>
                  <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                </div>
              </div>
            </Link>
          </li>
          <li class="notification-message">
            <Link to="/activities">
              <div class="media d-flex">
                <span class="avatar flex-shrink-0">
                  <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details"><span class="noti-title">Tarah Shropshire</span> changed the task name <span class="noti-title">Appointment booking with payment gateway</span></p>
                  <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                </div>
              </div>
            </Link>
          </li>
          <li class="notification-message">
            <Link to="/activities">
              <div class="media d-flex">
                <span class="avatar flex-shrink-0">
                  <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details"><span class="noti-title">Misty Tison</span> added <span class="noti-title">Domenic Houston</span> and <span class="noti-title">Claire Mapes</span> to project <span class="noti-title">Doctor available module</span></p>
                  <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                </div>
              </div>
            </Link>
          </li>
          <li class="notification-message">
            <Link to="/activities">
              <div class="media d-flex">
                <span class="avatar flex-shrink-0">
                  <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details"><span class="noti-title">Rolland Webber</span> completed task <span class="noti-title">Patient and Doctor video conferencing</span></p>
                  <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                </div>
              </div>
            </Link>
          </li>
          <li class="notification-message">
            <Link to="/activities">
              <div class="media d-flex">
                <span class="avatar flex-shrink-0">
                  <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details"><span class="noti-title">Bernardo Galaviz</span> added new task <span class="noti-title">Private chat module</span></p>
                  <p class="noti-time"><span class="notification-time">2 days ago</span></p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div class="topnav-dropdown-footer">
        <Link to="/activities">View all Notifications</Link>
      </div>
    </div>
  </li>

  <li class="nav-item dropdown has-arrow main-drop">
    <Link to="/javascript:void(0);" class="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
      <span class="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
        <span class="status online"></span></span>
    </Link>
    <div class="dropdown-menu menu-drop-user">
      <div class="profilename">
        <div class="profileset">
          <span class="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
            <span class="status online"></span></span>
          <div class="profilesets">
            <h6>John Doe</h6>
            <h5>Admin</h5>
          </div>
        </div>
        <hr class="m-0" />
        <a class="dropdown-item" href="profile"> <i class="me-2" data-feather="user"></i> My Profile</a>
        <a class="dropdown-item" href="generalsettings"><i class="me-2" data-feather="settings"></i>Settings</a>
        <hr class="m-0" />
        <a class="dropdown-item logout pb-0" href="signin"><img src="assets/img/icons/log-out.svg" class="me-2" alt="img" />Logout</a>
      </div>
    </div>
  </li>
</ul>


<div class="dropdown mobile-user-menu">
  <Link to="/javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></Link>
  <div class="dropdown-menu dropdown-menu-right">
    <Link class="dropdown-item" href="profile">My Profile</Link>
    <Link class="dropdown-item" href="generalsettings">Settings</Link>
    <Link class="dropdown-item" href="signin">Logout</Link>
  </div>
</div>

</div>


<div class="sidebar" id="sidebar">
<div class="sidebar-inner slimscroll">
  <div id="sidebar-menu" class="sidebar-menu">
    <ul>
      <li class="active">
        <Link to="/index"><img src="assets/img/icons/dashboard.svg" alt="img" /><span> Dashboard</span> </Link>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/product.svg" alt="img" /><span> Product</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/productlist">Product List</Link></li>
          <li><Link to="/addproduct">Add Product</Link></li>
          <li><Link to="/categorylist">Category List</Link></li>
          <li><Link to="/addcategory">Add Category</Link></li>
          <li><Link to="/subcategorylist">Sub Category List</Link></li>
          <li><Link to="/subaddcategory">Add Sub Category</Link></li>
          <li><Link to="/brandlist">Brand List</Link></li>
          <li><Link to="/addbrand">Add Brand</Link></li>
          <li><Link to="/importproduct">Import Products</Link></li>
          <li><Link to="/barcode">Print Barcode</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/sales1.svg" alt="img" /><span> Sales</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/saleslist">Sales List</Link></li>
          <li><Link to="/pos">POS</Link></li>
          <li><Link to="/pos">New Sales</Link></li>
          <li><Link to="/salesreturnlists">Sales Return List</Link></li>
          <li><Link to="/createsalesreturns">New Sales Return</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/purchase1.svg" alt="img" /><span> Purchase</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/purchaselist">Purchase List</Link></li>
          <li><Link to="/addpurchase">Add Purchase</Link></li>
          <li><Link to="/importpurchase">Import Purchase</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/expense1.svg" alt="img" /><span> Expense</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/expenselist">Expense List</Link></li>
          <li><Link to="/createexpense">Add Expense</Link></li>
          <li><Link to="/expensecategory">Expense Category</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/quotation1.svg" alt="img" /><span> Quotation</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/quotationList">Quotation List</Link></li>
          <li><Link to="/addquotation">Add Quotation</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/transfer1.svg" alt="img" /><span> Transfer</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/transferlist">Transfer List</Link></li>
          <li><Link to="/addtransfer">Add Transfer </Link></li>
          <li><Link to="/importtransfer">Import Transfer </Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/return1.svg" alt="img" /><span> Return</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/salesreturnlist">Sales Return List</Link></li>
          <li><Link to="/createsalesreturn">Add Sales Return </Link></li>
          <li><Link to="/purchasereturnlist">Purchase Return List</Link></li>
          <li><Link to="/createpurchasereturn">Add Purchase Return </Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img" /><span> People</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/customerlist">Customer List</Link></li>
          <li><Link to="/addcustomer">Add Customer </Link></li>
          <li><Link to="/supplierlist">Supplier List</Link></li>
          <li><Link to="/addsupplier">Add Supplier </Link></li>
          <li><Link to="/userlist">User List</Link></li>
          <li><Link to="/adduser">Add User</Link></li>
          <li><Link to="/storelist">Store List</Link></li>
          <li><Link to="/addstore">Add Store</Link></li>
        </ul>
      </li> <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/places.svg" alt="img" /><span> Places</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/newcountry">New Country</Link></li>
          <li><Link to="/countrieslist">Countries list</Link></li>
          <li><Link to="/newstate">New State </Link></li>
          <li><Link to="/statelist">State list</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/components"><i data-feather="layers"></i><span> Components</span> </Link>
      </li>
      <li>
        <Link to="/blankpage"><i data-feather="file"></i><span> Blank Page</span> </Link>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="alert-octagon"></i> <span> Error Pages </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/error-404">404 Error </Link></li>
          <li><Link to="/error-500">500 Error </Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="box"></i> <span>Elements </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/sweetalerts">Sweet Alerts</Link></li>
          <li><Link to="/tooltip">Tooltip</Link></li>
          <li><Link to="/popover">Popover</Link></li>
          <li><Link to="/ribbon">Ribbon</Link></li>
          <li><Link to="/clipboard">Clipboard</Link></li>
          <li><Link to="/drag-drop">Drag & Drop</Link></li>
          <li><Link to="/rangeslider">Range Slider</Link></li>
          <li><Link to="/rating">Rating</Link></li>
          <li><Link to="/toastr">Toastr</Link></li>
          <li><Link to="/text-editor">Text Editor</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/scrollbar">Scrollbar</Link></li>
          <li><Link to="/spinner">Spinner</Link></li>
          <li><Link to="/notification">Notification</Link></li>
          <li><Link to="/lightbox">Lightbox</Link></li>
          <li><Link to="/stickynote">Sticky Note</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/form-wizard">Form Wizard</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="bar-chart-2"></i> <span> Charts </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/chart-apex">Apex Charts</Link></li>
          <li><Link to="/chart-js">Chart Js</Link></li>
          <li><Link to="/chart-morris">Morris Charts</Link></li>
          <li><Link to="/chart-flot">Flot Charts</Link></li>
          <li><Link to="/chart-peity">Peity Charts</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="award"></i><span> Icons </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/icon-fontawesome">Fontawesome Icons</Link></li>
          <li><Link to="/icon-feather">Feather Icons</Link></li>
          <li><Link to="/icon-ionic">Ionic Icons</Link></li>
          <li><Link to="/icon-material">Material Icons</Link></li>
          <li><Link to="/icon-pe7">Pe7 Icons</Link></li>
          <li><Link to="/icon-simpleline">Simpleline Icons</Link></li>
          <li><Link to="/icon-themify">Themify Icons</Link></li>
          <li><Link to="/icon-weather">Weather Icons</Link></li>
          <li><Link to="/icon-typicon">Typicon Icons</Link></li>
          <li><Link to="/icon-flag">Flag Icons</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="columns"></i> <span> Forms </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/form-basic-inputs">Basic Inputs </Link></li>
          <li><Link to="/form-input-groups">Input Groups </Link></li>
          <li><Link to="/form-horizontal">Horizontal Form </Link></li>
          <li><Link to="/form-vertical"> Vertical Form </Link></li>
          <li><Link to="/form-mask">Form Mask </Link></li>
          <li><Link to="/form-validation">Form Validation </Link></li>
          <li><Link to="/form-select2">Form Select2 </Link></li>
          <li><Link to="/form-fileupload">File Upload </Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><i data-feather="layout"></i> <span> Table </span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/tables-basic">Basic Tables </Link></li>
          <li><Link to="/data-tables">Data Table </Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/product.svg" alt="img" /><span> Application</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/email">Email</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/time.svg" alt="img" /><span> Report</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/purchaseorderreport">Purchase order report</Link></li>
          <li><Link to="/inventoryreport">Inventory Report</Link></li>
          <li><Link to="/salesreport">Sales Report</Link></li>
          <li><Link to="/invoicereport">Invoice Report</Link></li>
          <li><Link to="/purchasereport">Purchase Report</Link></li>
          <li><Link to="/supplierreport">Supplier Report</Link></li>
          <li><Link to="/customerreport">Customer Report</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img" /><span> Users</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/newuser">New User </Link></li>
          <li><Link to="/userlists">Users List</Link></li>
        </ul>
      </li>
      <li class="submenu">
        <Link to="/javascript:void(0);"><img src="assets/img/icons/settings.svg" alt="img" /><span> Settings</span> <span class="menu-arrow"></span></Link>
        <ul>
          <li><Link to="/generalsettings">General Settings</Link></li>
          <li><Link to="/emailsettings">Email Settings</Link></li>
          <li><Link to="/paymentsettings">Payment Settings</Link></li>
          <li><Link to="/currencysettings">Currency Settings</Link></li>
          <li><Link to="/grouppermissions">Group Permissions</Link></li>
          <li><Link to="/taxrates">Tax Rates</Link></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</div>
    </>
  )
}

export default Navbar