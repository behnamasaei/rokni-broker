using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RokniAppApi.Stock
{
  public interface IStockAppService : ICrudAppService<StockDto, Guid, PagedAndSortedResultRequestDto, StockCreateUpdateDto>,
   IApplicationService
  {

  }
}