using AutoMapper;
using RokniAppApi.Industry;
using RokniAppApi.Notebook;
using RokniAppApi.Stock;

namespace RokniAppApi;

public class RokniAppApiApplicationAutoMapperProfile : Profile
{
  public RokniAppApiApplicationAutoMapperProfile()
  {
    /* You can configure your AutoMapper mapping configuration here.
     * Alternatively, you can split your mapping configurations
     * into multiple profile classes for a better organization. */
    CreateMap<IndustryModel.Industry, IndustryDto>().ReverseMap();
    CreateMap<NoteBookModel.NoteBook, NotebookDto>().ReverseMap();
    CreateMap<StockModel.Stock, StockDto>().ReverseMap();

  }
}
