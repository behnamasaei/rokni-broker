using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Domain.NoteModel;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace RokniAppApi.Industry
{
  public class IndustryAppService : CrudAppService<IndustryModel.Industry, IndustryDto, Guid, PagedAndSortedResultRequestDto,
                      IndustryCreateUpdateDto, IndustryCreateUpdateDto>,
  IIndustryAppService
  {

    IRepository<IndustryModel.Industry, Guid> _repository;
    IRepository<IndustryNotebook, Guid> _industryNotebookRepository;

    public IndustryAppService(IRepository<IndustryModel.Industry, Guid> repository, IRepository<IndustryNotebook, Guid> industryNotebookRepository)
        : base(repository)
    {
      _repository = repository;
      _industryNotebookRepository = industryNotebookRepository;
    }

    public override async Task<IndustryDto> CreateAsync(IndustryCreateUpdateDto input)
    {
      var notebook = new IndustryNotebook();
      await _industryNotebookRepository.InsertAsync(notebook, autoSave: true);
      var industry = ObjectMapper.Map<IndustryCreateUpdateDto, IndustryModel.Industry>(input);
      industry.IndustryNotebookId = notebook.Id;
      var resutl = await _repository.InsertAsync(industry, autoSave: true);
      return ObjectMapper.Map<IndustryModel.Industry, IndustryDto>(resutl);
    }

    public override async Task<PagedResultDto<IndustryDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
      var query = await _repository.WithDetailsAsync();
      var industries = await AsyncExecuter.ToListAsync(query);
      var industryPaged = industries.OrderBy(e => e.SortNumber).Skip(input.SkipCount).Take(input.MaxResultCount).ToList();

      var result = new PagedResultDto<IndustryDto>();
      result.Items = ObjectMapper.Map<List<IndustryModel.Industry>, List<IndustryDto>>(industryPaged);
      result.TotalCount = industries.Count;
      return result;
    }


    public async Task<IndustryDto> GetByIdWithDetailAsync(Guid id)
    {
      var query = await _repository.WithDetailsAsync(e => e.Stocks, e => e.IndustryNotebook);
      var industries = await AsyncExecuter.ToListAsync(query);
      var industry = industries.FirstOrDefault(e => e.Id == id);
      return ObjectMapper.Map<IndustryModel.Industry, IndustryDto>(industry);
    }
  }
}