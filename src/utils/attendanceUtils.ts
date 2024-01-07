
export function getCheckinValue(checkin: Date | null) {
    return checkin ? checkin.toLocaleString() : 'N/A';
}
  
export function getCheckoutValue(checkout: Date | null) {
    return checkout ? checkout.toLocaleString() : 'N/A';
}
  
export const convertSerialDateToFormattedString = (serialDate: number) => {
    // Convert serial date to milliseconds and create a Date object
    const milliseconds = (serialDate - 25569) * 86400 * 1000;
    const date = new Date(milliseconds);
  
    // Format the date as "YYYY-MM-DD HH:mm:ss"
    const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
  
    return formattedDate;
};