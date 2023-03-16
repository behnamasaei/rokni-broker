using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RokniAppApi.Stock
{
  public class StockAppService : CrudAppService<StockModel.Stock, StockDto, Guid, PagedAndSortedResultRequestDto,
                    StockCreateUpdateDto, StockCreateUpdateDto>,
IStockAppService
  {
    public StockAppService(IRepository<StockModel.Stock, Guid> repository)
        : base(repository)
    {
    }
  }
}