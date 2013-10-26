using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace QuizBang
{
    public class QuizHub : Hub
    {
        public void Test()
        {
            Clients.All.broadcastMessage();
        }
    }
}