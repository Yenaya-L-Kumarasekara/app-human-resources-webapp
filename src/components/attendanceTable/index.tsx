import React from 'react'
import { getCheckinValue, getCheckoutValue } from '../../utils/attendanceUtils';

type AttendanceData = {
  employee: {
    employee_id: number;
    name: string;
  };
  employee_id: number;
  check_in: Date  | null;
  check_out: Date | null;
  total_hours : number | null;
};

interface AttendanceTableProps {
    attendanceData: AttendanceData[];
}

export default function AttendanceTable({attendanceData}: AttendanceTableProps) {
    console.log(attendanceData);
  return (
    <table id="attendanceTable" className='w-full'>
        <thead>
            <tr>
                <th>Name of the employee</th>
                <th>CheckIn</th>
                <th>CheckOut</th>
                <th>Total Hours</th>
            </tr>
        </thead>
        <tbody>
            {attendanceData.map((item, index) => {
                const { employee, check_in, check_out, total_hours } = item;
                return (
                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{getCheckinValue(check_in)}</td>
                        <td>{getCheckoutValue(check_out)}</td>
                        <td>
                            {total_hours !== null ? total_hours : 'N/A'}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
