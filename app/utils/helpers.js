var axios = require('axios');
var _ = require('lodash');

function getInfo0() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/0/elements/.json')
}

function getInfo1() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/1/elements/.json')
}

function getInfo2() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/2/elements/.json')
}

function getInfo3() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/3/elements/.json')
}

function getInfo4() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/4/elements/.json')
}

function getInfo5() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/5/elements/.json')
}

function getInfo6() {
    return axios.get('https://periodic-element-table.firebaseio.com/table/6/elements/.json')
}


// GET THE MAXIMUM VALUE OF ARRAY
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

var helpers = {
    getElementInfo: function () {

        return axios.all([getInfo0(), getInfo1(), getInfo2(), getInfo3(), getInfo4(), getInfo5(), getInfo6()])
            .then(function(arr) {



                return {
                    row0: arr[0].data,
                    row1: arr[1].data,
                    row2: arr[2].data,
                    row3: arr[3].data,
                    row4: arr[4].data,
                    row5: arr[5].data,
                    row6: arr[6].data
                };


        });

    }
};

module.exports = helpers;