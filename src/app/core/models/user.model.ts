interface User {
  id: number;
  username: string;
  email: string;
  type: 'PARENT' | 'STAFF';
  isAdmin: boolean;
}

export default User;
