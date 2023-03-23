using System;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Application.Contracts.StockNotebook
{
    public class StockNotebookDto:  EntityDto<Guid>
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}