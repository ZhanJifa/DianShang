//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DianShang.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tb_order
    {
        public int OrderID { get; set; }
        public string UserName { get; set; }
        public long PorductId { get; set; }
        public Nullable<double> price { get; set; }
        public string Products { get; set; }
        public Nullable<double> ProductTotal { get; set; }
        public Nullable<long> num { get; set; }
        public Nullable<int> State { get; set; }
    }
}
