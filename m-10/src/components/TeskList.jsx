/** @format */

import React from "react";
import { useSelector } from "react-redux";

import { useGetTasksQuery } from "../features/tasks/tasksApi";
import Task from "./Task.jsx";

function TeskList() {
  const { search } = useSelector(state => state.filter);

  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();
  const { shows } = useSelector(state => state.projectShows);

  const filterProject = item => {
    if (shows.includes(item.project.projectName)) {
      return true;
    } else {
      return false;
    }
  };

  const filterBySearchValue = item => {
    if (!search) {
      return true;
    } else if (search) {
      return item.taskName.toLowerCase().includes(search.toLowerCase());
    }
  };
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>There was an error!</div>;
  }
  if (!isLoading && !isError && isSuccess) {
    if (tasks?.length === 0) {
      content = <div>Project not found</div>;
    } else if (tasks.length > 0) {
      if (tasks.filter(filterProject).filter(filterBySearchValue).length === 0) {
        content = <div>No task to show</div>;
      } else if (tasks.filter(filterProject).filter(filterBySearchValue).length > 0) {
        content = tasks
          .filter(filterProject)
          .filter(filterBySearchValue)
          .map(task => <Task task={task} key={task.id} />);
      }
    }
  }

  return (
    <>
      <div className="lws-task-list">{content}</div>
    </>
  );
}

export default TeskList;
