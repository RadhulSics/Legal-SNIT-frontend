import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";
import ViewAllAdvocates from "./ViewAllAdvocates";
import ApproveRejectAdvocate from "./ApproveRejectAdvocate";
import ViewProfile_AR from "./ViewProfile_AR";
import "../Admin/AdminMain.css";


function AdminMain({ data }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminId") == null) {
      navigate("/");
    }
  }, [navigate]); 

  return (
    <div className="container-fluid admin_main" >
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 adminmain-sidebar" style={{padding:0}}>
          <AdminSidebar />
        </div>
        <div className=" col-lg-9 col-md-6 col-sm-12 adminmain-content"  >
          {data === "admindashboard" ? (
            <AdminDashboard />
          ) : data === "adminviewalladvocates" ? (
            <ViewAllAdvocates />
          ) : data === "approvereject" ? (
            <ApproveRejectAdvocate />
          ) : data === "adminviewrequest" ? (
            <ViewProfile_AR view='request'  />
          ) : data === "adminviewsingleadvocate" ? (
            <ViewProfile_AR view='view' />
          ):(
            <AdminLogin />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminMain;
