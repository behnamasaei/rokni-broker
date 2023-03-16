using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.StockModel;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.IndustryModel
{
  public class Industry : AuditedAggregateRoot<Guid>
  {
    public string Name { get; set; }
    public virtual ICollection<Stock> Stocks { get; set; }

    public Industry()
    {
      Id = Guid.NewGuid();
    }
  }
}