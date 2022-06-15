
const crypto = require ('crypto');

function stupidpadEncrypt( input ) {
  const result =  Buffer.allocUnsafe( input.length * 2 );
  const random = crypto.randomBytes( input.length );
  for ( let i=0; i<input.length; i++ ) {
    const ri = i*2;
    result[ri+0] = random[i];
    result[ri+1] = input[i] ^ random[i];
  }
  return result;
}
module.exports.encrypt = stupidpadEncrypt;

function stupidpadDecrypt( input ) {
  const result = Buffer.allocUnsafe( Math.floor( input.length / 2 ));
  for ( let i=0; i<result.length; i++ ) {
    const ri = i*2;
    result[i] = input[ri] ^ input[ri+1];
  }
  return result;
}
module.exports.decrypt = stupidpadDecrypt;

