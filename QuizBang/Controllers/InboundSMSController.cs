﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;

namespace QuizBang.Controllers
{
    public class InboundSMSController : Controller
    {
        public ActionResult SMSReceived(string to, string from, string msg_id, string content)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<QuizHub>();
            hubContext.Clients.All.broadcastMessage(from, content);

            return new EmptyResult();
        }

        public ActionResult Test()
        {
            string message = "Bang - " + DateTime.Now.ToString();

            var hubContext = GlobalHost.ConnectionManager.GetHubContext<QuizHub>();
            hubContext.Clients.All.broadcastMessage("0123456789", DateTime.Now.ToLongTimeString());

            return Content(message);
        }

    }
}
