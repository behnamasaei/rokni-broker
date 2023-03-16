using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RokniAppApi.Industry
{
  public class IndustryCreateUpdateDto
  {
    [Required]
    public string Name { get; set; }
  }
}