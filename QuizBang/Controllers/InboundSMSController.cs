using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuizBang.Controllers
{
    public class InboundSMSController : Controller
    {
        public ActionResult SMSReceived(string to, string from, string msg_id, string content)
        {
            return new EmptyResult();
        }
    }
}
