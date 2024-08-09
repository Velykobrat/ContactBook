// PlannerPage.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { AppBar } from '../AppBar/AppBar';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { fetchTasks } from '../../redux/operations';
import { getError, getIsLoading } from '../../redux/selectors';
import styles from './PlannerPage.module.css';

const PlannerPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Layout>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </div>
  );
};

export default PlannerPage;
