import { lazy } from "react";
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const DicomView = lazy(() => import("./pages/DicomView/DicomView"));

const Doctor = lazy(() => import("./pages/Doctor/Doctor/Doctor"));
const AddDoctor = lazy(() => import("./pages/Doctor/AddDoctor/AddDoctor"));
const DetailDoctor = lazy(() => import("./pages/Doctor/DetailDoctor/DetailDoctor"));
const EditDoctor = lazy(() => import("./pages/Doctor/EditDoctor/EditDoctor"));

const Patient = lazy(() => import("./pages/Patient/Patient/Patient"));
const DetailPatient = lazy(() => import("./pages/Patient/DetailPatient/Detailpatient"));
const AddPatient = lazy(() => import("./pages/Patient/AddPatient/AddPatient"));
const EditPatient = lazy(() => import("./pages/Patient/EditPatient/EditPatient"));

const Admin = lazy(() => import("./pages/Admin/Admin/Admin"));
const AddAdmin = lazy(() => import("./pages/Admin/AddAdmin/AddAdmin"));
const DetailAdmin = lazy(() => import("./pages/Admin/DetailAdmin/DetailAdmin"));
const EditAdmin = lazy(() => import("./pages/Admin/EditAdmin/EditAdmin"));

const Setting = lazy(() => import("./pages/Settings/pengaturan/Setting"));
const Profile = lazy(() => import("./pages/Profile/Profile/Profile"));
export const APP_ROUTE = [
  {
    name: "Login",
    path: "/",
    exact: true,
    component: Login,
    restricted: true,
  },
  // {
  //   name: "Notification",
  //   path: "/notification",
  //   exact: true,
  //   component: Notification,
  //   restricted: true,
  // },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    private: true,
  },
  {
    name: "DicomView",
    path: "/lihat-dicom",
    exact: true,
    component: DicomView,
    private: true,
  },
  {
    name: "Doctor",
    path: "/dokter",
    exact: true,
    component: Doctor,
    private: true,
  },
  {
    name: "Patient",
    path: "/pasien",
    exact: true,
    component: Patient,
    private: true,
  },
  {
    name: "DetailPatient",
    path: "/pasien/detail-pasien/:id",
    exact: true,
    component: DetailPatient,
    private: true,
  },
  {
    name: "EditPatient",
    path: "/pasien/edit-pasien/:id",
    exact: true,
    component: EditPatient,
    private: true,
  },
  {
    name: "Profile",
    path: "/profile",
    exact: true,
    component: Profile,
    private: true,
  },
  {
    name: "AddDoctor",
    path: "/dokter/tambah-dokter",
    exact: true,
    component: AddDoctor,
    private: true,
  },
  {
    name: "AddPatient",
    path: "/pasien/tambah-pasien",
    exact: true,
    component: AddPatient,
    private: true,
  },
  {
    name: "DetailDoctor",
    path: "/dokter/detail-dokter/:id",
    exact: true,
    component: DetailDoctor,
    private: true,
  },
  {
    name: "EditDoctor",
    path: "/dokter/edit-dokter/:id",
    exact: true,
    component: EditDoctor,
    private: true,
  },
  {
    name: "Admin",
    path: "/admin",
    exact: true,
    component: Admin,
    private: true,
  },
  {
    name: "AddAdmin",
    path: "/admin/tambah-admin",
    exact: true,
    component: AddAdmin,
    private: true,
  },
  {
    name: "DetailAdmin",
    path: "/admin/detail-admin/:id",
    exact: true,
    component: DetailAdmin,
    private: true,
  },
  {
    name: "EditAdmin",
    path: "/admin/edit-admin/:id",
    exact: true,
    component: EditAdmin,
    private: true,
  },
  {
    name: "Setting",
    path: "/setting",
    exact: true,
    component: Setting,
    private: true,
  },
];
