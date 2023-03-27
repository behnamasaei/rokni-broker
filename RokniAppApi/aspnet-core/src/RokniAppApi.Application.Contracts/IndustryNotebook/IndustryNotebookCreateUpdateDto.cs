using System;

namespace RokniAppApi.Application.Contracts.IndustryNotebook
{
  public class IndustryNotebookCreateUpdateDto
  {
    public Guid Id { get; set; }
    public string? Text { get; set; }
    public string? Note { get; set; }
  }
}