using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RokniAppApi.Application.Contracts.StockNotebook
{
    public interface IStockNotebookAppService: ICrudAppService<StockNotebookDto, Guid, PagedAndSortedResultRequestDto, StockNotebookCreateUpdateDto>,
     IApplicationService
    {
         
    }
}