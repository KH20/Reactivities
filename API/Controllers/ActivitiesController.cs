using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{

    public class ActivitiesController : BaseApiController
    {
        public IMediator Mediator { get; }
        public ActivitiesController(IMediator mediator)
        {
            this.Mediator = mediator;
        }

        [HttpGet] //api/activities
        public async Task <ActionResult<List<Activity>>> GetActivities(){
            return await this.Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/activities/{id}
        public async Task<ActionResult<Activity>> GetActivity(Guid id){
            // return await this.context.Activities.FindAsync(id);
            return Ok();
        }

    }
}