import React from 'react'
import Home from './components/home'
import { Route, Routes } from 'react-router-dom'
import Activities from './components/activities'
import Navbar from './components/navbar'
import {Productlist} from './components/productlist'
import { useState } from 'react'
import { useEffect } from 'react'
import {Addproduct} from './components/addproduct'
import { Addquotation } from './components/addquotation'
import { Addsales } from './components/add-sales'
import { Userlists } from './components/userlists'
import { Userlist } from './components/userlist'
import { Addbrand } from './components/addbrand'
import { TransferList } from './components/transferlist'
import { Addcustomer } from './components/addcustomer'
import { Addpurchase } from './components/addpurchase'
import { Addstore } from './components/addstore'
import { Addsupplier } from './components/addsupplier'
import { Addtransfer } from './components/addtransfer'
import { Adduser } from './components/adduser'
import { Barcode } from './components/barcode'
import { Blankpage } from './components/blankpage'
import { Calendar } from './components/calendar'
import { Categorylist } from './components/categorylist'
import { Chatapex } from './components/chart-apex'
import { Chartflot } from './components/chart-flot'
import { Chartjs } from './components/chart-js'
import { ChartMorris } from './components/chart-morris'
import { ChartPiety } from './components/chart-peity'
import { Chat } from './components/chat'
import { Clipboard } from './components/clipboard'
import { Components } from './components/components'
import { Salesdetails } from './components/sales-details'
import {Counter} from './components/counter'
import { Countrieslist } from './components/countrieslist'
import { Customerreport } from './components/customerreport'
import { Createexpense } from './components/createexpense'
import { Createsalesreturn } from './components/createsalesreturn'
import { Createpermission } from './components/createpermission'
import { Createpurchasereturn } from './components/createpurchasereturn'
import { Createsalesreturns } from './components/createsalesreturns'
import { CurrencySettings } from './components/currencysettings'
import { Customerlist } from './components/customerlist'
import { Datatables } from './components/data-tables'
import { Dragdrop } from './components/drag-drop'
import { Editsales } from './components/edit-sales'
import { Editbrand } from './components/editbrand'
import { Editcategory } from './components/editcategory'
import { EditCountry } from './components/editcountry'
import { Editcustomer } from './components/editcustomer'
import { Editexpense } from './components/editexpense'
import { Editpermission } from './components/editpermission'
import { Editproduct } from './components/editproduct'
import { Editpurchase } from './components/editpurchase'
import { Editpurchasereturn } from './components/editpurchasereturn'
import { Editquotation } from './components/editquotation'
import { Editsalesreturner as Editsalesreturn } from './components/editsalesreturner'
import { Editsalesreturns } from './components/editsalesreturns'
import { Editstate } from './components/editstate'
import { Editstore } from './components/editstore'
import { Editsubcategory } from './components/editsubcategory'
import { Editsupplier } from './components/editsupplier'
import { Edittransfer } from './components/edittransfer'
import { Edituser } from './components/edituser'
import { Email } from './components/email'
import { Emailsettings } from './components/emailsettings'
import { Expensecategory } from './components/expensecategory'
import { Expenselist } from './components/expenselist'
import { Formbasicinput } from './components/form-basic-inputs'
import { Formfileupload } from './components/form-fileupload'
import { Formhorizontal } from './components/form-horizontal'
import { Forminputgroup } from './components/form-input-groups'
import { Formmask } from './components/form-mask'
import { Formselect2 } from './components/form-select2'
import { Formvalidation } from './components/form-validation'
import { Formvertical } from './components/form-vertical'
import { Formwizard } from './components/form-wizard'
import { Generalsettings } from './components/generalsettings'
import { Grouppermission } from './components/grouppermissions'
import { Iconfeather } from './components/icon-feather'
import { Iconflag } from './components/icon-flag'
import { Iconfontawsome } from './components/icon-fontawesome'
import { Iconionic } from './components/icon-ionic'
import { Iconmaterial } from './components/icon-material'
import { Iconpe7 } from './components/icon-pe7'
import { Iconsimpleline } from './components/icon-simpleline'
import { Iconthemify } from './components/icon-themify'
import { Icontypicon } from './components/icon-typicon'
import { Iconweather } from './components/icon-weather'
import { Importproduct } from './components/importproduct'
import { Importpurchase } from './components/importpurchase'
import { Importtransfer } from './components/importtransfer'
import { Index } from './components'
import { Inventoryreport } from './components/inventoryreport'
import { Invoicereport } from './components/invoicereport'
import { Lightbox } from './components/lightbox'
import { Newcountry } from './components/newcountry'
import { Newstate } from './components/newstate'
import { Newuser } from './components/newuser'
import { Newuseredit } from './components/newuseredit'
import { Notification } from './components/notification'
import { Paymentsettings } from './components/paymentsettings'
import { Popover } from './components/popover'
import { Pos } from './components/pos'
import { Productdetails } from './components/product-details'
import { Profile } from './components/profile'
import { Purchaselist } from './components/purchaselist'
import { Purchaseorderreport } from './components/purchaseorderreport'
import { Purchasereport } from './components/purchasereport'
import { Purchasereturnlist } from './components/purchasereturnlist'
import { QuotationList } from './components/quotationList'
import { Rangesslider } from './components/rangeslider'
import { Rating } from './components/rating'
import { Ribbon } from './components/ribbon'
import { Saleslist } from './components/saleslist'
import { Salesreport } from './components/salesreport'
import { Salesreturnlist } from './components/salesreturnlist'
import { Salesreturnlists } from './components/salesreturnlists'
import { Scrollbar } from './components/scrollbar'
import { Signin } from './components/signin'
import { Signup } from './components/signup'
import { Spinner } from './components/spinner'
import { Statelist } from './components/statelist'
import { Stickynote } from './components/stickynote'
import { Storelist } from './components/storelist'
import { Subaddcategory } from './components/subaddcategory'
import { Subcategorylist } from './components/subcategorylist'
import { Supplierlist } from './components/supplierlist'
import { Supplierreport } from './components/supplierreport'
import { Sweetalerts } from './components/sweetalerts'
import { Tablesbasic } from './components/tables-basic'
import { Taxrates } from './components/taxrates'
import { Texteditor } from './components/text-editor'
import { Timeline } from './components/timeline'
import { Toastr } from './components/toastr'
import { Tooltip } from './components/tooltip'
import { Addcategory } from './components/addcategory'
import { Brandlist } from './components/brandlist'
import { useLocation } from 'react-router-dom'
const App = () => {
//   const [showNav, setShowNav] = useState(false)
// const location = useLocation()

//   if(location.pathname=='/signin'){
//     setShowNav(false)
//   }
//   else if(location.pathname=='/signup'){
//     setShowNav(false)
//   }
//   else{
//     setShowNav(true)
//   }
// }, [location])

  return (
    <>
    <div id="global-loader">
        <div class="whirly-loader"> </div>
      </div>
      <div class="main-wrapper">
    <Navbar/>
   
    <Routes>
      
      <Route path="/" element={<Home/> } />
      <Route path="*" element={<Home/> } />
     
      <Route path="/addproduct" element={<Addproduct/> } />
    <Route path="/addquotation" element={<Addquotation/> } />
    <Route path="/addsales" element={<Addsales/> } />
    <Route path="/userlists" element={<Userlists/> } />
    <Route path="/userlist" element={<Userlist/> } />
      <Route path="/activities" element={<Activities/> } />
      <Route path="/addbrand" element={<Addbrand/> } />

      <Route path="/addcustomer" element={<Addcustomer/> } />
      <Route path="/addcategory" element={<Addcategory/> } />

      <Route path="/addcustomer" element={<Addcustomer/> } />
      <Route path="/addpurchase" element={<Addpurchase/> } />
      <Route path="/addstore" element={<Addstore/> } />
      <Route path="/addsupplier" element={<Addsupplier/> } />
      <Route path="/addtransfer" element={<Addtransfer/> } />
      <Route path="/adduser" element={<Adduser/> } />
      <Route path="/barcode" element={<Barcode/> } />
      <Route path="/blankpage" element={<Blankpage/> } />
      <Route path="/brandlist" element={<Brandlist/> } />
      <Route path="/calender" element={<Calendar/> } />
      <Route path="/categorylist" element={<Categorylist/> } />
      <Route path="/chart-apex" element={<Chatapex/> } />
      <Route path="/chart-flot" element={<Chartflot/> } />
      <Route path="/chart-js" element={<Chartjs/> } />
      <Route path="/chart-js" element={<Chartjs/> } />
      <Route path="/chart-morris" element={<ChartMorris/> } />
      <Route path="/chart-peity" element={<ChartPiety/> } />
      <Route path="/chat" element={<Chat/> } />
      <Route path="/clipboard" element={<Clipboard/> } />
      <Route path="/components" element={<Components/> } />
      <Route path="/counter" element={<Counter/> } />
      <Route path="/countrieslist" element={<Countrieslist/> } />
      <Route path="/createexpense" element={<Createexpense/> } />


      <Route path="/createpermission" element={<Createpermission/> } />
      <Route path="/createpurchasereturn" element={<Createpurchasereturn/> } />
      <Route path="/createsalesreturn" element={<Createsalesreturn/> } />
      <Route path="/createsalesreturns" element={<Createsalesreturns/> } />
      <Route path="/currencysettings" element={<CurrencySettings/> } />
      <Route path="/customerlist" element={<Customerlist/> } />
      <Route path="/customerreport" element={<Customerreport/> } />
      <Route path="/data-tables" element={<Datatables/> } />
      <Route path="/drag-drop" element={<Dragdrop/> } />
      <Route path="/edit-sales" element={<Editsales/> } />
      <Route path="/editbrand" element={<Editbrand/> } />
      <Route path="/editcategory" element={<Editcategory/> } />
      <Route path="/editcountry" element={<EditCountry/> } />
      <Route path="/editcustomer" element={<Editcustomer/> } />
      <Route path="/editexpense" element={<Editexpense/> } />
      <Route path="/editpermission" element={<Editpermission/> } />
      <Route path="/editproduct" element={<Editproduct/> } />
      <Route path="/editpurchase" element={<Editpurchase/> } />
      <Route path="/editpurchasereturn" element={<Editpurchasereturn/> } />
      <Route path="/editquotation" element={<Editquotation/> } />
    <Route path="/editsalesreturn" element={<Editsalesreturn/> } />
      <Route path="/editsalesreturns" element={<Editsalesreturns/> } />
      <Route path="/editstate" element={<Editstate/> } />
      <Route path="/editstore" element={<Editstore/> } />
      <Route path="/editsubcategory" element={<Editsubcategory/> } />
      <Route path="/editsupplier" element={<Editsupplier/> } />
      <Route path="/editransfer" element={<Edittransfer/> } />
      <Route path="/edituser" element={<Edituser/> } />
      <Route path="/email" element={<Email/> } />
      <Route path="/emailsettings" element={<Emailsettings/> } />
      <Route path="/expensecategory" element={<Expensecategory/> } />
      <Route path="/expenselist" element={<Expenselist/> } />
      <Route path="/form-basic-inputs" element={<Formbasicinput/> } />
      <Route path="/form-fileupload" element={<Formfileupload/> } />
      <Route path="/form-horizontal" element={<Formhorizontal/> } />
      <Route path="/form-input-groups" element={<Forminputgroup/> } />
      <Route path="/form-mask" element={<Formmask/> } />
      <Route path="/form-select2" element={<Formselect2/> } />
      <Route path="/form-validation" element={<Formvalidation/> } />
      <Route path="/form-vertical" element={<Formvertical/> } />
      <Route path="/form-wizard" element={<Formwizard/> } />
      <Route path="/generalsettings" element={<Generalsettings/> } />
      <Route path="/grouppermissions" element={<Grouppermission/> } />
      <Route path="/icon-feather" element={<Iconfeather/> } />
      <Route path="/icon-flag" element={<Iconflag/> } />
      <Route path="/icon-fontawsome" element={<Iconfontawsome/> } />
      <Route path="/icon-ionic" element={<Iconionic/> } />
      <Route path="/icon-material" element={<Iconmaterial/> } />
      <Route path="/icon-pe7" element={<Iconpe7/> } />
      <Route path="/icon-simpleline" element={<Iconsimpleline/> } />
      <Route path="/icon-themify" element={<Iconthemify/> } />
      <Route path="/icon-typicon" element={<Icontypicon/> } />
      <Route path="/icon-weather" element={<Iconweather/> } />
      <Route path="/importproduct" element={<Importproduct/> } />
      <Route path="/importpurchase" element={<Importpurchase/> } />
      <Route path="/importtransfer" element={<Importtransfer/> } />
      <Route path="/index" element={<Index/> } />
      <Route path="/inventoryreport" element={<Inventoryreport/> } />
      <Route path="/invoicereport" element={<Invoicereport/> } />
      <Route path="/lightbox" element={<Lightbox/> } />
      <Route path="/newcountry" element={<Newcountry/> } />
      <Route path="/newstate" element={<Newstate/> } />
      <Route path="/newuser" element={<Newuser/> } />
      <Route path="/newuseredit" element={<Newuseredit/> } />
      <Route path="/notification" element={<Notification/> } />
      <Route path="/paymentsettings" element={<Paymentsettings/> } />
      <Route path="/popover" element={<Popover/> } />
      <Route path="/pos" element={<Pos/> } />
      <Route path="/product-details" element={<Productdetails/> } />
      <Route path="/productlist" element={<Productlist/> } />
      <Route path="/profile" element={<Profile/> } />
      <Route path="/purchaselist" element={<Purchaselist/> } />
      <Route path="/purchaseorderreport" element={<Purchaseorderreport/> } />
      <Route path="/purchasereport" element={<Purchasereport/> } />
      <Route path="/purchasereturnlist" element={<Purchasereturnlist/> } />
      <Route path="/quotationlist" element={<QuotationList/> } />
      <Route path="/rangeslider" element={<Rangesslider/> } />
      <Route path="/rating" element={<Rating/> } />
      <Route path="/ribbon" element={<Ribbon/> } />
      <Route path="/sales-details" element={<Salesdetails/> } />
      <Route path="/saleslist" element={<Saleslist/> } />
      <Route path="/salesreport" element={<Salesreport/> } />
      <Route path="/salesreturnlist" element={<Salesreturnlist/> } />
   
      <Route path="/salesreturnlists" element={<Salesreturnlists/> } />
      <Route path="/scrollbar" element={<Scrollbar/> } />
      <Route path="/signin" element={<Signin/> } />
      <Route path="/signup" element={<Signup/> } />
      <Route path="/spinner" element={<Spinner/> } />
      <Route path="/statelist" element={<Statelist/> } />
      <Route path="/stickynote" element={<Stickynote/> } />
      <Route path="/storelist" element={<Storelist/> } />
      <Route path="/subaddcategory" element={<Subaddcategory/> } />
      <Route path="/subcategorylist" element={<Subcategorylist/> } />
      <Route path="/supplierlist" element={<Supplierlist/> } />
      <Route path="/supplierreport" element={<Supplierreport/> } />
      <Route path="/sweetalerts" element={<Sweetalerts/> } />
      <Route path="/tables-basic" element={<Tablesbasic/> } />
      <Route path="/taxrates" element={<Taxrates/> } />
      <Route path="/text-editor" element={<Texteditor/> } />
      <Route path="/timeline" element={<Timeline/> } />
      <Route path="/toastr" element={<Toastr/> } />
      <Route path="/tooltop" element={<Tooltip/> } />
      <Route path="/transferlist" element={<TransferList/> } />


    </Routes>
    </div>
    </>
  )
}

export default App