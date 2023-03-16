using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace RokniAppApi.NoteBookModel
{
    public class NoteBook :  FullAuditedAggregateRoot<Guid>
    {
        public string Text { get; set; }
    }
}