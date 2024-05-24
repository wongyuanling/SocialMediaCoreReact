using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Diagnostics;

namespace API.Controllers;

public class ActivitiesController : BaseAPIController
{
    private readonly DataContext _context;
    public ActivitiesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
    { //api/activities
        return await _context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Domain.Activity>> GetActivity(Guid id)
    { //api/activities/id
        return await _context.Activities.FindAsync(id);

    }


}
