using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RokniApi.Data;
using RokniApi.Models;

namespace RokniApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class IndustryController : ControllerBase
  {


    // GET: api/Industry
    [HttpGet("get-all-industries")]
    public async Task<IActionResult> GetListIndustry()
    {
      using var context = new ApplicationContext();
      return Ok(await context.industries.ToListAsync());
    }


    // GET: api/Industry
    [HttpGet("get-industry/{id}")]
    public async Task<IActionResult> GetIndustry(Guid id)
    {
      using var context = new ApplicationContext();
      return Ok(await context.industries.FindAsync(id));
    }

    // POST: api/Industry
    [HttpPost]
    public async Task<IActionResult> PostIndustry([FromBody] Industry industry)
    {
      industry.Id = Guid.NewGuid();
      using var context = new ApplicationContext();
      if (ModelState.IsValid)
      {
        await context.industries.AddAsync(industry);
        context.SaveChanges();
        return Ok(industry);
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    // PUT: api/Industry
    [HttpPut("{id}")]
    public async Task<IActionResult> PutIndustry(Guid id, [FromBody] Industry industry)
    {
      using var context = new ApplicationContext();
      if (id != industry.Id)
      {
        return BadRequest();
      }
      if (ModelState.IsValid)
      {
        context.Update(industry);
        context.SaveChanges();
        return Ok(industry);
      }
      else
      {
        return BadRequest(ModelState);
      }
    }

    [HttpDelete("{id}")]
    public async Task<bool> DeleteIndustry(Guid id)
    {
      using var context = new ApplicationContext();
      var industry = await context.industries.FindAsync(id);
      if (industry != null)
      {
        context.Remove(industry);
        context.SaveChanges();
        return true;
      }
      else
      {
        return false;
      }
    }
  }
}