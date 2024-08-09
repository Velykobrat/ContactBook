import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { AppBar } from '../AppBar/AppBar';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { fetchTasks } from '../../redux/operations';
import { getError, getIsLoading } from '../../redux/selectors';

export const PlannerPage = () => { 
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};

export default PlannerPage; 
