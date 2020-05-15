import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Navbar from "./Navbar";
import { Bar } from "react-chartjs-2";
import BG from "./dashboard.png";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      totalTraffic: 5646565,
      newUsers: 2324,
      sales: 564,
      performance: 57
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    // sandbox disable popups
    if (window.self !== window.top && window.name != "view1") {
      window.alert = function () {
        /*disable alert*/
      };
      window.confirm = function () {
        /*disable confirm*/
      };
      window.prompt = function () {
        /*disable prompt*/
      };
      window.open = function () {
        /*disable open*/
      };
    }

    // prevent href=# click jump
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        var links = document.getElementsByTagName("A");
        for (var i = 0; i < links.length; i++) {
          if (links[i].href.indexOf("#") != -1) {
            links[i].addEventListener("click", function (e) {
              console.debug("prevent href=# click");
              if (this.hash) {
                if (this.hash == "#") {
                  e.preventDefault();
                  return false;
                } else {
                  /* this breaks routing */
                  var el = document.getElementById(this.hash.replace(/#/, ""));
                  if (el) {
                    el.scrollIntoView(true);
                  }
                }
              }
              return false;
            });
          }
        }
      },
      false
    );
    $(document).ready(function () {
      $("[data-toggle=offcanvas]").click(function () {
        $(".row-offcanvas").toggleClass("active");
      });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div class="container-fluid" id="main">
          <div class="row row-offcanvas row-offcanvas-left">
            <div
              class="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0"
              id="sidebar"
              role="navigation"
            >
              <ul class="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Overview
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#submenu1"
                    data-toggle="collapse"
                    data-target="#submenu1"
                  >
                    Reports▾
                  </a>
                  <ul
                    class="list-unstyled flex-column pl-3 collapse"
                    id="submenu1"
                    aria-expanded="false"
                  >
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        Report 1
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="">
                        Report 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Analytics
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Export
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Snippets
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Flexbox
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Layouts
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Templates
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Themes
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--/col--> */}

            <div class="col main pt-5 mt-3">
              <div class="row">
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text small float-left">TOTAL TRAFFIC</p>
                      <br/>
                      <p class="card-text small float-left">{this.state.totalTraffic}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text small float-left">NEW USERS</p>
                      <br/>
                      <p class="card-text small float-left">{this.state.newUsers}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text small float-left">SALES</p>
                      <br/>
                      <p class="card-text small float-left">{this.state.sales}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3">
                <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-sm-8" style={{ backgroundColor: "brown" }}>
                  .col-sm-8
                </div>
                <div class="col-sm-4" style={{ backgroundColor: "green" }}>
                  .col-sm-4
                </div>
              </div>
            </div>

            {/* <!--/main col--> */}
          </div>
        </div>
        {/* <!--/.container--> */}
      </div>
    );
  }
}

export default Dashboard;
