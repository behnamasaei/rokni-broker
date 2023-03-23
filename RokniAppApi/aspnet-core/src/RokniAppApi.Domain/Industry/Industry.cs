using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Domain.NoteModel;
using RokniAppApi.StockModel;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.IndustryModel
{
  public class Industry : AuditedAggregateRoot<Guid>
  {
    public string Name { get; set; }
    public virtual ICollection<Stock> Stocks { get; set; }
    public string ChartIndex { get; set; }
    public string CodalLink { get; set; }
    public string ChartsazLink { get; set; }
    public string TablokhaniLink { get; set; }
    public string TsetmcLink { get; set; }
    public string RahvardLink { get; set; }
    public string ShakhesbanLink { get; set; }
    public int SortNumber { get; set; }
    public Guid IndustryNotebookId { get; set; }
    public virtual IndustryNotebook IndustryNotebook { get; set; }
    public Industry()
    {
      Id = Guid.NewGuid();
    }
  }
}