// Assuming URL is https://example.com/page?param1=value1&param2=value2

// ./genqr.html?id=WeVcUEezIFNnnGsoNz82

const urlParams = new URLSearchParams(window.location.search);
// const param1 = urlParams.get('param1'); // Returns 'value1'
// const param2 = urlParams.get('param2'); // Returns 'value2'

// console.log(param1);
// console.log(param2);'


const id = urlParams.get('id')

console.log(id);

