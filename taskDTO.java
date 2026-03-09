
public class TaskDTO {
  private String title;
  private boolean completed;

  public TaskDTO() {

  }

  public TaskDTO(String title, boolean completed) {
    this.title = title;
    this.completed = completed;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title
  }

  public String getCompleted() {
    return this.completed;
  }

  public void setCompleted(String completed) {
    this.completed = completed;
  }
}