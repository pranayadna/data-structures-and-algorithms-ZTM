const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo')

// As our input grew, our function become slower and slower
function findNemo(array){
    let t0 = performance.now(); // for measuring code performance
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!!!');
        }
    }
    let t1 = performance.now(); // for measuring code performance
    console.log('Call to find nemo took ' + (t1-t0) + ' milliseconds')
}

// findNemo(large);  