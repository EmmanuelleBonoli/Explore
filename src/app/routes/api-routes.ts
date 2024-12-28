const _BASE_API_URL = 'http://localhost:3000/';

const buildUrl = (endpoint: string): string => `${_BASE_API_URL}${endpoint}`;

export const API_ENDPOINTS_LOGIN = {
  verifyEmail: buildUrl('api/login/verify-email'),
  verifyPseudo: buildUrl('api/login/verify-pseudo'),
  saveCodeToResetPassword: buildUrl('api/password/save-code'),
  checkCodeToResetPassword: buildUrl('api/password/check-code'),
  resetPasswordUser: buildUrl('api/password/reset-password'),
  logIn: buildUrl('api/login'),
  signUp: buildUrl('api/login/signup'),
}

export const API_ENDPOINTS_EMAIL = {
  sendCodeToResetPassword: buildUrl('api/email/send-code-reset-password'),
}

export const API_ENDPOINTS_ACTIVITIES = {
  getOneActivity: buildUrl('api/activities/activity'),
  getAllActivitiesCategories: buildUrl('api/activities/categories'),
  getNextPageActivitiesCategories: buildUrl('api/activities/categories/next'),
  createActivity: buildUrl('api/activities/create'),
  updateActivity: buildUrl('api/activities/update'),
  deleteActivity: buildUrl('api/activities/delete')
}
