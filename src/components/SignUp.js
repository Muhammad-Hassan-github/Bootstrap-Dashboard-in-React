import React from "react";
import { Link } from "react-router-dom";
import {useEffect} from 'react'
import BG from './bg.jpeg'



const SignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

    <body id="page-top" style={{height:"auto"}}>
  {/* <!-- Page Wrapper --> */}
  <div id="wrapper">
    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column" style={{background:"white",}}>

      {/* <!-- Main Content --> */}
      <div id="content" style={{background:"black",paddingBottom:"100px"}}>

        {/* <!-- Topbar --> */}
        <nav class="navbar navbar-expand navbar-light bg-black topbar mb-4 static-top shadow">

          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          {/* <!-- Topbar Search --> */}
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="bg-light border-0" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" style={{borderRadius:"20px",width:"270px",height:"50px"}}/>
            </div>
          </form>

          {/* <!-- Topbar Navbar --> */}
          <ul class="navbar-nav ml-auto">

            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            {/* <!-- Nav Item - Alerts --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"  style={{color:"white"}}></i>
                {/* <!-- Counter - Alerts --> */}
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              {/* <!-- Dropdown - Alerts --> */}
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Alerts Center
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>

            {/* <!-- Nav Item - Messages --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-envelope fa-fw" style={{color:"white"}}></i>
                {/* <!-- Counter - Messages --> */}
                <span class="badge badge-danger badge-counter">7</span>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">
                  Message Center
                </h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt=""/>
                    <div class="status-indicator"></div>
                  </div>
                  <div>
                    <div class="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt=""/>
                    <div class="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div class="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt=""/>
                    <div class="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
              </div>
            </li>

        

            {/* <!-- Nav Item - User Information --> */}
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" style={{marginRight:"10px"}}/>
                <span class="mr-2 d-none d-lg-inline small" style={{color:"white"}}>Valerie Luna</span>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        {/* <!-- End of Topbar --> */}

        {/* <!-- Begin Page Content --> */}
        <div class="container-fluid">

          {/* <!-- Page Heading --> */}
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 " style={{color:"white",fontFamily:"bold",fontWeight:"bolder"}}>Home</h1>
          </div>

          {/* <!-- Content Row --> */}
          <div class="row">

            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card  shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">TOTAL TRAFFIC</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x " style={{color:"#fccb2e"}}></i>
                    </div>

                  </div>
                </div>
                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1 ml-3"><span style={{color:"#78bda8",marginRight:"5px"}}>+3.14%</span>Since last month</div>
              </div>
            </div>

            
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card  shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">TOTAL TRAFFIC</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x " style={{color:"#fccb2e"}}></i>
                    </div>

                  </div>
                </div>
                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1 ml-3"><span style={{color:"#78bda8",marginRight:"5px"}}>+3.14%</span>Since last month</div>
              </div>
            </div>
            
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card  shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">TOTAL TRAFFIC</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x " style={{color:"#fccb2e"}}></i>
                    </div>

                  </div>
                </div>
                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1 ml-3"><span style={{color:"#78bda8",marginRight:"5px"}}>+3.14%</span>Since last month</div>
              </div>
            </div>
            
            {/* <!-- Earnings (Monthly) Card Example --> */}
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card  shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">TOTAL TRAFFIC</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x " style={{color:"#fccb2e"}}></i>
                    </div>

                  </div>
                </div>
                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1 ml-3"><span style={{color:"#78bda8",marginRight:"5px"}}>+3.14%</span>Since last month</div>
              </div>
            </div>
            </div>

          {/* <!-- Content Row --> */}

          

          

        </div>
        {/* <!-- /.container-fluid --> */}
      </div>

      {/* <!-- End of Main Content --> */}
      <div class="row container-fluid" >

            {/* <!-- Area Chart --> */}
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div class="p-4">
                <div style={{float:"right", marginTop:"-10"}} >
                 <button  style={{background:"black",border:"none",color:"white", paddingLeft:"10px", padding:"11px 21px" ,marginRight:"5px" , borderRadius:"5px"}}>Month</button>
                  <button style={{background:"white",border:"1px solid black" , padding:"10px 20px",borderRadius:"5px"}} >Week</button>
                 </div>
                   <h6 class=" m-0  text-secondary">OVERVIEW</h6>
                  <h6 class=" m-0 font-weight-bold" style={{color:"black"}}>Click Through Rate (CRT)</h6>                  
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                  <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pie Chart --> */}
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div class="p-4" >
                  <h6 class="m-0  text-secondary"  >Performance</h6>
                  <h6 class="m-0 font-weight-bold" style={{color:"black"}}>Note AIMAD</h6>

                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                  <div class="chart-pie pb-4">
                    <canvas id="myPieChart"></canvas>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

      {/* <!-- Footer --> */}
    
      {/* <!-- End of Footer --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

  </div>
  {/* <!-- End of Page Wrapper --> */}

  {/* <!-- Scroll to Top Button--> */}
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  {/* <!-- Logout Modal--> */}
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
      </div>
    </div>
  </div>
</body>
  );
}

export default SignUp;
