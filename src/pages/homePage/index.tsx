import { useState , useEffect} from 'react';
import { fetchViewData } from '../../services/ViewService';
import AttendanceTable from '../../components/attendanceTable';

const Homepage = () => {
    const [attendanceData, setAttendanceData] = useState([] );
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetchViewData();
            setAttendanceData(data.data);
        } catch (err : any) {
            console.log(err);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='min-h-screen'>
            {error && <p>{error}</p>}
            <AttendanceTable attendanceData={attendanceData} />
        </div>
    )
}

export default Homepage;