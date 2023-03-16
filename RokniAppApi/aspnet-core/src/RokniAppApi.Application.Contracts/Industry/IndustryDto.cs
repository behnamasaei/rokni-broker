using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Stock;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Industry
{
    public class IndustryDto :  EntityDto<Guid>
  {
    public string Name { get; set; }
    public virtual ICollection<StockDto> Stocks { get; set; }
  }
}