using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace RokniAppApi.Notebook
{
    public class NotebookDto:  EntityDto<Guid>
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
    }
}