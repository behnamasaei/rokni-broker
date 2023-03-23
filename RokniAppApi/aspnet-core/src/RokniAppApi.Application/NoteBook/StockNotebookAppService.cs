using System;
using RokniAppApi.Application.Contracts.StockNotebook;
using RokniAppApi.Domain.NoteModel;
using RokniAppApi.Stock;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RokniAppApi.Application.NoteBook
{
  public class StockNotebookAppService : CrudAppService<StockNotebook, StockNotebookDto, Guid, PagedAndSortedResultRequestDto,
                  StockNotebookCreateUpdateDto, StockNotebookCreateUpdateDto>,
IStockNotebookAppService
  {
    public StockNotebookAppService(IRepository<StockNotebook, Guid> repository)
        : base(repository)
    {
    }
  }
}