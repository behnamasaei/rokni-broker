using System;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Application.Contracts.IndustryNotebook
{
    public class IndustryNotebookDto:  EntityDto<Guid>
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}