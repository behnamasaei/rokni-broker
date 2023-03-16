using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Industry;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Stock
{
  public class StockDto:  EntityDto<Guid>
  {
    public string Name { get; set; }
    public string CodalLink { get; set; }
    public string ChartsazLink { get; set; }
    public string TablokhaniLink { get; set; }
    public string TsetmcLink { get; set; }
    public string RahvardLink { get; set; }
    public string ShakhesbanLink { get; set; }

    public Guid IndustryId { get; set; }
    public virtual IndustryDto Industry { get; set; }

  }
}