--  create database hyf_db_Homework1;
--  use hyf_db_Homework1;

--  select * from  task;
--  select * from status;
 
-- Task 1 number of tasks

-- select count(id) as Number_of_tasks from task;

-- Task 2 due date is invalid

-- select task.id,task.title,task.due_date from task 
-- where due_date is null;

-- Task 3: Task that are done
-- select task.id,task.title,status.name from task 
-- inner join status 
-- on status.id=task.status_id
-- where status.name like '%Done%';

-- Task 4: tasks other Than done

-- select task.id,task.title,status.name from task 
-- inner join status 
-- on status.id=task.status_id
-- where status.name not like '%Done%';

-- Task 5: sort by tasks created recently

-- select task.id,task.title, task.created  from task
-- order by created desc;

-- task 6: Most recently created task
-- select task.id,task.title, task.created  from task
-- order by created desc
-- limit 1;

-- task 7: tasks that contain database
--  select task.id,task.title,task.due_date,task.description from task
 -- where task.title or task.description like '%database%';
 
 -- task 8: get title and its status
 
 -- select task.title, status.name from task
--  inner join status on task.status_id= status.id;

-- task 9: count of each status

-- select  count(task.id) as Count_of_each_status,status.name from task
-- inner join status on status.id = task.status_id
-- group by status.name;

-- task 10:

-- select task.id, task.title, status.name from task
-- inner join status on task.status_id=status.id
-- order by status.name desc;












