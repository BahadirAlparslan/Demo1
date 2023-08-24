using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _meditaor;

        protected IMediator Mediator => _meditaor ??= 
            HttpContext.RequestServices.GetService<IMediator>();
    }
}