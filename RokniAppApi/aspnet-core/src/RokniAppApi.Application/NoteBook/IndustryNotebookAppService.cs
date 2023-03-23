using System;
using System.Threading.Tasks;
using RokniAppApi.Application.Contracts.IndustryNotebook;
using RokniAppApi.Domain.NoteModel;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace RokniAppApi.Application.NoteBook
{
  public class IndustryNotebookAppService : CrudAppService<IndustryNotebook, IndustryNotebookDto, Guid, PagedAndSortedResultRequestDto,
                  IndustryNotebookCreateUpdateDto, IndustryNotebookCreateUpdateDto>,
IIndustryNotebookAppService
  {

    private readonly IRepository<IndustryNotebook, Guid> _noteRepository;
    public IndustryNotebookAppService(IRepository<IndustryNotebook, Guid> repository)
        : base(repository)
    {
      _noteRepository = repository;
    }


    public override async Task<IndustryNotebookDto> CreateAsync(IndustryNotebookCreateUpdateDto input)
    {
      var note = ObjectMapper.Map<IndustryNotebookCreateUpdateDto, IndustryNotebook>(input);
      var result = await _noteRepository.InsertAsync(note, autoSave: true);
      return ObjectMapper.Map<IndustryNotebook, IndustryNotebookDto>(result);
    }

    public override async Task<IndustryNotebookDto> UpdateAsync(Guid id, IndustryNotebookCreateUpdateDto input)
    {
      var entity = await _noteRepository.FindAsync(e => e.Id == id);
      ObjectMapper.Map(input, entity);
      var result = await _noteRepository.UpdateAsync(entity, autoSave: true);
      return ObjectMapper.Map<IndustryNotebook, IndustryNotebookDto>(result);
    }
  }
}