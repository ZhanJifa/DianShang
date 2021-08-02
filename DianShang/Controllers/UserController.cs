using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DianShang.Controllers
{
    public class UserController : Controller
    {
<<<<<<< HEAD
        // GET: User
        public ActionResult Index()
        {
            return View();
        }
=======
        Models.DianziShangwuEntities db = new Models.DianziShangwuEntities();
        //用户信息视图加载
        public ActionResult UserIndex()
        {
            return View();
        }
        //
        public ActionResult SelectUsers(string UserName)
        {
            var sel = db.member.ToList();
            if (UserName!=null)
            {
                sel = sel.Where(s => s.name.Contains(UserName) || s.truename.Contains(UserName)).ToList();
            }
            return Json(sel, JsonRequestBehavior.AllowGet);

        }
>>>>>>> 992f193ee094bd3059f5dbed27998abd3e2b123c
    }
}