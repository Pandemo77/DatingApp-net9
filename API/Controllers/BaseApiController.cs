using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Components.RouteAttribute;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController :ControllerBase
{

}
