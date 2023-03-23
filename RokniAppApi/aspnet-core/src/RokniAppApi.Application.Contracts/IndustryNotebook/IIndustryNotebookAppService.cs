using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RokniAppApi.Application.Contracts.IndustryNotebook
{
    public interface IIndustryNotebookAppService: ICrudAppService<IndustryNotebookDto, Guid, PagedAndSortedResultRequestDto, IndustryNotebookCreateUpdateDto>,
     IApplicationService
    {
         
    }
}