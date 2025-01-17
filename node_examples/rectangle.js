module.exports = (x, y, callback) => {
    if(x <= 0 || y <= 0) {
        setTimeout(() => 
            callback(new Error(console.log("Rectangle dimensions should be greater than 0")), null),
            2000
        );
    }
    else {
        setTimeout(() => 
            callback(null, {
                perimeter: (x, y) => (2 * (x + y)),
                area: (x, y) => (x * y)
            }),
            2000
        );
    }
}

exports.perimeter = (x, y) => (2 * (x + y));
exports.area = (x, y) => (x * y);