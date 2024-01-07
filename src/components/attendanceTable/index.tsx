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
    <table id="attendanceTable" className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
            <tr>
            <th className="py-2 px-4">Name of the employee</th>
            <th className="py-2 px-4">CheckIn</th>
            <th className="py-2 px-4">CheckOut</th>
            <th className="py-2 px-4">Total Hours</th>
            </tr>
        </thead>
        <tbody>
            {attendanceData.map((item, index) => {
            const { employee, check_in, check_out, total_hours } = item;
            return (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="py-2 px-4">{employee?.name}</td>
                <td className="py-2 px-4">{getCheckinValue(check_in)}</td>
                <td className="py-2 px-4">{getCheckoutValue(check_out)}</td>
                <td className="py-2 px-4">
                    {total_hours !== null ? total_hours : 'N/A'}
                </td>
                </tr>
            );
            })}
        </tbody>
    </table>

  )
}
