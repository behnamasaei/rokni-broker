using AutoMapper;
using RokniAppApi.Application.Contracts.IndustryNotebook;
using RokniAppApi.Application.Contracts.StockNotebook;
using RokniAppApi.Domain.NoteModel;
using RokniAppApi.Industry;
using RokniAppApi.Stock;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi;

public class RokniAppApiApplicationAutoMapperProfile : Profile
{
  public RokniAppApiApplicationAutoMapperProfile()
  {
    /* You can configure your AutoMapper mapping configuration here.
     * Alternatively, you can split your mapping configurations
     * into multiple profile classes for a better organization. */
    CreateMap<IndustryModel.Industry, IndustryDto>().ReverseMap();
    CreateMap<IndustryModel.Industry, IndustryCreateUpdateDto>().ReverseMap();


    CreateMap<StockNotebook, StockNotebookDto>().ReverseMap();
    CreateMap<IndustryNotebook, IndustryNotebookDto>().ReverseMap();
    CreateMap<StockNotebook, StockNotebookCreateUpdateDto>().ReverseMap();
    CreateMap<IndustryNotebook, IndustryNotebookCreateUpdateDto>().ReverseMap();

    CreateMap<StockModel.Stock, StockDto>().ReverseMap();
    CreateMap<StockModel.Stock, StockCreateUpdateDto>().ReverseMap();


  }
}
