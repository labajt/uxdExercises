function remoteMathService(cb) {
    
    var one = function oneServicePromise() {
        return new Promise(function(resolve, reject) {
            callOneService(function(err, num) {
                err ? reject(err) : resolve(num);
            })
        })
    }

    var two =  function twoServicePromise() {
        return new Promise(function(resolve, reject) {
            callTwoService(function(err, num) {
                err? reject(err): resolve(num);
            })
        })
    }

    Promise.all([
        one(),
        two(),
      ]).then(function(result) {
        cb(undefined, result[0] + result[1]);
      });
   }
  
   function callOneService(cb) {
    setTimeout(function() {
    return cb(undefined, 1);
    }, 1000);
   }
   
   function callTwoService(cb) {
    setTimeout(function() {
    return cb(undefined, 2);
    }, 1500);
   }

   remoteMathService(function(err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
    console.log("wrong answer", answer);
    } else {
    console.log("correct");
    }
   });

   module.exports = {
    callOneService: callOneService,
    callTwoService: callTwoService,
    remoteMathService: remoteMathService
  };