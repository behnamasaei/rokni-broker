using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.IndustryModel;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.StockModel
{
  public class Stock : AuditedAggregateRoot<Guid>
  {
    public string Name { get; set; }
    public string CodalLink { get; set; }
    public string ChartsazLink { get; set; }
    public string TablokhaniLink { get; set; }
    public string TsetmcLink { get; set; }
    public string RahvardLink { get; set; }
    public string ShakhesbanLink { get; set; }

    public Guid IndustryId { get; set; }
    public virtual Industry Industry { get; set; }

  }
}
