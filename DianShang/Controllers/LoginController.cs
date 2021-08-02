using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DianShang.Controllers
{
    public class LoginController : Controller
    {
        Models.DianziShangwuEntities db = new Models.DianziShangwuEntities();
        /// <summary>
        /// 登入页面
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// 登入功能
        /// </summary>
        /// <returns></returns>
        //[HttpPost]
        public ActionResult  Login(string TLoginName,string TLoginPwd)
        {
            var user = db.member.SingleOrDefault(e=>e.name== TLoginName && e.password== TLoginPwd);
            string b = "";
            if (user!=null)
            {
                b = "OK:登入成功";
            }
            else
            {
                b= "NO:登入失败";
            }
            return Content(b);
        }
        /// <summary>
        /// 注册页面
        /// </summary>
        /// <returns></returns>
        public ActionResult ZcLogin(Models.member member)
        {
            if (db.member.Where(e=>e.name==member.name).ToList().Count>0)
            {
                return Content("用户名已存在");
            }
            if (string.IsNullOrEmpty(member.name))
            {
                return Content("用户名不能为空");
            }
            
            db.member.Add(member);
            int num= db.SaveChanges();
            return Content(num.ToString());
        }
    }
}