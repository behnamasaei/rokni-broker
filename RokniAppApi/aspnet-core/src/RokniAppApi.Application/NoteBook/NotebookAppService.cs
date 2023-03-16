using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Notebook;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RokniAppApi.NoteBook
{
  public class NotebookAppService : CrudAppService<NoteBookModel.NoteBook, NotebookDto, Guid, PagedAndSortedResultRequestDto,
                    NotebookCreateUpdateDto, NotebookCreateUpdateDto>,
INotebookAppService
  {
    public NotebookAppService(IRepository<NoteBookModel.NoteBook, Guid> repository)
        : base(repository)
    {
    }
  }
}