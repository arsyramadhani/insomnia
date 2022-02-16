const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'September',
    'October',
    'November',
    'December'
];

const full = date => {
    const d = new Date(date);
    return (
        day[d.getDay()] +
        ', ' +
        d.getDate() +
        ' ' +
        month[d.getMonth()] +
        ' ' +
        d.getFullYear()
    );
};

const display = date => {
    const d = new Date(date);
    return d.getDate() + ' / ' + d.getMonth() + ' / ' + d.getFullYear();
};

const date = date => {
    const d = new Date(date);
    return d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
};

const time = (date, add = 0) => {
    const d = new Date(date);
    const h = (d.getHours() + add).toString();
    const m = d.getMinutes().toString();
    return h.padStart(2, '0') + ':' + m.padStart(2, '0') + ' WIB';
};

const calculateTimeLeft = data => {
    let year = new Date(data).getFullYear();
    const difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
};

export { full, display, date, time, calculateTimeLeft };

const dateConvert = {
    full: date => {
        const d = new Date(date);
        return (
            day[d.getDay()] +
            ', ' +
            d.getDate() +
            ' ' +
            month[d.getMonth()] +
            ' ' +
            d.getFullYear()
        );
    },
    display: date => {
        const d = new Date(date);
        return d.getDate() + ' / ' + d.getMonth() + ' / ' + d.getFullYear();
    },
    date: date => {
        const d = new Date(date);
        return d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
    },
    time: (date, add = 0) => {
        const d = new Date(date);
        const h = (d.getHours() + add).toString();
        const m = d.getMinutes().toString();
        return h.padStart(2, '0') + ':' + m.padStart(2, '0') + ' WIB';
    },
    calculateTimeLeft: data => {
        let year = new Date(data).getFullYear();
        const difference = +new Date(`10/01/${year}`) - +new Date();

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }
};

export default dateConvert;
