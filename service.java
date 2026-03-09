
@Service

public List<TaskDTO> getList() {
  List<TaskDTO> tasks = taskRepository.getAll();
  return tasks;
}

public TaskDTO createTask(TaskDTO task) throws ErrorException {
  if (task.getTitle().isEmpty()) {
    throw new ErrorException('title could not be blank');
  }
  taskRepository.save(task);
}

