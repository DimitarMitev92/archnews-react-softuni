const dateParser = (initialDate) => {
    const date = new Date(initialDate);
    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
    ];
    console.log(month + 1);
    console.log(day);
    console.log(year);
    return `${day}.${month + 1}.${year}`;
};

console.log(dateParser(1679327824662));