using System;
using RokniAppApi.Stock;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace RokniAppApi.Industry
{
  public interface IIndustryAppService : ICrudAppService<IndustryDto, Guid, PagedAndSortedResultRequestDto, IndustryCreateUpdateDto>,
     IApplicationService
  {

  }
}