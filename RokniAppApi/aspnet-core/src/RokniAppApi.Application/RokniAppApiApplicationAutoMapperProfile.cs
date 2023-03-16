using AutoMapper;
using RokniAppApi.Industry;
using RokniAppApi.Notebook;
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


    CreateMap<NoteBookModel.NoteBook, NotebookDto>().ReverseMap();
    CreateMap<NoteBookModel.NoteBook, NotebookCreateUpdateDto>().ReverseMap();

    CreateMap<StockModel.Stock, StockDto>().ReverseMap();
    CreateMap<StockModel.Stock, StockCreateUpdateDto>().ReverseMap();


  }
}
