using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //ApiController can automatically bind attributes in the endpoint to variables of the same name
    //It also will perform data validation first (i.e. MaxLength or Required), and only run if successful
    [ApiController] 
    [Route("api/[controller]")]

    public class BaseApiController : ControllerBase
    {
        
    }
}