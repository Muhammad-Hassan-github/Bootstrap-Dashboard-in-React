import React from "react";
import { Link } from "react-router-dom";
import {useEffect} from 'react'
import BG from './bg.jpeg'


const SideBar = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
      <div>
           {/* <!-- Sidebar --> */}
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion shadow" id="accordionSidebar"  style={{background:"white",float:"left",borderRight: "1px solid #e3e6f0",height:"900px"}}>

{/* <!-- Sidebar - Brand --> */}
<a class="sidebar-brand d-flex align-items-center justify-content-left" href="index.html">
  <div class="sidebar-brand-text mx-3" style={{color:"black",fontWeight:"bolder",float:"left"}}><h3>AIMAD</h3></div>       
</a>

{/* <!-- Divider --> */}
<hr class="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li class="nav-item active">
  <Link class="nav-link" to="/home">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Home</span></Link>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
  <Link class="nav-link" to="/table">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Mes campagnes</span></Link>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
<li class="nav-item active">
  <Link class="nav-link" to="/chat">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Chat avec nos experts</span></Link>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
  <Link class="nav-link" to="/chart">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Statistiques</span></Link>
</li>

 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
   <div style={{textAlign:"center",marginBottom:"10px"}}>
  <button class="btn shadow mb-4"  style={{background:"#ffc830" ,height:"50px",color:"black",fontWeight:"bolder"}}>Creer une campagne</button>
  </div>
</li>


<div class="text-center d-none d-md-inline">
  <button class="rounded-circle border-0" id="sidebarToggle"  style={{background:"#ffc830"}}></button>
</div>

</ul>
{/* <!-- End of Sidebar --> */}
      </div>
    );
}

export default SideBar;
