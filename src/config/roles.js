const roles = ['recruiter', 'applicant'];

const roleRights = new Map();
roleRights.set(roles[1], ['getPosts']);
roleRights.set(roles[0], ['getUsers', 'manageUsers', 'getPosts', 'managePosts']);

module.exports = {
  roles,
  roleRights,
};
