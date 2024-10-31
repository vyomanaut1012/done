import Navbar from "../../common/navbar/Navbar";
import VisitorPerDay from '../timeSeriesChart/VisitorPerDay.tsx';
import VisitorPerCountry from '../cloumnChart/VisitorPerCountry.tsx'
import DateSelector from '../../common/dateSelector/DateSelector.tsx';
import Visitor from '../sparklinesChart/Visitor.tsx';

const Dashboard = () => {
        return (
                <div className="bg-gray-100 ">
                        <Navbar />
                        <div className=" max-w-[95%] mx-auto">

                                <div className=" my-4">
                                        <DateSelector />
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-7 gap-x-8 '>
                                        <div className=" lg:col-span-3">
                                                <VisitorPerDay />
                                        </div>
                                        <div className=" lg:col-span-4">
                                                <VisitorPerCountry />
                                        </div>
                                </div>
                                <div className=' my-20'>
                                        <Visitor />
                                </div>
                        </div>
                </div>
        )
}

export default Dashboard;