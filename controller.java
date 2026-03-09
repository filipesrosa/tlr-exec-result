
@Controller
@RequestMapping('/api');
public TaskController extends RestController () {
  @GetMapping('/tasks')
  public ResponseEntity<List<string>> getTasksList() {
    List<string> tasks = new ArrayList<>();
    tasks = taskService.getList();
    return ResponseEntity.ok(tasks);
  }

  @PostMapping('/tasks')
  public ResponseEntity getTasksList(@RequestBody TaskDTO task) {
    try {
      taskService.createTask(task);
    } catch (e) {
      return ResponseEntity.status(400).send(e);
    }
    return ResponseEntity.ok();
  }
}
