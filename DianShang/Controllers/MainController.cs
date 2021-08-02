using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DianShang.Controllers
{
    public class MainController : Controller
    {
        // 管理员主页面视图加载
        public ActionResult Main()
        {
            return View();
        }
    }
}