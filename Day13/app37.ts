/*37: Large Shirts: Default values in make_shirt(). */

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`Size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Summary: A ${size}-sized "${message}"`);
  }
  make_shirt();
  make_shirt('Medium'); 
  make_shirt('Small', 'JavaScript is fun!');