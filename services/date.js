export const uniqueDates = (tasks) =>{
    const unique = []
    tasks.forEach(e => {
        if (!unique.includes(e.dateFormat)) unique.push(e.dateFormat);
    });    

    return unique;
};

export const orderDates = (dates)=> {
    return dates.sort((a, b) =>{
        const firstDate = dayjs(a, "DD/MM/YYYY")
        const secondDate = dayjs(b, "DD/MM/YYYY")

        return firstDate - secondDate;
    });
};   