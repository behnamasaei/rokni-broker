using System;
using RokniAppApi.IndustryModel;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.Domain.NoteModel
{
  public class IndustryNotebook : FullAuditedAggregateRoot<Guid>
  {
    public IndustryNotebook()
    {
      Id = Guid.NewGuid();
    }
    public string Text { get; set; }
    public string Note { get; set; }
    public Industry Industry { get; set; }
  }
}