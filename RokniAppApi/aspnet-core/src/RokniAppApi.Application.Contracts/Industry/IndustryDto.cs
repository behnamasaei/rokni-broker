using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Application.Contracts.IndustryNotebook;
using RokniAppApi.Stock;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Industry
{
  public class IndustryDto : EntityDto<Guid>
  {
    public string Name { get; set; }
    public string CodalLink { get; set; }
    public string ChartsazLink { get; set; }
    public string ChartIndex { get; set; }
    public string TablokhaniLink { get; set; }
    public string TsetmcLink { get; set; }
    public string RahvardLink { get; set; }
    public string ShakhesbanLink { get; set; }
    public string ChartixLink { get; set; }
    public int SortNumber { get; set; }
    public bool Choosen {get; set;}
    public Guid IndustryNotebookId { get; set; }
    public virtual IndustryNotebookDto IndustryNotebook { get; set; }
    public virtual ICollection<StockDto> Stocks { get; set; }
  }
}