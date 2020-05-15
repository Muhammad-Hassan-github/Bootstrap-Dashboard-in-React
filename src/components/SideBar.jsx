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
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion shadow" id="accordionSidebar"  style={{background:"white",float:"left",border: "1px solid #e3e6f0",height:"900px"}}>

{/* <!-- Sidebar - Brand --> */}
<a class="sidebar-brand d-flex align-items-center justify-content-left" href="index.html">
  <div class="sidebar-brand-text mx-3" style={{color:"black",fontWeight:"bolder",float:"left"}}><h3>AIMAD</h3></div>       
</a>

{/* <!-- Divider --> */}
<hr class="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Home</span></a>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Mes campagnes</span></a>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
<li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Chat avec nos experts</span></a>
</li>
 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
  <a class="nav-link" href="index.html">
    <i class="fas fa-fw fa-home"  style={{color:"#ffc830"}}></i>
    <span  style={{color:"black"}}>Statistiques</span></a>
</li>

 {/* <!-- Nav Item - Dashboard --> */}
 <li class="nav-item active">
   <div style={{textAlign:"center",marginBottom:"10px"}}>
  <button className="btn"  style={{background:"#ffc830",width:"200px" ,height:"50px",color:"black",fontWeight:"bolder"}}>Creer une campagne</button>
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
