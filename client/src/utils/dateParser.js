export const dateParser = (initialDate) => {
    const date = new Date(initialDate);
    let [month, day, year, hours, minutes, seconds] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];

    month = addZero(month + 1);
    day = addZero(day);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
};

const addZero = (num) => {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
};
