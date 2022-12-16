const area = (radius) => {
    return console.log("Circle area: ", (Math.PI * (radius * radius)).toFixed(2));
}

const circumference = (radius) => {
    return console.log("Circle circumference: ", (2 * Math.PI * radius).toFixed(2));
}

module.exports = {
    area,
    circumference
}