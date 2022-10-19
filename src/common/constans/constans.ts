/**
 * Constants message
 */
export const MESSAGES = {
  /**
   * common messages
   */
  EXPIRES_IN: '3600s',
  CODE_ALREADY_EXIST: 11000,
  CODE_ROLE: 'Users validation failed',
  CODE_NOT_NULL: '23502',
  CODE_NOT_DELETE: '23503',
  VALIDATE_MESSAGE: 'message',
  INTERNAL_SERVER_ERROR: 'There is internal server, Please try again',
  NOT_FOUND: 'No data found',
  DELETE_SUCCESS: 'Deleted successfully',
  UPDATE_SUCCESS: 'Updated successfully',

  /**
   * User contstans
   */
  USER_NOT_FOUND: 'User not found',
  PROFILE_NOT_FOUND: 'Profile not found',
  USER_CREATE: 'User created',
  EMAIL_EXIST: 'Email exists',
  EMAIL_NOT_NULL: 'Email should not be null',
  AUTH_FAILED: 'Invalid credentials',
  USER_INVALID_ROLE: 'Invalid input value for role enum',
  USER_FETCH_SUCCESS: 'Users fetched successfully',

  /**
   * Products constants
   */
  PRODUCT_NOT_FOUND: 'Products not found',
  PRODUCT_NAME_EXIST: 'Products name already exists',
  PRODUCT_NOT_NULL: 'Products name should not be null',
  PRODUCT_ADDED_SUCCESS: 'Products addedd successfully',
  PRODUCT_NOT_AVAILABLE: 'Products not available',

  /**
   * Orders constants
   */
  ORDER_NOT_FOUND: 'Order not found',
  ORDER_NAME_EXIST: 'Order name already exists',
  ORDER_NOT_NULL: 'Order name should not be null',
  ORDER_ADDED_SUCCESS: 'Order Stored',
  ORDER_NOT_AVAILABLE: 'Order not available',
};
