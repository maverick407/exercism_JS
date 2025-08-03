// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  console.log('isBoolean');
  return typeof(value) == 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  console.log('isNumber');
  switch (typeof value) {
    case 'number':
      return Number.isFinite(value);
    case 'bigint':
      return true;
    default:
      return false;
  }
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  console.log('isObject');
  return typeof(value) == 'object' && value != null;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  console.log('isNumericString');
  return typeof(value) == 'string' && !!value.match(/^(-{0,1})[0-9]+$/i);
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  console.log('isElectronic');
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  console.log('isNonEmptyArray');
  return (Array.isArray(value) && value.length > 0);
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  console.log('isEmptyArray');
  return (Array.isArray(value) && value.length == 0);
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  return 'type' in object;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  console.log('assertHasId');
  if(!('id' in object)){
    throw new Error("ane");
  }
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object - The object to check.
 * @returns {boolean} Whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  console.log('hasIdProperty');
  
  if (object === null || typeof object !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, 'id');
}


/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  console.log('hasDefinedType');
  if (object === null || typeof object !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, 'type') && object.type !== undefined;
}
