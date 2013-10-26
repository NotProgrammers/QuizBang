using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace QuizBang.ManualTest
{
    [TestFixture]
    public class Test
    {
        [Test]
        public void SendOneMessage()
        {
            Uri uri = new Uri("http://localhost/");
            

            WebRequest request = HttpWebRequest.CreateHttp(uri)
        }
    }
}
