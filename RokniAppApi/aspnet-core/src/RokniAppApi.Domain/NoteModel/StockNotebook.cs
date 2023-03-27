using System;
using RokniAppApi.StockModel;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.Domain.NoteModel
{
  public class StockNotebook : FullAuditedAggregateRoot<Guid>
  {
    public StockNotebook()
    {
        Id = Guid.NewGuid();
    }
    public string Text { get; set; }
    public string Note { get; set; }
    public Stock Stock { get; set; }
  }
}