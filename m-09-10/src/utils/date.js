
export const getMonthName = (date)=> {
    let month = Number(date.split('-')[1])
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
return monthNames[month-1]
}



