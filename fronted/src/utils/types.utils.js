export default function getDateType() {
    const todayDate = new Date();
    const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
    const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth()}` : todayDate.getMonth();
    const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
    return formattedDate;
};

export const type = {
    name: '', 
    inst: '', 
    fech: ''
};