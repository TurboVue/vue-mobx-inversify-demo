/**
 * Try/catch helper
 * @param target Target class
 * @param key Method name
 * @param descriptor 
 */
function TryCatch(target, key, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      console.log(`Trying ${target.constructor.name}.${key} with arguments`, args);
      return await originalMethod.apply(this, args);
    } catch (error) {
      console.error(error.message);
    }
  };

  return descriptor;
}

export default TryCatch;