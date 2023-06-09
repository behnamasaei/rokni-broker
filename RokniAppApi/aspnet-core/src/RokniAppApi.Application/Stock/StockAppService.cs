using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using RokniAppApi.Domain.NoteModel;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace RokniAppApi.Stock
{
  public class StockAppService : CrudAppService<StockModel.Stock, StockDto, Guid, PagedAndSortedResultRequestDto,
                    StockCreateUpdateDto, StockCreateUpdateDto>,
IStockAppService
  {
    private readonly IRepository<StockModel.Stock, Guid> _stockRepository;
    IRepository<StockNotebook, Guid> _stockNotebookRepository;
    public StockAppService(IRepository<StockModel.Stock, Guid> repository, IRepository<StockNotebook, Guid> stockNotebookRepository)
        : base(repository)
    {
      _stockRepository = repository;
      _stockNotebookRepository = stockNotebookRepository;
    }

    public override async Task<StockDto> CreateAsync(StockCreateUpdateDto input)
    {
      var notebook = new StockNotebook();
      await _stockNotebookRepository.InsertAsync(notebook, autoSave: true);
      var stock = ObjectMapper.Map<StockCreateUpdateDto, StockModel.Stock>(input);
      stock.StockNotebookId = notebook.Id;
      var stockResult = await _stockRepository.InsertAsync(stock, autoSave: true);

      var queryable = await _stockRepository.WithDetailsAsync(e => e.Industry);
      var query = queryable.Where(x => x.Id == stock.Id);
      var stockWithDetail = await AsyncExecuter.FirstOrDefaultAsync(query);
      return ObjectMapper.Map<StockModel.Stock, StockDto>(stockWithDetail);
    }


    public override async Task<StockDto> UpdateAsync(Guid id, StockCreateUpdateDto input)
    {
      var entity = await _stockRepository.FindAsync(e => e.Id == id);
      ObjectMapper.Map(input, entity);
      var stockResult = await _stockRepository.UpdateAsync(entity, autoSave: true);

      var queryable = await _stockRepository.WithDetailsAsync(e => e.Industry);
      var query = queryable.Where(x => x.Id == entity.Id);
      var stockWithDetail = await AsyncExecuter.FirstOrDefaultAsync(query);
      return ObjectMapper.Map<StockModel.Stock, StockDto>(stockWithDetail);
    }

    public async Task<bool> UpdateChoosenAsync(Guid id, bool choosen)
    {
      var entity = await _stockRepository.FindAsync(e => e.Id == id);
      entity.Choosen = choosen;
      var result = _stockRepository.UpdateAsync(entity, autoSave: true).IsCompletedSuccessfully;
      return result;
    }

    public async Task<PagedResultDto<StockDto>> GetListChoosenAsync(PagedAndSortedResultRequestDto input)
    {
      var query = await _stockRepository.WithDetailsAsync(e => e.StockNotebook);
      var stocks = await AsyncExecuter.ToListAsync(query);
      stocks = stocks.Where(e => e.Choosen == true).ToList();
      var stockPaged = stocks.OrderBy(e => e.SortNumber).Skip(input.SkipCount).Take(input.MaxResultCount).ToList();

      var result = new PagedResultDto<StockDto>();
      result.Items = ObjectMapper.Map<List<StockModel.Stock>, List<StockDto>>(stockPaged);
      result.TotalCount = stocks.Count;
      return result;
    }


    public async Task<PagedResultDto<StockDto>> GetListFiltredAsync(PagedAndSortedResultRequestDto input)
    {
      string pathFile = @"H:\Rokni-broker\rokni-broker\ScrapFilterTsetmc\SavedList.txt";
      var logFile = File.ReadAllLines(pathFile);
      var stockListTxt = new List<string>(logFile);

      var query = await _stockRepository.WithDetailsAsync(e => e.StockNotebook);
      var stocks = await AsyncExecuter.ToListAsync(query);

      var filteredList = from s1 in stockListTxt
                         join s2 in stocks on s1 equals s2.Name
                         where (String.Compare(s1, s2.Name, CultureInfo.CurrentCulture, CompareOptions.IgnoreNonSpace) > -3) && (String.Compare(s1, s2.Name, CultureInfo.CurrentCulture, CompareOptions.IgnoreNonSpace) < 3)
                         select s2;

      var stockFilterd = filteredList.Skip(input.SkipCount).Take(input.MaxResultCount).ToList();

      var result = new PagedResultDto<StockDto>();
      result.Items = ObjectMapper.Map<List<StockModel.Stock>, List<StockDto>>(stockFilterd);
      result.TotalCount = stockFilterd.Count;
      return result;
    }


    public async Task<PagedResultDto<StockDto>> GetListWithDetailsAsync(PagedAndSortedResultRequestDto input,
    string? name)
    {
      var query = await _stockRepository.WithDetailsAsync(e => e.Industry);
      var stocksQuery = await AsyncExecuter.ToListAsync(query);

      var stocks = new List<StockModel.Stock>();
      var result = new PagedResultDto<StockDto>();

      if (name != null)
      {
        stocks = stocksQuery.Where(x => x.Name.Contains(name) || x.Industry.Name.Contains(name))
                    .Skip(input.SkipCount).Take(input.MaxResultCount).ToList();
        result.TotalCount = stocks.Count;

      }
      else
      {
        stocks = stocksQuery.Skip(input.SkipCount).Take(input.MaxResultCount).ToList();
        result.TotalCount = stocksQuery.Count;
      }


      result.Items = ObjectMapper.Map<List<StockModel.Stock>, List<StockDto>>((List<StockModel.Stock>)stocks);
      return result;
    }

    public async Task<PagedResultDto<StockDto>> GetListStockWithIndustryIdAsync(Guid id, PagedAndSortedResultRequestDto input)
    {
      var queryable = await _stockRepository.WithDetailsAsync(e => e.StockNotebook);
      //Create a query
      var query = from stock in queryable
                  where stock.IndustryId == id
                  orderby stock.SortNumber
                  select stock;

      var stocksQuery = await AsyncExecuter.ToListAsync(query);
      var stocks = stocksQuery.Skip(input.SkipCount).Take(input.MaxResultCount).ToList();

      var result = new PagedResultDto<StockDto>();
      result.Items = ObjectMapper.Map<List<StockModel.Stock>, List<StockDto>>((List<StockModel.Stock>)stocks);
      result.TotalCount = stocksQuery.Count;
      return result;
    }
  }
}