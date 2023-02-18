import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useDispatch,useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { userAll } from "../redux/features/userSlice";
import '../styles/Home.css'

const Home = ({ cookies, removeCookies }) => {
  const [jsonData, setJsonData] = useState([]);
  const {user} = useSelector((state) => state.user);
  console.log("hoiehroie");
  console.log(user);
  useEffect(() => {
    const getdatajournal = async () => {
      const res = await axios.post('http://localhost:5000/getjournal',user);
      console.log(res.data.data);
      setJsonData(res.data.data)
    }
    getdatajournal();
  },[])

  console.log("jsonData")
  console.log(jsonData)

  const listItems = jsonData.map((item) => (
    <tr>
      <th scope="row">{item.Sr_No}</th>
      <td>{item.Academic_Year}</td>
      <td>{item.First_Author_name}</td>
      <td>{item.Title_of_Research_Paper}</td>
      <th scope="col" onClick={()=>alert(JSON.stringify(item,null,4))} style={{cursor : 'pointer'}}>VIEW</th>
      <th  scope="col" style={{cursor : 'pointer'}}>EDIT</th>
      {/* <th scope="col">EDIT</th> */}
    </tr>
  ));


  return (
    <Layout removeCookies={removeCookies}>
      <>
      <div className="scrollit ">
        <h1 className="text-center">Home page</h1>
        <table class="table table-hover table-bordered table-mymodify">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Academic Year</th>
              <th scope="col">First Author</th>
              <th scope="col">Title of Research Paper</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
        </div>
      </>
    </Layout>
  );
};

export default Home;
