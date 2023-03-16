using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RokniAppApi.Stock
{
  public class StockCreateUpdateDto
  {
    [Required]
    public string Name { get; set; }
    public string CodalLink { get; set; }
    public string ChartsazLink { get; set; }
    public string TablokhaniLink { get; set; }
    public string TsetmcLink { get; set; }
    public string RahvardLink { get; set; }
    public string ShakhesbanLink { get; set; }

    public Guid IndustryId { get; set; }
  }
}