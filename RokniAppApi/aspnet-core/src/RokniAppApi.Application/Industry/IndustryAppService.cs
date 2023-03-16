using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RokniAppApi.Industry
{
  public class IndustryAppService : CrudAppService<IndustryModel.Industry, IndustryDto, Guid, PagedAndSortedResultRequestDto,
                      IndustryCreateUpdateDto, IndustryCreateUpdateDto>,
  IIndustryAppService
  {
    public IndustryAppService(IRepository<IndustryModel.Industry, Guid> repository)
        : base(repository)
    {
    }
  }
}