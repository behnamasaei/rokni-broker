using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace RokniAppApi.Stock
{
  public class StockAppService : CrudAppService<StockModel.Stock, StockDto, Guid, PagedAndSortedResultRequestDto,
                    StockCreateUpdateDto, StockCreateUpdateDto>,
IStockAppService
  {
    private readonly IRepository<StockModel.Stock, Guid> _stockRepository;
    public StockAppService(IRepository<StockModel.Stock, Guid> repository)
        : base(repository)
    {
      _stockRepository = repository;
    }

    public async Task<PagedResultDto<StockDto>> GetListWithDetailsAsync(PagedAndSortedResultRequestDto input)
    {
      var query = await _stockRepository.WithDetailsAsync(e => e.Industry);
      var stocks = await AsyncExecuter.ToListAsync(query);
      var result = new PagedResultDto<StockDto>();
      result.Items = ObjectMapper.Map<List<StockModel.Stock>, List<StockDto>>((List<StockModel.Stock>)stocks);
      result.TotalCount = result.Items.Count;
      return result;
    }
  }
}