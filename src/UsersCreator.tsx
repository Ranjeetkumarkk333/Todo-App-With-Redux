import React, { ChangeEvent, FC } from 'react';
import Card from './Card';
import H3 from './H3';
import Input from './Input';
import Button from './Button';
import { uniqueId } from 'lodash';
import { connect} from 'react-redux';

import { User } from './Models/User';
import { addUser } from './Actions/users';

type Props = { 
  onSubmit:(user:User)=>void
};

const UsersCreator:FC<Props> = ({onSubmit})=> {

  const [values, setValues] = React.useState({
    name:"",
    todoFormVisible:false
  });
  const Id = +uniqueId();
  const handleSubmit = () => {
    const userData={id: Id, name: values.name} 
       onSubmit(userData);
      setValues({ name:"", todoFormVisible:false});
    };
  const showUserForm = () => setValues({...values, todoFormVisible:true});
  const hideUserForm = () =>setValues({ ...values, todoFormVisible:false});

    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
      setValues({...values, name:event.target.value});
    };

  return (
    <>
    {!values.todoFormVisible && <Button onClick={showUserForm} theme="highlight" icon="+">Add a todo</Button>}
    {values.todoFormVisible && <Card>
      <H3>Create a user</H3>
      <div className="mt-4 w-80 mb-4">
       <Input value={values.name} onChange={onInputChange} placeholder="Your todo text" />
      </div>
      <div className="space-x-4">
       <Button disabled={!values.name} onClick={handleSubmit}>Save</Button>
       <Button onClick={hideUserForm} theme="secondary">Cancel</Button>
      </div>
    </Card>}
    </>
  );
}

export default connect(undefined, {onSubmit: addUser})(UsersCreator);
