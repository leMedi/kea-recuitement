const roles = ['recruiter', 'applicant'];

const roleRights = new Map();
roleRights.set(roles[1], []);
roleRights.set(roles[0], ['getUsers', 'manageUsers']);

module.exports = {
  roles,
  roleRights,
};
