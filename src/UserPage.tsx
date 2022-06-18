import Container from './Container';
import H1 from './H1';
import { UserData } from './UserList';
import UsersCreator from './UsersCreator';


function UserPage() {
  
  
  return (
    <>
      <Container>
        <H1>User List</H1>
        <UsersCreator/>
        <UserData/>
      </Container>
    </>
  );
}

export default UserPage;