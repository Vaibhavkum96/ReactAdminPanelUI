import React from 'react'
import "./home.scss"
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Widgets from '../../Components/widgets/Widgets'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Table from '../../Components/table/Table'


const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earning" />
            <Widgets type="balance"/>
          </div>
            
            <div className="charts">
               <Featured />
               <Chart aspect={2/1} title="Last 6 Months Revenue"/>
            </div>

            <div className="listContainer">
               <div className="listTitle">Latest Transactions</div>
               <Table />
            </div>
        
        </div>
    </div>
  )
}

export default Home