using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace QuizBang.Controllers
{
    public class OutboundSMSController : Controller
    {
        //
        // GET: /OutboundSMS/

        public ActionResult SendSMS(string to, string message)
        {
            string uri =
                string.Format(
                    "https://api.clockworksms.com/http/send.aspx?key=204a84d5af1692e59d848ea099b4a5a7bcc24fd5&to={0}&from=07860033103&content={1}",
                    Url.Encode(to), Url.Encode(message));
            HttpWebRequest request = HttpWebRequest.CreateHttp(uri);
            request.GetResponse();

            return new EmptyResult();
        }
    }
}
