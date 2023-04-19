var getUserRole = (name, role) => {
  switch (role) {
    case 'admin':
      return `${name} is admin will all access`;
      break;
    case 'subAdmin':
      return `${name} is sub-admin with access to create and delete count`;
      break;
    case 'testprep':
      return `${name} is testprep with access to create and delete test`;
      break;
    case 'user':
      return `${name} is a user to consume a content`;
      break;

    default:
      return `${name} is a trial user`;
      break;
  }
};

console.log(getUserRole('Adnan', 'admin'));
