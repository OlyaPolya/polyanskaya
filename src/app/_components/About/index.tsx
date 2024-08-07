import { AppContext } from '@/app/_context/appContext';
import { useContext } from 'react';
import Jobs from './Job';
import List from './List';

export default function Main() {
  const { skills, contacts } = useContext(AppContext);

  return (
    <>
      <Jobs/>
      <List title={skills.title} list={skills.stack}/>
      <List title={contacts.title} list={contacts.stack}/>
    </>
  );
}
