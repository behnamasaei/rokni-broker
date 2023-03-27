using System;

namespace RokniAppApi.Application.Contracts.StockNotebook
{
  public class StockNotebookCreateUpdateDto
  {
    public Guid Id { get; set; }
    public string? Text { get; set; }
    public string? Note { get; set; }
  }
}